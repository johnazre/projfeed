exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function (table) {
    table.increments()
    table.string('name').notNullable()
    table.integer('role_id').references('id').inTable('roles').onDelete('CASCADE')
    table.integer('school_id').references('id').inTable('schools').onDelete('CASCADE')
    table.string('username').notNullable().unique()
    table.string('email').notNullable().unique()
    table.string('password').notNullable()
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};
