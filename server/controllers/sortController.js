const { User, Agreement, Comment } = require("../models/models");
const ApiError = require("../errorApi/ApiError");
const { Op } = require("sequelize");

class SortController {
    async sortByDate(req, res, next) {
        const { sortType, userData } = req.body

        try {
            const sortedUsers = await User.findAll({
                where: {
                    id: [46128, 2865, 49569,  1488,   45600,   61991,  1418,  61919,   53326,   61680]
                }, 
                order: [
                    ['createdAt', sortType],
                ],
            });

            return res.json(sortedUsers);
        } catch (e) {
            return next(ApiError.badRequest(e));
        }
    }

    async sortByRating(req, res, next) {
        const { sortType, userData } = req.body

        try {
            const sortedUsers = await User.findAll({});

            return res.json(sortedUsers);
        } catch (e) {
            return next(ApiError.badRequest(e));
        }
    }
}

module.exports = new SortController();
