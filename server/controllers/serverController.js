const ApiError = require('../errorApi/ApiError')

class ServerController{
    async healthCheck(req, res, next){
        try{
            return res.sendStatus(200);
        }catch(e){
            next(ApiError.badRequest(e.message))
        }
    }
}

module.exports = new ServerController()