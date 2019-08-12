module.exports = {
    development: {
        user: "postgres",
        host: "localhost",
        database: "cyf_hotels",
        password: "password",
        port: 5432
      },
    production: process.env.DATABASE_URL
  };