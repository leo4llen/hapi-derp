exports.up = async function (knex, Promise) {
    if (await knex.schema.hasTable('containers')) {
        return;
    }

    return knex.schema.createTable('containers', function (table) {
        table.string('container_id', 36).primary()
        table.string('container_type_id', 36).references('container_types.container_type_id')
        table.string('container_name', 30).notNullable()
        table.string('created_by', 36).references('users.user_id')
        table.string('status', 36).references('status.status_id')
        table.timestamps()
    })
}

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('containers')
}