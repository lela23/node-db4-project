
exports.seed = async function(knex) {
	await knex('ingredients').insert([
    {name: 'ingredient-1'},
    {name: 'ingredient-2'},
    {name: 'ingredient-3'},
    {name: 'ingredient-4'},
    {name: 'ingredient-5'},
    {name: 'ingredient-6'}

  ])
}