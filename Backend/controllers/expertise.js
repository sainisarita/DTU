const express = require("express");
const Expertise = require("../models/expertise");
const {validationResult}=require('express-validator')

exports.postExpertise = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { subject, description } = req.body;
    const user_id = req.user.user_id;
    const newExpertise = new Expertise({
      subject,
      description,
      user_id: user_id,
    });
    const result = await newExpertise.save();
    res.status(201).json(result);
  } catch (err) {
    console.log(err);
  }
};

exports.getExpertise = async (req, res, next) => {
  try {
    const user_id = req.params.user_id;
    const expertise = await Expertise.find({ user_id: user_id });
    res.status(200).json(expertise);
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error !!!");
  }
};

exports.editExpertise = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { subject, description, _id } = req.body;
    const result = await Expertise.findByIdAndUpdate(
      _id,
      {
        subject,
        description,
      },
      { new: true }
    );

    if (!result) {
      res.status(404).send("Expertise record not found");
    }
    res.json(result);
  } catch (error) {
    console.log(result);
    res.status(500).send("Server Error !!!");
  }
};
