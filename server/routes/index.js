const Router = require('express')
const router = new Router()
const advertisementRouter = require('./advertisementRouter')
const agreementRouter = require('./agreementRouter')
const offersRouter = require('./offersRouter')
const commentRouter = require('./commentRouter')
const subscriptionRouter = require('./subscriptionRouter')
const reportRouter = require('./reportRouter')
const userRouter = require('./userRouter')
const serverRouter = require('./serverRouter')
const swaggerUi = require("swagger-ui-express");
const swaggerFile = require("../swagger_gen.json");

router.use('/user', userRouter)
router.use('/advertisement', advertisementRouter)
router.use('/agreement', agreementRouter)
router.use('/offer', offersRouter)
router.use('/comments', commentRouter)
router.use('/subscription', subscriptionRouter)
router.use('/report', reportRouter)
router.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerFile));
router.use('/', serverRouter)


module.exports = router