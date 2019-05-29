exports.up = async function (knex, Promise) {
    if (await knex.schema.hasTable('status')) {
        return;
    }

    return knex.schema.createTable('status', function (table) {
        table.string('status_id', 36).primary()
        table.string('status_name', 20).notNullable()
        table.boolean('status').defaultTo(1)
    })
}

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('status')
}