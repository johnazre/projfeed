exports.up = function(knex, Promise) {
  return knex.schema.createTable('collections', function (table) {
    table.increments()
    table.string('name').notNullable()
    table.integer('school_id').notNullable().references('id').inTable('schools').onDelete('CASCADE')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('collections');
};
