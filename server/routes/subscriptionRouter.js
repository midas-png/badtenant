const Router = require('express')
const router = new Router()
const SubscriptionController = require('../controllers/subscriptionController')
const authMiddleware = require('../middleware/authMiddleware')
const checkRole = require('../middleware/checkRoleMiddleware')

router.get('/', checkRole('ADMIN'), SubscriptionController.getAll)
router.get('/:id', checkRole('ADMIN'), SubscriptionController.getOne)
router.post('/', authMiddleware, SubscriptionController.create)
router.put('/', checkRole('ADMIN'), SubscriptionController.putOne)
router.delete('/:id', checkRole('ADMIN'), SubscriptionController.deleteOne)

module.exports = router