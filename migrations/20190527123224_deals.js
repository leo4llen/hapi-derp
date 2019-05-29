exports.up = async function (knex, Promise) {
    if (await knex.schema.hasTable('deals'))
        return;

    return knex.schema.createTable('deals', function (table) {
        table.string('deal_id', 36).primary()
        table.string('deal_title', 30).notNullable()
        table.string('deal_type_id', 36).references('deal_types.deal_type_id')
        table.string('deal_category_id', 36).references('deal_categories.deal_category_id')
        table.string('merchant_id', 36).references('merchants.merchant_id')
        table.string('merchant_outlet_id', 36).references('merchant_outlets.merchant_outlet_id')
        table.string('tag_id', 36).references('tags.tag_id')
        table.string('cta_button_text', 55).notNullable()
        table.datetime('promotion_start_at').notNullable()
        table.datetime('promotion_end_at').notNullable()
        table.string('deal_image', 255).notNullable()
        table.enum('container_expiry_type', [1, 2, 3, 4]).defaultTo(4)
        table.datetime('container_expiry_at')
        table.string('container_timer_image', 255)
        table.enum('arrival_element', [1, 2, 3]).defaultTo(3)
        table.string('push_notification_message', 255)
        table.enum('push_notification_condition', [1, 2, 3, 4]).defaultTo(4)
        table.string('push_notification_location')
        table.enum('voucher_type', [1, 2]).defaultTo(1).comment('1 - Single-Use, 2 - Multi-Use ')
        table.enum('voucher_expiry_type', [1, 2, 3]).defaultTo(1).comment('1 - when promotion end, 2 - 2 days after promotion start, 3 - custom time')
        table.integer('voucher_expiry_time', 10).comment('For custome time')
        table.integer('grab_limit', 20)
        table.integer('reedem_limit', 20)
        table.enum('targeting_option', [1, 2, 3]).defaultTo(1).comment('1 - Everyone, 2 - selected users, 3 - special rule')
        // table.enum('save_status', [1, 2, 3]).defaultTo(2)
        table.enum('save_status', ['unchecked', 'checked']).defaultTo('unchecked')
        table.string('status', 36).references('status.status_id')
        table.string('created_by', 36).references('users.user_id')
        table.string('updated_by', 36).references('users.user_id')
        table.timestamps()
    })
}

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('deals')
}