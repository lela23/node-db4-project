
exports.seed = async function(knex) {
	// clear out our table
	// truncate does more than .del(), like resetting the autoincrementing ID
  await knex('recipes').truncate();
  await knex('ingredients').truncate();
  await knex('steps').truncate();
}