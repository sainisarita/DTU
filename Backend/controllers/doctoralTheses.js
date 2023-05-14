const express=require('express')
const DoctoralTheses=require('../models/doctoralTheses');
const {validationResult}=require('express-validator')

exports.postDoctoralTheses=async(req,res,next)=>{
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }    
        const { student, studentTitle, supervisor, supervisorTitle, collegeName, optional} = req.body;
        const user_id=req.user.user_id
    
        const newDoctoralTheses = new DoctoralTheses({
          student,
          studentTitle,
          supervisor,
          supervisorTitle,
          collegeName,
          optional,
          user_id:user_id
        });
    
        const result = await newDoctoralTheses.save();
    
        res.status(201).json(result);
      } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
      }

}

exports.getDoctoralThesis= async (req, res, next) => {
  try{
    const user_id=req.params.user_id;
    const doctoralTheses=await DoctoralTheses.find({user_id:user_id});
    res.status(200).json(doctoralTheses);
} catch(err) {
    console.log(err)
    res.status(500).send('Server Error')
}
  }

exports.editDoctoralThesis=async(req,res,next)=>{
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }    
        const { student, studentTitle, supervisor, supervisorTitle, collegeName, optional,_id } = req.body;
    
        // Find the DoctoralTheses record by id and update its fields
        const result = await DoctoralTheses.findByIdAndUpdate(_id, {
          student,
          studentTitle,
          supervisor,
          supervisorTitle,
          collegeName,
          optional
        }, { new: true });
    
        if (!result) {
          return res.status(404).send('DoctoralTheses record not found');
        }
    
        res.json(result);
      } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
      }
}