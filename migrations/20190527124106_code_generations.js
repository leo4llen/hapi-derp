exports.up = async function (knex, Promise) {
    if (await knex.schema.hasTable('code_generations'))
        return;

    return knex.schema.createTable('code_generations', function (table) {
        table.string('code_generation_id', 36).primary()
        table.string('deal_id', 36).references('deals.deal_id')
        table.string('code', 30).notNullable()
        table.string('status', 36).references('status.status_id')
        table.timestamps()
    })
}

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('code_generations')
}