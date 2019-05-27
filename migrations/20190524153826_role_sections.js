exports.up = function (knex, Promise) {
    return knex.schema.createTable('role_sections', function (table) {
        table.string('role_section_id').primary()
        table.string('section_name', 20).notNullable()
    })
}

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('role_sections')
}