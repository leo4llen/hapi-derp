exports.up = function (knex, Promise) {
    return knex.schema.createTable('containers', function (table) {
        table.string('container_id').primary()
        table.string('container_type_id').references('container_types.container_type_id')
        table.string('container_name', 30).notNullable()
        table.boolean('is_enabled').defaultTo(1)
    })
}

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('containers')
}