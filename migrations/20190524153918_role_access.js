exports.up = function (knex, Promise) {
    return knex.schema.createTable('role_access', function (table) {
        table.string('role_access_id').primary()
        table.string('role_section_id').references('role_sections.role_section_id')
        table.string('role_id').references('roles.role_id')
        table.boolean('all').defaultTo(0)
        table.boolean('view').defaultTo(0)
        table.boolean('edit').defaultTo(0)
        table.boolean('create').defaultTo(0)
        table.boolean('approve').defaultTo(0)
    })
}

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('role_access')
}