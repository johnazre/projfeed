exports.up = function(knex, Promise) {
  return knex.schema.createTable('feedbacks', function(table) {
    table.increments()
    table.integer('author_id').references('id').inTable('users').onDelete('CASCADE')
    table.integer('project_id').references('id').inTable('projects').onDelete('CASCADE')
    table.text('warm_fb').notNullable()
    table.text('cool_fb').notNullable()
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('feedbacks')
}
