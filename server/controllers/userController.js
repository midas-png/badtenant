const {
    User,
    UserSignupToken,
    UserResetToken,
    Comment,
} = require(".././models/models");
const ApiError = require("../errorApi/ApiError");
const { Op } = require("sequelize");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const sendMail = require("../utils/sendEmail/index");

const generateJwt = (id, email, role) => {
    return jwt.sign(
        {
            id,
            email,
            role,
        },
        process.env.SECRET_KEY,
        { expiresIn: "48h" }
    );
};

class UserController {
    async registration(req, res, next) {
        try {
            const {
                first_name,
                last_name,
                email,
                password,
                location,
                description,
                img,
                role,
            } = req.body;
            if (
                !first_name ||
                !last_name ||
                !email ||
                !password ||
                !location ||
                !role
            ) {
                return next(
                    ApiError.badRequest("Some parameter/-s was not provided")
                );
            }

            const candidate = await User.findOne({ where: { email } });

            if (candidate) {
                return next(ApiError.badRequest("Already in use"));
            }

            if (img) {
                img = "";
            }

            const hashPassword = await bcrypt.hash(password, 5);
            const user = await User.create({
                title: first_name + " " + last_name,
                first_name: first_name,
                last_name: last_name,
                email: email,
                password: hashPassword,
                location: location,
                description: description,
                img: img,
                role: role,
            });

            // const userToken = await UserSignupToken.create({
            //     userId: user.id,
            //     token: token,
            // });
            // const message = `http://217.151.229.239/api/user/verify/${user.id}/${userToken.token}`;
            // await sendMail(user.email, "Confirm Email", message);

            return res.json({message: 'User was created'});
        } catch (e) {
            return next(ApiError.internal(e));
        }
    }

    async login(req, res, next) {
        try {
            const { email, password } = req.body;
            const user = await User.findOne({ where: { email } });
            if (!user) {
                return next(ApiError.badRequest("User was not found"));
            }

            // if (user.isVerified == 0) {
            //     return next(
            //         ApiError.internal("User account is not verified by email")
            //     );
            // }

            let comparePassword = bcrypt.compareSync(password, user.password);
            if (!comparePassword) {
                return next(ApiError.badRequest("Invalid login or/-and password"));
            }
            const token = generateJwt(user.id, user.email, user.role);
            return res.json({ token });
        } catch (error) {
            return next(ApiError.internal(error));
        }
    }

    async check(req, res, next) {
        const token = generateJwt(req.user.id, req.user.email, req.user.role);
        return res.json({ token });
    }

    async verify(req, res, next) {
        const { id, resetToken } = req.params;

        try {
            const user = await User.findOne({ id: id });
            if (!user) return next(ApiError.badRequest("User was not found"));

            const userToken = await UserSignupToken.findOne({
                userId: user.id,
                token: resetToken,
            });
            if (!userToken) return next(ApiError.badRequest("Invalid link"));

            await User.update(
                {
                    isVerified: 1,
                },
                { where: { id: user.id } }
            );
            await UserSignupToken.destroy({
                where: {
                    userId: user.id,
                },
            });

            return res.redirect(`${process.env.CLIENT_URL}/signin`);
        } catch (error) {
            next(ApiError.internal(e));
        }
    }

    async resetPassword(req, res, next) {
        const { email } = req.body;
        try {
            const user = await User.findOne({ email });
            if (!user)
                return next(
                    ApiError.badRequest("User with given email doesn't exists")
                );

            let token = await UserResetToken.findOne({ userId: user.id });
            if (!token) {
                token = await UserResetToken.create({
                    userId: user.id,
                    token: generateJwt(user.id, user.email, user.role),
                });
            }
            const link = `${process.env.BASE_URL}/user/reset_password/${user.id}/${token.token}`;
            await sendMail(email, "Password reset", link);
            return res.json({
                message: "Password reset link sent to your email account",
            });
        } catch (e) {
            return next(ApiError.internal(e));
        }
    }

    async resetTokenVerify(req, res, next) {
        const { userId, resetToken } = req.params;
        const { disableRedirect } = req.query;
        try {
            const user = await User.findOne({
                id: userId,
            });
            if (!user)
                return next(ApiError.badRequest("Invalid or expired link"));
            const dbToken = await UserResetToken.findOne({
                userId: user.id,
                resetToken,
            });
            if (!dbToken || dbToken.token !== resetToken)
                return next(ApiError.badRequest("Invalid or expired link"));

            if (!disableRedirect)
                return res.redirect(
                    `${process.env.CLIENT_URL}/reset_password/${user.id}/${dbToken.token}`
                );
        } catch (error) {
            return next(ApiError.internal(error));
        }
    }

    async resetUserPassword(req, res, next) {
        const { userId, password } = req.body;
        try {
            const hashPassword = await bcrypt.hash(password, 5);
            await User.update(
                {
                    password: hashPassword,
                },
                { where: { id: userId } }
            );
            return res.json({message: 'Password successfully changed'})
        } catch (error) {
            next(ApiError.internal(error))
        }
    }

