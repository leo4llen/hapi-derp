exports.up = async function (knex, Promise) {
    if (await knex.schema.hasTable('roles')) {
        return;
    }

    return knex.schema.createTable('roles', function (table) {
        table.string('role_id', 36).primary()
        table.string('role_name', 20).notNullable()
        table.string('description', 255)
        table.string("created_by", 36).references("users.user_id")
        table.string('status', 36).references('status.status_id')
        table.timestamps()
    })
}

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('roles')
}