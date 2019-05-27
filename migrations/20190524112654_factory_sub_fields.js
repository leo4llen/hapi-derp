exports.up = function (knex, Promise) {
    return knex.schema.createTable('factory_sub_fields', function (table) {
        table.string('factory_sub_field_id').primary()
        table.string('factory_field_id').references('factory_fields.factory_field_id')
        table.string('sub_field_name', 30).notNullable()
    })
}

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('factory_sub_fields')
}