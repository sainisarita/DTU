const express=require('express')
const router=express.Router();

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




router.get('/award/:user_id',awardController.getAward)

router.get('/comment',commentContoller.getComment)

router.get('/doctoral-theses/:user_id',doctoralThesesController.getDoctoralThesis)

router.get('/experience/:user_id',experienceController.getExperience)

router.get('/expertise/:user_id',expertiseController.getExpertise)

router.get('/member-committee/:user_id',memberCommitteeController.getMemberCommittee)

router.get('/patent/:user_id',patentController.getPatent)

router.get('/personal-info/:user_id',personalInfoController.getPersonalInfo)

router.get('/publication/:user_id',publicationController.getPublication)

router.get('/qualification/:user_id',qualificationController.getQualification)

router.get('/research-project/:user_id',researchProjectController.getResearchProject)


module.exports=router