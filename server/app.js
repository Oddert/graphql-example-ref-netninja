const express       = require('express')
    , graphqlHTTP   = require('express-graphql')
    , app           = express()
    , mongoose      = require('mongoose')
    , dotenv        = require('dotenv').config()

const schema        = require('./schema/schema')

mongoose.connect(process.env.DATABASE)

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}))

const PORT = 4000
app.listen(
  PORT
  , () => console.log(`${new Date().toLocaleTimeString('en-GB')}: Server initialised on PORT: ${PORT}...`)
)
