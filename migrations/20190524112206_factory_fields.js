exports.up = async function (knex, Promise) {
    if (await knex.schema.hasTable('factory_fields'))
        return;

    return knex.schema.createTable('factory_fields', function (table) {
        table.string('factory_field_id', 36).primary()
        table.string('factory_dependency_id', 36).references('factory_dependencies.factory_dependency_id')
        table.string('field_name', 30).notNullable()
        table.string('status', 36).references('status.status_id')
        table.timestamps()
    })
}

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('factory_fields')
}