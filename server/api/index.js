const express = require('express')
const router = express.Router()
const db = require('../helpers/db')

router.get('/status', (req, res) => {
  res.send('All good')
})

router.get('/users', (req, res) => {
  db.getUsers().then(data => {
    res.send(data)
  })
})

module.exports = router
