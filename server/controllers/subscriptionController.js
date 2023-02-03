const { SubscriptionInfo } = require('.././models/models')
const ApiError = require('../errorApi/ApiError')

class SubscriptionController{
    async create(req, res, next){
        const {user_id, from_date, to_date} = req.body

        if(!user_id || !from_date || !to_date){
            return next(ApiError.badRequest("Some parameter/-s was not passed"))
        }

        try{
            const subscription = await SubscriptionInfo.create({user_id, from_date, to_date})
            return res.json(subscription)
        }catch(e){
            return next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res, next){
        try{
            const subscription = await SubscriptionInfo.findAll()
            return res.json(subscription)
        }catch(e){
            return next(ApiError.badRequest(e.message))
        }
    }

    async getOne(req, res, next){
        const {id} = req.params

        try{
            const subscription = await SubscriptionInfo.findOne(
                {
                    user_id:id
                }
            )
            
            if(subscription == null){
                return next(ApiError.badRequest("No raiting with id " + id + " was found"))
            }
            
            return res.json(subscription)
        }catch(e){
            return next(ApiError.badRequest(e.message))
        }
    }

    async deleteOne(req, res, next){
        const {id} = req.params

        if(!id){
            return next(ApiError.badRequest("No ID was passed"))
        }
        
        try{
            const subscription = await SubscriptionInfo.destroy({
                where: {
                    user_id: id
                }
            })
            return res.json(subscription)
        } catch(e){
            return next(ApiError.badRequest(e.message))
        }
    }

    async putOne(req, res, next){
        return res.json("Test Put")
    }
}

module.exports = new SubscriptionController()