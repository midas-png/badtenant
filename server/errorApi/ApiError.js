class ApiError extends Error {
    constructor(status, message){
        super()
        this.status = status
        this.message = message
    }

    static badRequest(message) {
        return new ApiError(404, message)
    }

    static internal(message) {
        return new ApiError(500, message)
    }

    static forbidden(message) {
        return new ApiError(403, message)
    }

    static paymentRequired(message) {
        return new ApiError(402, message)
    }

    static unprocessableEntity(message) {
        return new ApiError(422, message)
    }
}

module.exports = ApiError