const express = require('express');
const router = express.Router();

const Recipes = require('./recipe-model');

// Returns All Cars in the database
router.get('/', async (req, res, next) => {
	try {
		const recipes  = await Recipes.getRecipes();
		res.json(recipes);
	} catch (err) {
		next(err);
	}
})

// Returns the ingredients for a recipe with the specified id
router.get('/:id/ingredients', async (req, res, next) => {
	try {
		const list  = await Recipes.getShoppingList(req.params.id);
		res.json(list);
	} catch (err) {
		next(err);
	}
})

// Returns the step by step instructions for a recipe with the specified id
router.get('/:id/instructions', async (req, res, next) => {
	try {
		const instructions  = await Recipes.getInstructions(req.params.id);
		res.json(instructions);
	} catch (err) {
		next(err);
	}
})

module.exports = router;