exports.up = function(knex, Promise) {
  return knex.schema.createTable('projects', function (table) {
    table.increments()
    table.string('name').notNullable()
    table.string('github_url').notNullable()
    table.string('hosted_url')
    table.integer('author_id').references('id').inTable('users').onDelete('CASCADE')
    table.integer('collection_id').references('id').inTable('collections').onDelete('CASCADE')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('projects');
};
