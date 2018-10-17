const express = require('express')
    , graphqlHTTP = require('express-graphql')
    , app = express()

const schema = require('./schema/schema')

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}))

const PORT = 4000
app.listen(
  PORT
  , () => console.log(`${new Date().toLocaleTimeString('en-GB')}: Server initialised on PORT: ${PORT}...`)
)
