exports.up = async function (knex, Promise) {
    if (await knex.schema.hasTable('target_special_rules'))
        return;

    return knex.schema.createTable('target_special_rules', function (table) {
        table.string('target_special_rule_id', 36).primary()
        table.string('deal_id', 36).references('deals.deal_id')
        table.enum('target_type', [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]).notNullable()
        table.integer('no_of_users', 20)
        table.enum('day_type', [1, 2, 3]).comment('1 - week, 2 - month, 3 - day')
        table.integer('value').notNullable()
        table.integer('amount')
        table.integer('points')
        table.string('status', 36).references('status.status_id')
        table.timestamps()
    })
}

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('target_special_rules')
}