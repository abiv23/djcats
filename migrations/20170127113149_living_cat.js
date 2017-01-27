
exports.up = function(knex, Promise) {
  return knex.schema.createTable('living_cat', function(table){
    table.increments();
    table.text('name').notNullable();
    table.text('color').notNullable();
    table.text('type').notNullable();
    table.text('image_url').notNullable();
    table.boolean('is_alive').notNullable().defaultTo(true);
    table.integer('age').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('living_cat');
};
