const express=require('express')

const router=express.Router();

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


router.put('/edit-award',authenticateToken,awardController.editAward)

router.put('/edit-doctoral-theses',authenticateToken,doctoralThesesController.editDoctoralThesis)

router.put('/edit-experience',authenticateToken,experienceController.editExperience)

router.put('/edit-expertise',authenticateToken,expertiseController.editExpertise)

router.put('/edit-member-committee',authenticateToken,memberCommitteeController.editMemberCommittee)

router.put('/edit-patent',authenticateToken,patentController.editPatent)

router.put('/edit-personal-info',authenticateToken,personalInfoController.editPersonalInfo)

router.put('/edit-publication',authenticateToken,publicationController.editPublication)

router.put('/edit-qualification',authenticateToken,qualificationController.editQualification)

router.put('/edit-research-project',authenticateToken,researchProjectController.editResearchProject)



module.exports=router