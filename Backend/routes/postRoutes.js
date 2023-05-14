const express=require('express')
const router=express.Router();
const validation=require('../validator/dataValidation')
const authenticateToken=require('../authentication/jwtAuth')

const awardController=require('../controllers/award');
const doctoralThesesController=require('../controllers/doctoralTheses')
const experienceController=require('../controllers/experience')
const expertiseController=require('../controllers/expertise')
const memberCommitteeController=require('../controllers/memberCommittee')
const patentController=require('../controllers/patent')
const personalInfoController=require('../controllers/personal_info')
const publicationController=require('../controllers/publication')
const qualificationController=require('../controllers/qualification')
const researchProjectController=require('../controllers/researchProject')
const commentContoller=require('../controllers/comment')
const authController=require('../controllers/auth');



router.post('/award',authenticateToken,validation.award,awardController.postAward)

router.post('/doctoral-thesis',authenticateToken,validation.doctoralThesis,doctoralThesesController.postDoctoralTheses)

router.post('/experience',validation.experience,authenticateToken,experienceController.postExperience)

router.post('/expertise',validation.expertise,authenticateToken,expertiseController.postExpertise)

router.post('/member-committee',authenticateToken,validation.memberCommittee,memberCommitteeController.postMemberCommittee)

router.post('/patent',authenticateToken,validation.patent,patentController.postPatent)

router.post('/personal-info',authenticateToken,validation.personalInfo,personalInfoController.postPersonalInfo)

router.post('/publication',authenticateToken,validation.publication,publicationController.postPublication)

router.post('/qualification',authenticateToken,validation.qualification,qualificationController.postQualification)

router.post('/research-project',authenticateToken,validation.researchProject,researchProjectController.postResearchProject)

// router.post('/reset-password',authController.postResetPassword)

router.post('/comment',commentContoller.postComment)






module.exports=router