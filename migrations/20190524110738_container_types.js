exports.up = async function (knex, Promise) {
    if (await knex.schema.hasTable('container_types')) {
        return;
    }

    return knex.schema.createTable('container_types', function (table) {
        table.string('container_type_id', 36).primary()
        table.string('container_type_name', 30).notNullable()
        table.string('status', 36).references('status.status_id')
        table.timestamps()
    })
}

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('container_types')
}