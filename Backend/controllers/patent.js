const express = require("express");
const Patent = require("../models/patent");
const {validationResult}=require('express-validator')

exports.postPatent = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }  
    const {
      patentTitle,
      assignee,
      patentNumber,
      collaboration,
      fillingDate,
      grantDate,
      status
    } = req.body;
    const user_id=req.user.user_id;

    const newPatent = new Patent({
      patentTitle,
      assignee,
      patentNumber,
      collaboration,
      fillingDate,
      grantDate,
      status,
      user_id:user_id
    });
    const result = await newPatent.save();
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error !!!");
  }
};

exports.getPatent = async (req, res, next) => {
  try {
    const user_id = req.params.user_id;
    const patent = await Patent.find({ user_id: user_id });
    res.status(200).json(patent);
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error !!!");
  }
};

exports.editPatent = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }  
    const {
      patentTitle,
      assignee,
      patentNumber,
      collaboration,
      fillingDate,
      grantDate,
      status,
      _id
    } = req.body;
    const patent = await Patent.findByIdAndUpdate(
      _id,
      {
        patentTitle,
        assignee,
        patentNumber,
        collaboration,
        fillingDate,
        grantDate,
        status,
      },
      { new: true }
    );
    if (!patent) {
      res.status(404).send("Patent record not found");
    }
    res.json(patent);
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error !!!");
  }
};
