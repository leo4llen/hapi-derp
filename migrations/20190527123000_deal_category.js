exports.up = async function (knex, Promise) {
    if (await knex.schema.hasTable('deal_categories'))
        return;

    return knex.schema.createTable('deal_categories', function (table) {
        table.string('deal_category_id', 36).primary()
        table.string('deal_category_name', 20).notNullable()
        table.string('status', 36).references('status.status_id')
        table.timestamps()
    })
}

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('deal_categories')
}