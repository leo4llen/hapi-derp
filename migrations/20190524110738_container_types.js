exports.up = function (knex, Promise) {
    return knex.schema.createTable('container_types', function (table) {
        table.string('container_type_id').primary()
        table.string('container_type_name', 30).notNullable()
    })
}

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('container_types')
}