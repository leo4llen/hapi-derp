exports.up = function (knex, Promise) {
    return knex.schema.createTable('factory_fields', function (table) {
        table.string('factory_field_id').primary()
        table.string('factory_dependency_id').references('factory_dependencies.factory_dependency_id')
        table.string('field_name', 30).notNullable()
    })
}

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('factory_fields')
}