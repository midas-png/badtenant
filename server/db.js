const { Sequelize } = require("sequelize");

let sequelize;
if (process.env.NODE_ENV === "production") {
    sequelize = new Sequelize(process.env.DB_URL);
} else {
    sequelize = new Sequelize(
        process.env.DB_NAME || "badtenant_dev",
        process.env.DB_USER || "postgres",
        process.env.DB_PASSWORD || "postgres",
        {
            host: process.env.DB_HOST || "localhost",
            port: process.env.DB_PORT || 5432,
            dialect: "postgres",
        }
    );
}

module.exports = sequelize;