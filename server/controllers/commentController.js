const { User, Agreement, Comment } = require("../models/models");
const ApiError = require("../errorApi/ApiError");
const { Op } = require("sequelize");

class CommentController {
    async rate(req, res, next) {
        try {
            const { from_id, to_id, text, rate } = req.body;

            if (!from_id || !to_id || !rate) {
                next(ApiError.badRequest("Some parameter/-s was not passed"));
            }

            const comment = await Comment.create({
                from_id,
                to_id,
                text,
                rate,
                userId: to_id,
            });

            return res.json(comment);
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }

    async getAll(req, res, next) {
        try {
            const comment = await Comment.findAll();

            return res.json(comment);
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }

    async getOne(req, res, next) {
        const { id } = req.params;

        try {
            const comment = await Comment.findOne({
                id: id,
            });

            return res.json(comment);
        } catch (e) {
            return next(ApiError.badRequest(e.message));
        }
    }
}

module.exports = new CommentController();
