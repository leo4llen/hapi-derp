exports.up = async function (knex, Promise) {
    if (await knex.schema.hasTable('role_sections'))
        return;

    return knex.schema.createTable('role_sections', function (table) {
        table.string('role_section_id', 36).primary()
        table.string('field_name', 20).notNullable()
        table.string('status', 36).references('status.status_id')
        table.timestamps()
    })
}

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('role_sections')
}