exports.up = async function (knex, Promise) {
    if (await knex.schema.hasTable('merchant_outlets'))
        return;

    return knex.schema.createTable('merchant_outlets', function (table) {
        table.string('merchant_outlet_id', 36).primary()
        table.string('merchant_id', 36).references('merchants.merchant_id')
        table.string('outlet_name', 255).notNullable()
        table.string('address', 50)
        table.string('phone', 50)
        table.string('latitude').notNullable()
        table.string('longitude').notNullable()
        table.string('created_by', 36).references('users.user_id')
        table.string('status', 36).references('status.status_id')
        table.timestamps()
    })
}

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('merchant_outlets')
}