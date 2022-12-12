var express = require('express');
var router = express.Router();
//import recipe model
const RecipeModel=require('../models/Recipe');

/* GET recipe listing. */
router.get('/',async function(req, res, next) {
    try {
        const recipes=await RecipeModel.find({});

        return res.status(200).send({message:"Data has been added!",data:recipes})
    } catch (error) {
        return res.status(400).send({message:"Error Occured!",error:error.message})
    }
});

//add recipe
router.post('/', function(req, res, next) {
    try {
        const {Name,Ingredients,Cuisine}=req.body;
        const newRecipe=new RecipeModel({Name,Ingredients,Cuisine})
        newRecipe.save();
    
        return res.status(200).send({message:"Data has been added!",data:newRecipe})
    
    } catch (error) {
        return res.status(400).send({message:"Error Occured!",error:error.message})
    }
});
  
//delete recipe
router.delete('/:recipeId',async function(req, res, next) {
    try {
        const recipeId= req.params.recipeId;
        await RecipeModel.findByIdAndDelete(recipeId)
    
        return res.status(200).send({message:"Recipe has been deleted!"})
    
    } catch (error) {
        return res.status(400).send({message:"Error Occured in update!",error:error.message})
}});
  
//update recipe
router.put('/:recipeId', async function(req, res, next) {
    try {
        const recipeId= req.params.recipeId;
        const {Name,Ingredients,Cuisine}=req.body;
        await RecipeModel.findByIdAndUpdate(recipeId,{Name,Ingredients,Cuisine})
    
        return res.status(200).send({message:"Recipe has been updated!"})
    
    } catch (error) {
        return res.status(400).send({message:"Error Occured in update!",error:error.message})
    }
});
  
  

module.exports = router;
