exports.up = function (knex, Promise) {
    return knex.schema.createTable('factory_dependencies', function (table) {
        table.string('factory_dependency_id').primary()
        table.string('tag_id').references('tags.tag_id')
        table.string('title', 30).notNullable()
    })
}

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('factory_dependencies')
}