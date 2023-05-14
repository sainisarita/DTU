const express = require("express");
const Experience = require("../models/experience");
const {validationResult}=require('express-validator')

exports.postExperience = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const {
      employerName,
      location,
      startDate,
      endDate,
      jobTitle,
      designation,
    } = req.body;
    const user_id = req.user.user_id;
    const newExperience = new Experience({
      employerName,
      location,
      startDate,
      endDate,
      jobTitle,
      designation,
      user_id: user_id,
    });
    const result = await newExperience.save();
    res.status(201).json(result);
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error");
  }
};

exports.getExperience = async (req, res, next) => {
  try {
    const user_id = req.params.user_id;
    console.log(user_id);
    const experience = await Experience.find({ user_id: user_id });
    res.status(200).json(experience);
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error");
  }
};

exports.editExperience = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {
      employerName,
      location,
      startDate,
      endDate,
      jobTitle,
      designation,
      _id,
    } = req.body;
    const result = await Experience.findByIdAndUpdate(
      _id,
      {
        employerName,
        location,
        startDate,
        endDate,
        jobTitle,
        designation,
      },
      { new: true }
    );
    if (!result) {
      res.status(404).send("Experience record not found");
    }
    res.json(result);
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error");
  }
};
