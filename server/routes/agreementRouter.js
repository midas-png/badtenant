const Router = require('express')
const router = new Router()
const AgreementController = require('../controllers/agreementController')
const authMiddleware = require('../middleware/authMiddleware')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', authMiddleware, AgreementController.create) 
router.get('/', checkRole('ADMIN'), AgreementController.getAll)
router.get('/:id', authMiddleware, AgreementController.getOne)
router.delete('/:id', authMiddleware, AgreementController.banOne)
router.get('/id_ten/:id_tenant/id_land/:id_landlord', AgreementController.checkRelevance)
router.get('/get_landlord_deals/:id_landlord', AgreementController.checkLandlordDeals)
router.get('/get_tenant_deals/:id_tenant', AgreementController.checkTenantDeals)
router.patch('/updateStatus/:id', authMiddleware, AgreementController.updateStatus)

module.exports = router