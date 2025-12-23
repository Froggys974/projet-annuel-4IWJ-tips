// Load .env before reading DATABASE_URL
require('dotenv').config()

module.exports = {
  datasource: {
    url: process.env.DATABASE_URL,
  },
}
