exports.up = function (knex, Promise) {
    return knex.schema.createTable('tags', function (table) {
        table.string('tag_id').primary()
        table.string('tag_name', 30).notNullable()
        table.string('icon', 255).notNullable()
    })
}

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('tags')
}