exports.up = async (knex, Promise) => {
  await knex.schema.createTable('users', table => {
    table.increments('user_id')
    table.string('name')
    table.string('email').notNullable()
    table.string('city').defaultTo('Glasgow')
    table.string('postcode').notNullable()
    table.string('password').notNullable()
  })
}

exports.down = async (knex, Promise) => {
  await knex.schema.dropTableIfExists('users')
}
