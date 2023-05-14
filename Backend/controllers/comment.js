const express=require('express')
const Comment=require('../models/comment');

exports.postComment=async(req,res,next)=>{
    try {
    const { comment} = req.body;
    const currentTime = new Date().getTime();
    const newComment = new Comment({
      comment: comment,
      date: currentTime,
    });
    const result=await newComment.save();
    res.status(200).json(comment)
}catch(err){
    console.log(err);
    res.status(500).send('Server Error')
}
}

exports.getComment=async(req,res,next)=>{
   try {
    const comment=await Comment.find();
    res.status(200).json(comment)
   } catch (error) {
        console.log(err);
        res.status(500).send('Server Error')
   }
   
    
}
