const SERVER_PORT = process.env.PORT || 4000
const express = require('express')
const app = express()
const path = require('path')
const cors = require('cors')
const passport = require('passport')
const api = require('./api')
require('./passport')
const auth = require('./routes/auth')
const user = require('./routes/user')
const bodyParser = require('body-parser')

app.use(bodyParser.json())

app.use(cors())

app.use('/auth', auth)
app.use('/user', passport.authenticate('jwt', { session: false }), user)

app.use('/api', api);


// In development environemnt, we use the create-react-app dev server
// In production, the static build is served from here
if (process.env.NODE_ENV !== 'development') {
  app.use('/', express.static(path.resolve(__dirname, '../client/build')))
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'))
  })
}

app.listen(SERVER_PORT, () =>
  console.log(`Server running on ${SERVER_PORT}`)
)
