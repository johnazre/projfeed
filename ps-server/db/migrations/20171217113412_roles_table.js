exports.up = function(knex, Promise) {
  return knex.schema.createTable('roles', function (table) {
    table.increments()
    table.string('name').notNullable().unique()
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('roles');
};
