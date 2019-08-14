module.exports = {
    development: {
        user: "postgres",
        host: "localhost",
        database: "cyf_test",
        password: "password",
        port: 5432
      },
    production: {
      connectionString: process.env.DATABASE_URL
    }
  };