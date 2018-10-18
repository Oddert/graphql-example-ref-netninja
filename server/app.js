const express       = require('express')
    , graphqlHTTP   = require('express-graphql')
    , app           = express()
    , mongoose      = require('mongoose')
    , dotenv        = require('dotenv').config()
    , cors          = require('cors')

const schema        = require('./schema/schema')

mongoose.connect(process.env.DATABASE)
mongoose.connection.once('open', () => {
  console.log('DB connection open...')
})

app.use(cors())

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}))

const PORT = 4000
app.listen(
  PORT
  , () => console.log(`${new Date().toLocaleTimeString('en-GB')}: Server initialised on PORT: ${PORT}...`)
)
