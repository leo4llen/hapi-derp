exports.up = function (knex, Promise) {
    return knex.schema.createTable('roles', function (table) {
        table.string('role_id').primary()
        table.string('role_name', 20).notNullable()
        table.string('description', 255)
        table.boolean('is_deleted').defaultTo(0)
    })
}

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('roles')
}