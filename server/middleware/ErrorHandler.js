const ApiError = require('../errorApi/ApiError')

module.exports = function(err, req, res, next){
    if(err instanceof ApiError){
        return res.status(err.status).json({messaage: err.message});
    }

    return res.status(500).json({messaage: "Unknown error"});
}