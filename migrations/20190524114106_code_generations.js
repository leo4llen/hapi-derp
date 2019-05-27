exports.up = function (knex, Promise) {
    return knex.schema.createTable('code_generations', function (table) {
        table.string('code_generation_id').primary()
        table.string('deal_id').references('deals.deal_id')
        table.string('code', 30).notNullable()
    })
}

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('code_generations')
}