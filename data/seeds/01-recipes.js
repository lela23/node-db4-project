
exports.seed = async function(knex) {
	await knex('recipes').insert([
    {name: 'recipe-1'},
    {name: 'recipe-2'},
    {name: 'recipe-3'},
    {name: 'recipe-4'},
    {name: 'recipe-5'},
    {name: 'recipe-6'}

  ])
}