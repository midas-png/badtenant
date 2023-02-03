const Router = require('express')
const router = new Router()
const ReportController = require('../controllers/reportController')
const authMiddleware = require('../middleware/authMiddleware')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/report', authMiddleware, ReportController.create) 
router.get('/reports', checkRole('ADMIN'), ReportController.getAll)
router.get('/report/:id', checkRole('ADMIN'), ReportController.getOne)
router.delete('delete_report/:id', checkRole('ADMIN'), ReportController.banOne)
router.patch('/send_verdict/:id', checkRole('ADMIN'), ReportController.updateStatus)

module.exports = router