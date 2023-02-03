const { Agreement } = require(".././models/models");
const { Temporal } = require("@js-temporal/polyfill");
const ApiError = require("../errorApi/ApiError");

class AgreementController {
    async create(req, res, next) {
        try {
            const { id_tenant, id_landlord, date_from, date_to } = req.body;

            if (!id_tenant || !id_landlord || !date_from || !date_to) {
                next(
                    ApiError.badRequest("Some parameter was not passed")
                );
            }

            const agreementValid = await Agreement.findOne({
                where: {
                    id_tenant,
                    id_landlord,
                    date_from,
                    date_to
                }
            })
            
            if(agreementValid){
                next(ApiError.internal("You have already sent"))
            }

            const agreement = await Agreement.create({
                id_tenant,
                id_landlord,
                date_from,
                date_to,
            });
            return res.json(agreement);
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }

    async getAll(req, res, next) {
        try {
            let { limit, page } = req.query;

            page = page || 1;
            limit = limit || 9;
            let offset = page * limit - limit;

            const agreement = await Agreement.findAll({
                limit,
                offset,
            });
            return res.json(agreement);
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }

    async getOne(req, res, next) {
        try {
            const { id } = req.params;

            const agreement = await Agreement.findAll({
                where: {
                    [Op.or]: [{ id_tenant: id }, { id_landlord: id }],
                },
            });
            return res.json(agreement);
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

            const agreement = await Agreement.destroy({
                where: {
                    id: id,
                },
            });

            return res.json(agreement);
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }

    async checkRelevance(req, res, next) {
        try {
            const { id_tenant, id_landlord } = req.params;
            const currentDate = Temporal.Now.plainDateISO();

            const agreement = await Agreement.findOne({
                where: {
                    id_tenant: id_tenant,
                    id_landlord: id_landlord,
                },
            });

            return res.json(
                !currentDate.until(agreement.date_to).toString().includes("-")
            );
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }

    async checkLandlordDeals(req, res, next) {
        try {
            const { id_landlord } = req.params;

            const agreement = await Agreement.findAll({
                where: {
                    id_landlord: id_landlord,
                },
            });
            return res.json(agreement);
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }

    async checkTenantDeals(req, res, next) {
        try {
            const { id_tenant } = req.params;

            const agreement = await Agreement.findAll({
                where: {
                    id_tenant: id_tenant,
                },
            });
            return res.json(agreement);
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
            const agreement = await Agreement.update(
                {
                    status: newStatus,
                },
                { where: { id: id } }
            );
            return res.json(agreement);
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }
}

module.exports = new AgreementController();
