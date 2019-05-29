exports.up = async function (knex, Promise) {
    if (await knex.schema.hasTable('factory_dependencies'))
        return;

    return knex.schema.createTable('factory_dependencies', function (table) {
        table.string('factory_dependency_id', 36).primary()
        table.string('tag_id', 36).references('tags.tag_id')
        table.string('title', 30).notNullable()
        table.string('status', 36).references('status.status_id')
        table.timestamps()
    })
}

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('factory_dependencies')
}