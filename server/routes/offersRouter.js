const Router = require('express')
const router = new Router()
const OffersController = require('../controllers/offersController')
const authMiddleware = require('../middleware/authMiddleware')

router.post('/offer', OffersController.create) 
router.get('/offers', OffersController.getAll)
router.get('/offers/:id', OffersController.getOne)
router.delete('deleteOffer/:id', OffersController.banOne)
router.patch('/updateStatus/:id', OffersController.updateStatus)

module.exports = router