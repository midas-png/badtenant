const { Offers, User } = require(".././models/models");
const { Temporal } = require("@js-temporal/polyfill");
const { Op } = require("sequelize");
const ApiError = require("../errorApi/ApiError");

class OffersController {
    async create(req, res, next) {
        const { fromId, toId, dateFrom, dateTo, text } = req.body;

        if (!fromId || !toId || !dateFrom || !dateTo || !text) {
            next(ApiError.badRequest("Some parameter was not passed"));
        }
        try {
            const activeOffer = await Offers.findOne({
                where: {
                    from_id: fromId,
                    to_id: toId,
                    status: 1,
                },
            });

            if (activeOffer) {
                next(ApiError.badRequest("You have already active offer sent"));
            }

            const offer = await Offers.create({
                from_id: fromId,
                to_id: toId,
                date_from: dateFrom,
                date_to: dateTo,
                text: text,
            });
            return res.json(offer);
        } catch (e) {
            next(ApiError.internal(e.message));
        }
    }

    async getAll(req, res, next) {
        try {
            const offer = await Offers.findAll();
            return res.json(offer);
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }

    async getOne(req, res, next) {
        try {
            const { id } = req.params;

            const offer = await Offers.findAll({
                where: {
                    [Op.or]: [{ from_id: id }, { to_id: id }],
                },
            });
            return res.json(offer);
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }

    async banOne(req, res, next) {
        try {
            const { id } = req.params;

            if (!id) {
                return next(ApiError.badRequest("No ID was passed"));
            }

            const offer = await Offers.destroy({
                where: {
                    id: id,
                },
            });

            return res.json(offer);
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }

    async updateStatus(req, res, next) {
        const { id } = req.params;
        const { newStatus } = req.body;

        if (!id) {
            next(ApiError.badRequest("No ID was passed"));
        }
        try {
            const offer = await Offers.update(
                {
                    status: newStatus,
                },
                { where: { id: id } }
            );
            return res.json(offer);
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }
}

module.exports = new OffersController();
