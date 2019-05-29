exports.up = async function (knex, Promise) {
    if (await knex.schema.hasTable('deal_types'))
        return;

    return knex.schema.createTable('deal_types', function (table) {
        table.string('deal_type_id', 36).primary()
        table.string('deal_name', 20).notNullable()
        table.string('created_by', 36).references('users.user_id')
        table.string('status', 36).references('status.status_id')
        table.timestamps()
    })
}

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('deal_types')
}