    async getAll(req, res, next) {
        try {
            let { limit, page } = req.query;
            page = page || 1;
            limit = limit || 9;
            let offset = page * limit - limit;

            const users = await User.findAll({
                limit,
                offset,
                include: [{ model: Comment, as: "comments" }],
            });
            return res.json(users);
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }

    async getOne(req, res, next) {
        const { id } = req.params;

        if (!id) {
            next(ApiError.badRequest("No ID was passed"));
        }

        try {
            const user = await User.findOne({
                where: { id },
                include: [{ model: Comment, as: "comments" }],
            });

            return res.json(user);
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }

    async getUserImage(req, res, next) {
        const { id } = req.params;

        if (!id) {
            next(ApiError.badRequest("No ID was passed"));
        }

        try {
            const user = await User.findOne({
                where: { id },
            });

            return res.json(user.img);
        } catch (e) {
            next(ApiError.badRequest(e));
        }
    }

    async update(req, res, next) {
        const { id } = req.params;
        const { first_name, last_name, location, description } = req.body;

        if (!id) {
            return next(ApiError.badRequest("No ID was passed"));
        }

        try {
            const user = await User.update(
                {
                    first_name: first_name,
                    last_name: last_name,
                    location: location,
                    description: description,
                    title: first_name + " " + last_name,
                },
                { where: { id: id } }
            );

            return res.json(user);
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }

    async banOne(req, res, next) {
        const { id } = req.params;

        if (!id) {
            next(ApiError.badRequest("No ID was passed"));
        }

        try {
            const user = await User.destroy({
                where: {
                    id: id,
                },
            });
            return res.json(user);
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }

    async getUserRating(req, res, next) {
        const { id } = req.params;

        try {
            let averageRate = 0;
            const rating = await Comment.findAll({
                where: { to_id: id },
            });

            rating.map((value) => (averageRate = averageRate + value.rate));
            return res.json(Math.floor((averageRate / rating.length) * 2) / 2);
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }

    async updatePassword(req, res, next) {
        try {
            const { id } = req.params;
            const { oldPassword, newPassword, confirmPassword } = req.body;
            const user = await User.findOne({ where: { id } });
            if (!user) {
                next(ApiError.internal("Пользователь не найден"));
            }
            if (
                !oldPassword.trim() ||
                !newPassword.trim() ||
                !confirmPassword.trim()
            ) {
                next(ApiError.internal("Field/s is/are empty"));
            }
            let comparePassword = bcrypt.compareSync(
                oldPassword,
                user.password
            );
            if (!comparePassword) {
                next(ApiError.internal("Password is invalid"));
            }

            if (newPassword.length < 8 && newPassword.length > 16) {
                next(
                    ApiError.unprocessableEntity(
                        "Password must be 8-16 characters"
                    )
                );
            } else if (!/[A-Z]/g.test(newPassword)) {
                next(
                    ApiError.unprocessableEntity(
                        "Password must include at least 1 CAPITAL character"
                    )
                );
            } else if (!/[a-z]/g.test(newPassword)) {
                next(
                    ApiError.unprocessableEntity(
                        "Password must include at least 1 small letter"
                    )
                );
            } else if (!/[!@#$%^&*_.0-9]/g.test(newPassword)) {
                next(
                    ApiError.unprocessableEntity(
                        "Password must include at least 1 number or special letter"
                    )
                );
            } else {
                if (newPassword == confirmPassword) {
                    const hashNewPassword = await bcrypt.hash(newPassword, 5);
                    const changedInfo = await User.update(
                        {
                            password: hashNewPassword,
                        },
                        { where: { id: id } }
                    );

                    return res.json(changedInfo);
                } else {
                    next(
                        ApiError.badRequest(
                            "New password and confirm password are not correct"
                        )
                    );
                }
            }
        } catch (e) {
            next(ApiError.internal(e));
        }
    }

    async getTotalNumberOfUsers(req, res, next) {
        try {
            const totalNumber = await User.count();
            return res.json(totalNumber);
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }

    async updateUserRating(req, res, next) {
        const { to_id, rate } = req.body;

        if (!to_id || !rate) {
            next(ApiError.badRequest("Some parameter was not passed"));
        }

        try {
            const user = await User.findOne({
                where: { id: to_id },
                include: [{ model: Comment, as: "comments" }],
            });
            const userComments = user.comments;
            const totalComments = userComments.length + 1;
            let averageRate = 0;

            userComments.forEach((comment) => {
                averageRate = averageRate + comment.rate;
            });
            averageRate = averageRate + rate;
            const result = Math.floor((averageRate / totalComments) * 2) / 2;

            const updatedUserRating = await User.update(
                {
                    rate: result,
                },
                { where: { id: to_id } }
            );

            return res.json(updatedUserRating);
        } catch (e) {
            next(ApiError.internal(e.messaage));
        }
    }

    async getFiltered(req, res, next) {
        let { nameLike, limit, page, searchableRole, ratingRange, sortType } =
            req.query;

        if (!searchableRole || !ratingRange) {
            next(ApiError.badRequest("Some parameter was not passed"));
        }

        page = page || 1;
        limit = limit || 9;
        let offset = page * limit - limit;

        try {
            let users;
            if (searchableRole !== "ALL") {
                users = await User.findAll({
                    limit,
                    offset,
                    where: {
                        role: searchableRole,
                        title: { [Op.iLike]: `%${nameLike}%` },
                    },
                    order: [["createdAt", sortType]],
                    include: [{ model: Comment, as: "comments" }],
                });
            } else {
                users = await User.findAll({
                    limit,
                    offset,
                    where: {
                        title: { [Op.iLike]: `%${nameLike}%` },
                    },
                    order: [["createdAt", sortType]],
                    include: [{ model: Comment, as: "comments" }],
                });
            }
            return res.json(users);
        } catch (e) {
            next(ApiError.badRequest(e));
        }
    }
}

module.exports = new UserController();
