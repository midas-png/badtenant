const sequelize = require("../db");
const { DataTypes } = require("sequelize");

const User = sequelize.define("user", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: { type: DataTypes.STRING, allowNull: false },
    first_name: { type: DataTypes.STRING, allowNull: false },
    last_name: { type: DataTypes.STRING, allowNull: false },
    rate: { type: DataTypes.FLOAT, defaultValue: 0 },
    email: { type: DataTypes.STRING, unique: true },
    password: { type: DataTypes.STRING },
    location: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.STRING, allowNull: false },
    img: { type: DataTypes.STRING },
    role: { type: DataTypes.STRING, allowNull: false },
    isVerified: { type: DataTypes.INTEGER, defaultValue: 0 }, // 0 - Not verified | 1 - Verified
});

const UserSignupToken = sequelize.define("userSignupToken", {
    userId: {
        type: DataTypes.INTEGER,
        required: true,
    },
    token: {
        type: DataTypes.STRING,
        required: true,
    },
});

const UserResetToken = sequelize.define("userResetToken", {
    userId: {
        type: DataTypes.INTEGER,
        required: true,
    },
    token: {
        type: DataTypes.STRING,
        required: true,
    },
});

const Agreement = sequelize.define("agreement", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    id_tenant: { type: DataTypes.INTEGER },
    id_landlord: { type: DataTypes.INTEGER },
    date_from: { type: DataTypes.STRING },
    date_to: { type: DataTypes.STRING },
    status: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 1 }, // 1-Active | 0-Not Active
});

const Offers = sequelize.define("offers", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    from_id: { type: DataTypes.INTEGER, allowNull: false },
    to_id: { type: DataTypes.INTEGER, allowNull: false },
    date_from: { type: DataTypes.STRING, allowNull: false },
    date_to: { type: DataTypes.STRING, allowNull: false },
    text: { type: DataTypes.STRING },
    status: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 1 }, // 1-Active | 0-Not Active
});

const Comment = sequelize.define("comment", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    from_id: { type: DataTypes.INTEGER },
    to_id: { type: DataTypes.INTEGER },
    text: { type: DataTypes.STRING },
    rate: { type: DataTypes.FLOAT },
});

const Subscription = sequelize.define("subscription", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    id_tenant: { type: DataTypes.INTEGER },
    id_landlord: { type: DataTypes.INTEGER },
    date_from: { type: DataTypes.DATE },
    date_to: { type: DataTypes.DATE },
});

const Reports = sequelize.define("reports", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    report_reason: { type: DataTypes.INTEGER },
    from_id: { type: DataTypes.INTEGER, allowNull: false },
    to_id: { type: DataTypes.INTEGER, allowNull: false },
    text: { type: DataTypes.TEXT, allowNull: false },
    isResolved: { type: DataTypes.INTEGER, defaultValue: 0 },
    verdict: { type: DataTypes.INTEGER, defaultValue: 0 },
});

User.hasMany(Comment);
Comment.belongsTo(User);

User.hasOne(UserSignupToken);
UserSignupToken.belongsTo(User);

User.hasMany(UserSignupToken)
UserSignupToken.belongsTo(User)

User.hasMany(Agreement);
Agreement.belongsTo(User);

User.hasMany(Subscription);
Subscription.belongsTo(User);

User.hasMany(Reports);
Reports.belongsTo(User);

User.hasMany(Offers);
Offers.belongsTo(User);

module.exports = {
    User,
    UserResetToken,
    UserSignupToken,
    Agreement,
    Offers,
    Comment,
    Subscription,
    Reports,
};
