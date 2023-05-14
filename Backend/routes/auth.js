const express=require('express')
const validation=require('../validator/dataValidation')

const authController=require('../controllers/auth')

const authenticateToken=require('../authentication/jwtAuth')

const router=express.Router()

// registration routes 
router.post('/registration',validation.registration,authController.postRegistration);

//login routes
router.post('/login',validation.login,authController.postLogin);

router.post('/reset-password',authController.postResetPassword)

router.post('/new-password',authenticateToken,authController.postNewPassword)

module.exports=router