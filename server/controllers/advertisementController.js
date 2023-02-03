const ApiError = require('../errorApi/ApiError')
const { Advertisement } = require('.././models/models')

class AdvertisementController{
    async create(req, res, next) {
        const {user_id, title, description} = req.body

        if(!user_id || !title || !description){
            next(ApiError.badRequest("Some parameter/-s was not passed"))
        }

        try{
            const advertisement = await Advertisement.create({user_id, status, title, description})
            return res.json(advertisement)
        } catch(e){
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res, next){
        try{
            let {limit, page} = req.query

            page = page || 1
            limit = limit || 9
            let offset = page * limit - limit

            const advertisement = await Advertisement.findAll({
                limit, 
                offset, 
            })
            return res.json(advertisement)
        } catch(e){
            next(ApiError.badRequest(e.message))
        }

    }

    async getOne(req, res, next){
        try{
            const {id} = req.params

            const advertisement = await Advertisement.findOne(
                {
                    where: {id: id}                },
            )
            return res.json(advertisement)
        } catch(e){
            next(ApiError.badRequest(e.message))
        }
    }

    async banOne(req, res, next){
        try{
            const {id} = req.params

            if(!id){
                return next(ApiError.badRequest("No ID was passed"))
            }
    

            const advertisement = await Advertisement.destroy({
                where: {
                    id: id,
                }
            })

            return res.json(advertisement)
        }catch(e){
            next(ApiError.badRequest(e.message))
        }
    }
}

module.exports = new AdvertisementController()