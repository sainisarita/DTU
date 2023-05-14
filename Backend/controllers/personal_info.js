const express = require("express");
const PersonalInfo = require("../models/personal_info");
const upload = require("../multerSetup/upload");
const {validationResult}=require('express-validator')

exports.postPersonalInfo = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { name, gender, department, email, officeNumber, officeAddress } =
      req.body;
    const user_id = req.user.user_id;
    const image = req.file.buffer;

    const personal_info = new PersonalInfo({
      image: image,
      name,
      gender,
      department,
      email,
      officeNumber,
      officeAddress,
      user_id: user_id,
    });
    const result = await personal_info.save();
    res.status(201).json(result);
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error !!!");
  }
};

exports.getPersonalInfo = async (req, res, next) => {
  try {
    const user_id = req.params.user_id;
    const personal_info = await PersonalInfo.find({ user_id: user_id });
    res.status(200).json(personal_info);
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error !!!");
  }
};

exports.editPersonalInfo = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const {
      image,
      name,
      gender,
      department,
      email,
      officeNumber,
      officeAddress,
    } = req.body;
    const personal_info = await PersonalInfo.findByIdAndUpdate(
      req.body._id,
      {
        image: req.file.buffer,
        name,
        gender,
        department,
        email,
        officeNumber,
        officeAddress,
      },
      { new: true }
    );
    if (!personal_info) {
      res.status(404).send("Personal Information record not found");
    }
    res.json(personal_info);
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error !!!");
  }
};
