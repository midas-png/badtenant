const { Reports } = require(".././models/models");
const { Op } = require("sequelize");
const ApiError = require("../errorApi/ApiError");

class ReportController {
    async create(req, res, next) {
        const { report_reason, from_id, to_id, text } = req.body;

        if (!report_reason || !from_id || !to_id || !text) {
            next(ApiError.badRequest("Some parameter was not passed"));
        }

        try {
            const report = await Reports.findOne({
                where: {
                    report_reason,
                    from_id,
                    to_id,
                    text,
                },
            });

            if (report) {
                next(ApiError.badRequest("You have already active offer sent"));
            }

            const newReport = await Reports.create({
                report_reason,
                from_id,
                to_id,
                text,
            });
            return res.json(newReport);
        } catch (e) {
            next(ApiError.internal(e));
        }
    }

    async getAll(req, res, next) {
        try {
            const reports = await Reports.findAll();
            return res.json(reports);
        } catch (e) {
            next(ApiError.badRequest(e));
        }
    }

    async getOne(req, res, next) {
        try {
            const { id } = req.params;

            const report = await Reports.findAll({
                where: {
                    [Op.or]: [{ from_id: id }, { to_id: id }],
                },
            });
            return res.json(report);
        } catch (e) {
            next(ApiError.badRequest(e));
        }
    }

    async banOne(req, res, next) {
        const { id } = req.params;

        if (!id) {
            next(ApiError.badRequest("No ID was passed"));
        }

        try {
            const report = await Reports.destroy({
                where: {
                    id,
                },
            });

            return res.json(report);
        } catch (e) {
            next(ApiError.internal(e));
        }
    }

    async updateStatus(req, res, next) {
        const { id } = req.params;
        const { verdict } = req.body;

        if (!id) {
            next(ApiError.badRequest("No ID was passed"));
        }

        try {
            const report = await Reports.update(
                {
                    isResolved: 1,
                    verdict: verdict,
                },
                { where: { id } }
            );
            return res.json(report);
        } catch (e) {
            next(ApiError.internal(e));
        }
    }
}

module.exports = new ReportController();
