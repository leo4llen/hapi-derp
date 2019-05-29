exports.up = async function (knex, Promise) {
    if (await knex.schema.hasTable('merchants'))
        return;

    return knex.schema.createTable('merchants', function (table) {
        table.string('merchant_id', 36).primary()
        table.string('merchant_name').notNullable()
        table.string('website').notNullable()
        table.string('logo').notNullable()
        table.string('email').notNullable()
        table.string('created_by', 36).references('users.user_id')
        table.string('status', 36).references('status.status_id')
        table.timestamps()
    })
}

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('merchant')
}