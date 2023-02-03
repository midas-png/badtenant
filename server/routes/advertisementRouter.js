const Router = require('express')
const router = new Router()
const AdvertisementController = require('../controllers/advertisementController')
const authMiddleware = require('../middleware/authMiddleware')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', authMiddleware, AdvertisementController.create)
router.get('/', AdvertisementController.getAll)
router.get('/:id', AdvertisementController.getOne)
router.delete('/:id', checkRole('ADMIN'), AdvertisementController.banOne)

module.exports = router