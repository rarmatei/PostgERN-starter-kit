module.exports = {
    development: {
        user: "postgres",
        host: "localhost",
        database: "cyf_hotels",
        password: "password",
        port: 5432
      },
    production: process.env.DATABASE_URL,
    test: {
      user: "xmsqbexfqtkohz",
      host: "ec2-54-217-219-235.eu-west-1.compute.amazonaws.com",
      database: "d1c5h9fthlio6v",
      password: "abfd04c30a9116c93273ea647906218800f975ba79c437bfce98ae890e0a0e96",
      port: 5432,
      ssl: true
    }
  };