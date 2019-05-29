exports.up = async function (knex, Promise) {
    if (await knex.schema.hasTable('factory_sub_fields'))
        return;

    return knex.schema.createTable('factory_sub_fields', function (table) {
        table.string('factory_sub_field_id', 36).primary()
        table.string('factory_field_id', 36).references('factory_fields.factory_field_id')
        table.string('sub_field_name', 30).notNullable()
        table.string('status', 36).references('status.status_id')
        table.timestamps()
    })
}

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('factory_sub_fields')
}