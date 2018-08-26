exports.seed = async (knex, Promise) => {
  await knex('users').del()

  // Inserts seed entries
  return knex('users').insert([
    {
      name: 'mat',
      email: 'mat@gmail.com',
      password: 'password1',
      city: 'Glasgow',
      postcode: 'G3 4EF'
    },
    {
      name: 'awet',
      email: 'awet@yahoo.com',
      password: 'password2',
      city: 'Glasgow',
      postcode: 'G1 5EF'
    }
  ])
}
