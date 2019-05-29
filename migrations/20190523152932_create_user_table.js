exports.up = async function (knex, Promise) {
  if (await knex.schema.hasTable('users')) {
    return;
  }

  return knex.schema.createTable('users', function (table) {
    table.string('user_id', 36).primary()
    table.string('role_id', 36).references('roles.role_id')
    table.string('name', 255).notNullable()
    table.string('email', 255).notNullable()
    table.string('password', 255)
    table.string('status', 36).references('status.status_id')
    table.string('created_by', 36).references('users.user_id')
    table.timestamps()
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('users')
}