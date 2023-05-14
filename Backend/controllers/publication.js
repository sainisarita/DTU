const express = require("express");
const Publication = require("../models/publication");
const {validationResult}=require('express-validator')

exports.postPublication = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }  
    const {
      publicationTitle,
      article,
      volume,
      year,
      pages,
      DOI,
      authors
    } = req.body;
    const user_id=req.user.user_id

    const publication = new Publication({
      publicationTitle,
      article,
      volume,
      year,
      pages,
      DOI,
      authors,
      user_id:user_id,
    });
    const result = await publication.save();
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error !!!");
  }
};

exports.getPublication=async(req,res,next)=>{
    try {
      const user_id=req.params.user_id;
      const publication=await Publication.find({user_id:user_id})
      res.status(200).json(publication)
    } catch (error) {
        console.log(error)
        res.status(500).send('Server Error !!!')
    }
}

exports.editPublication=async(req,res,next)=>{
  try{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }  
    const {
      publicationTitle,
      article,
      volume,
      year,
      pages,
      DOI,
      authors,
    } = req.body;
    const publication=await Publication.findByIdAndUpdate(req.body._id,{
      publicationTitle,
      article,
      volume,
      year,
      pages,
      DOI,
      authors,
    },{new:true})
    if(!publication){
      res.status(404).send('Pblication record not found')
    }
    res.json(publication)
  }catch (error) {
    console.log(error)
    res.status(500).send('Server Error !!!')
}
}