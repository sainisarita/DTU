const express = require("express");
const Qualification = require("../models/qualification");
const {validationResult}=require('express-validator')

exports.postQualification = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }  
    const {
      degreeName,
      graduationSubject,
      graduationCollege,
      graduationYear,
    } = req.body;
    const user_id=req.user.user_id;
    const qualification = new Qualification({
      degreeName,
      graduationSubject,
      graduationCollege,
      graduationYear,
      user_id:user_id
    });
    const result = await qualification.save();
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error !!!");
  }
};

exports.getQualification = async (req, res, next) => {
  try {
    const user_id = req.params.user_id;
    const qualification = await Qualification.find({ user_id: user_id });
    res.status(200).json(qualification);
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error !!!");
  }
};

exports.editQualification = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }  
    const { degreeName, graduationSubject, graduationCollege, graduationYear } =req.body;
    const qualification = await Qualification.findByIdAndUpdate(
      req.body._id,
      {
        degreeName,
        graduationSubject,
        graduationCollege,
        graduationYear,
      },
      { new: true }
    );
    if (!qualification) {
      res.status(404).send("Qualification record not found");
    }
    res.json(qualification);
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error !!!");
  }
};
