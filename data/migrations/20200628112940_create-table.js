
exports.up = async function(knex) {
    await knex.schema.createTable('recipes', tbl => {
        tbl.increments();
        tbl.text('name', 128).unique().notNullable();
      })
      .createTable('ingredients', tbl => {
        tbl.increments();
        tbl.text('name', 128).unique().notNullable();
      })
      .createTable('steps', tbl => {
        tbl.increments();
        tbl.integer('recipe_id')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('recipes')
          .onUpdate('CASCADE')
          .onDelete('CASCADE');
      tbl.integer('step_number').unsigned().notNullable();
      tbl.integer('ingredient_id')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('ingredients')
          .onUpdate('CASCADE')
          .onDelete('CASCADE');
      tbl.float('quantity').notNullable();
      tbl.text('description').notNullable();
    })
  }
    
  exports.down = async function(knex) {
    await knex.schema
      .dropTableIfExists('steps')
      .dropTableIfExists('ingredients')
      .dropTableIfExists('recipes');
  }
  
