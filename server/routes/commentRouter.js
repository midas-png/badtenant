const Router = require('express')
const router = new Router()
const CommentController = require('../controllers/commentController')
const authMiddleware = require('../middleware/authMiddleware')

router.post('/', authMiddleware, CommentController.rate)
router.get('/', authMiddleware, CommentController.getAll)
router.get('/:id', authMiddleware, CommentController.getOne)

module.exports = router