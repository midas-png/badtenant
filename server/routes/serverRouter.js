const Router = require('express')
const router = new Router()
const ServerController = require('../controllers/serverController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.get('/', ServerController.healthCheck)

module.exports = router