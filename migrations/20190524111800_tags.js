exports.up = async function (knex, Promise) {
    if (await knex.schema.hasTable('tags'))
        return;

    return knex.schema.createTable('tags', function (table) {
        table.string('tag_id', 36).primary()
        table.string('tag_name', 30).notNullable()
        table.string('icon', 255).notNullable()
        table.string('created_by', 36).references('users.user_id')
        table.string('status', 36).references('status.status_id')
        table.timestamps()
    })
}

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('tags')
}