const express = require("express");
const ResearchProject = require("../models/researchProject");
const {validationResult}=require('express-validator')


exports.postResearchProject = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }  
    const {
      projectTitle,
      researcherName,
      institutionalAffiliation,
      projectSummary,
      fundingSource,
      grantNumber,
      collaboration,
      timeLine,
      optionalField
    } = req.body;
    const user_id=req.user.user_id
    const researchProject = new ResearchProject({
      projectTitle,
      researcherName,
      institutionalAffiliation,
      projectSummary,
      fundingSource,
      grantNumber,
      collaboration,
      timeLine,
      optionalField,
      user_id:user_id,
    });
    const result = await researchProject.save();
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error !!!");
  }
};

exports.getResearchProject = async (req, res, next) => {
  try {
    const user_id = req.params.user_id;
    const researchProject = await ResearchProject.find({
      user_id: user_id,
    });
    res.status(200).json(researchProject);
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error !!!");
  }
};

exports.editResearchProject = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }  
    const {
      projectTitle,
      researcherName,
      institutionalAffiliation,
      projectSummary,
      fundingSource,
      grantNumber,
      collaboration,
      timeLine,
      optionalField,
    } = req.body;

    const researchProject = await ResearchProject.findByIdAndUpdate(
      req.body._id,
      {
        projectTitle,
        researcherName,
        institutionalAffiliation,
        projectSummary,
        fundingSource,
        grantNumber,
        collaboration,
        timeLine,
        optionalField,
      },
      { new: true }
    );
    if (!researchProject) {
      res.status(404).send("Research project not found");
    }
    res.json(researchProject);
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error !!!");
  }
};
