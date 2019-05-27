exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function(table) {
    table.string('user_id').primary()
    table.string('name', 255).notNullable()
    table.string('email', 255).notNullable()
    table.string('password', 255)
    table.timestamps()
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users')
}
