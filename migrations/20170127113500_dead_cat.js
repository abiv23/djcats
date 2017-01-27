
exports.up = function(knex, Promise) {
  return knex.schema.createTable('dead_cat', function(table){
    table.increments();
    table.text('name').notNullable();
    table.text('color').notNullable();
    table.text('type').notNullable();
    table.text('image_url').notNullable();
    table.boolean('is_alive').notNullable().defaultTo(false);
    table.integer('owner_id').unsigned().references('owner.id').onDelete('cascade');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('dead_cat');
};
