const User=require('../models/user')
const { body ,check} = require('express-validator');


const validations = {
  award: [
    body('awardName').notEmpty().withMessage('Award name is required'),
    body('awardDate').notEmpty().withMessage('Award date is required'),
    body('awardOrganization').notEmpty().withMessage('Award organization is required'),
  ],
  doctoralThesis: [
    body('student').notEmpty().withMessage('Student name is required'),
    body('studentTitle').notEmpty().withMessage('Student Title is required'),
    body('supervisor').notEmpty().withMessage('Supervisor is required'),
    body('supervisorTitle').notEmpty().withMessage('Supervisor title is required'),
    body('collegeName').notEmpty().withMessage('College name is required')
  ],
  experience: [
    body('employerName').notEmpty().withMessage('Employer Name is required'),
    body('location').notEmpty().withMessage('location is required'),
    body('startDate').notEmpty().withMessage('Start date is required'),
    body('endDate').notEmpty().withMessage('End date is required '),
    body('jobTitle').notEmpty().withMessage('Job title is required'),
    body('designation').notEmpty().withMessage('Desination is required')

  ],
  expertise: [
    body('subject').notEmpty().withMessage('Subject is required'),
    body('description').notEmpty().withMessage('Description is required')

],
  memberCommittee: [
    body('committeeName').notEmpty().withMessage('Committee name is required'),
    body('committeeRole').notEmpty().withMessage('Committee role is required'),
    body('year').notEmpty().withMessage('Year is required'),

],
  patent: [
    body('patentTitle').notEmpty().withMessage('Patent is required'),
    body('assignee').notEmpty().withMessage('Assignee is required'),
    body('patentNumber').notEmpty().withMessage('Patent number is required'),
    body('collaboration').notEmpty().withMessage('Collaboration is required'),
    body('fillingDate').notEmpty().withMessage('Filling date is required'),
    body('grantDate').notEmpty().withMessage('Grant date is required'),
    body('status').notEmpty().withMessage('status is required'),

],
  personalInfo: [
    body('image').notEmpty().withMessage('image is required'),
    body('name').notEmpty().withMessage('name is required'),
    body('gender').notEmpty().withMessage('gender is required'),
    body('department').notEmpty().withMessage('department is required'),
    body('email').notEmpty().withMessage('email is required'),
    body('officeNumber').notEmpty().withMessage('office number is required'),
    body('officeAddress').notEmpty().withMessage('office address is required'),

],
  publication: [
    body('publicationTitle').notEmpty().withMessage('publication title is required'),
    body('article').notEmpty().withMessage('article is required'),
    body('volume').notEmpty().withMessage('volume is required'),
    body('year').notEmpty().withMessage('year is required'),
    body('pages').notEmpty().withMessage('pages is required'),
    body('DOI').notEmpty().withMessage('doi is is required'),
    body('authors').notEmpty().withMessage('authors is required'),

],
  qualification: [
    body('degreeName').notEmpty().withMessage('degree name is required'),
    body('graduationSubject').notEmpty().withMessage('graduation subject is required'),
    body('graduationCollege').notEmpty().withMessage('graduation college is required'),
    body('graduationYear').notEmpty().withMessage('graduation year is required'),
  ],
  researchProject: [
    body('projectTitle').notEmpty().withMessage('project title is required'),
    body('researcherName').notEmpty().withMessage('researcher name is required'),
    body('institutionalAffiliation').notEmpty().withMessage('institutional affiliation is required'),
    body('projectSummary').notEmpty().withMessage('project summary is required'),
    body('fundingSource').notEmpty().withMessage('funding source is required'),
    body('grantNumber').notEmpty().withMessage('grant number is required '),
    body('collaboration').notEmpty().withMessage('collaboration is required'),
    body('timeline').notEmpty().withMessage('timeline is required'),
  ],
  registration: [
    check('email').isEmail().withMessage('Please enter a valid email.').custom((value, {req})=>{return User.findOne({ email: value })
  .then((userValidation) => {
      if (userValidation) {
          return Promise.reject('Email exists already,please pick a different one.');           
    }
    })
  }).normalizeEmail(),
   body('password','Please enter a password with only numbers and text and at least 5 characters').isLength({min:5}).isAlphanumeric().trim()
],
login:[
    body('email').isEmail().withMessage('Please enter a valid email address').normalizeEmail(),
    body('password','password has to be  valid.').isLength({min:5}).isAlphanumeric().trim()
]
};

module.exports = validations;
