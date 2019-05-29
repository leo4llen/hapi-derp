exports.up = async function (knex, Promise) {
    if (await knex.schema.hasTable('role_access'))
        return;

    return knex.schema.createTable('role_access', function (table) {
        table.string('role_access_id', 36).primary()
        table.string('role_section_id', 36).references('role_sections.role_section_id')
        table.string('role_id', 36).references('roles.role_id')
        table.boolean('all').defaultTo(0)
        table.boolean('view').defaultTo(0)
        table.boolean('edit').defaultTo(0)
        table.boolean('create').defaultTo(0)
        table.boolean('approve').defaultTo(0)
        table.string('status', 36).references('status.status_id')
        table.timestamps()
    })
}

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('role_access')
}