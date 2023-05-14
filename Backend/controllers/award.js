const express = require("express");
const {validationResult}=require('express-validator')
const Award = require("../models/award");

//Award ---->
exports.postAward = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { awardName, awardDate, awardOrganization, optional } = req.body;
    const user_id = req.user.user_id;
    const newAward = new Award({
      awardName,
      awardDate,
      awardOrganization,
      optional,
      user_id: user_id,
    });
    const result = await newAward.save();
    res.status(201).json(result);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
};

exports.getAward = async (req, res, next) => {
  try {
    const user_id = req.params.user_id;
    const award = await Award.find({ user_id: user_id });
    res.status(200).json(award);
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error");
  }
};

exports.editAward = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }  
    const { awardName, awardDate, awardOrganization, optional, _id } = req.body;
    //const user_id={id:'645e139bf346ce73bbdf54ac'}
    const result = await Award.findByIdAndUpdate(
      _id,
      {
        awardName,
        awardDate,
        awardOrganization,
        optional,
      },
      { new: true }
    );
    console.log(result);
    if (!result) {
      return res.status(404).send("Award record not found");
    }
    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
};
