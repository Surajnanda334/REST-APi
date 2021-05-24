const express = require('express');
const { schema } = require('../models/model');
const Schema = require('../models/model');

const router = express.Router(); 


router.get('/', async (req,res) =>{
  try{
    const posts = await Schema.find();
    res.json(posts)
  }catch(err){
    console.log({message:err});
  }
  
});

router.post('/', async (req,res) => {
  const schema = new Schema({
    name: req.body.name,
    age: req.body.age
  });
  try{
    const post = await schema.save();
    res.json(post);
  }catch(err){
    console.log(err);
  }
  
});

router.get('/:id', async(req,res)=>{
  try{
    const post= await Schema.findById(req.params.id);
    res.json(post);
  }catch(err){
    console.log({message:err});
  }
})

module.exports = router;