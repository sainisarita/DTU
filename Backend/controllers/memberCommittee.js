const express = require("express");
const MemberCommittee = require("../models/memberCommittee");
const {validationResult}=require('express-validator')

exports.postMemberCommittee = async(req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }  
    const { committeeName, committeeRole, year, optionalField } =req.body;
    const user_id=req.user.user_id
    const newMemberCommittee = new MemberCommittee({
      committeeName,
      committeeRole,
      year,
      optionalField,
      user_id:user_id,
    });
    const result = await newMemberCommittee.save();
    res.status(201).json(result);
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error !!!");
  }
};

exports.getMemberCommittee = async(req, res, next) => {
  try {
    const user_id = req.params.user_id;
    const memberCommittee = await MemberCommittee.find({ user_id: user_id });
    res.status(200).json(memberCommittee);
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error !!!");
  }
};

exports.editMemberCommittee = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }  
    const { committeeName, committeeRole, year, optionalField,_id} = req.body;
    const result = await MemberCommittee.findByIdAndUpdate(
      _id,
      {
        committeeName,
        committeeRole,
        year,
        optionalField,
      },
      { new: true }
    );
    if (!result) {
      return res.status(404).send("MemberCommittee records not found");
    }
    res.json(result);
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error !!!");
  }
};

