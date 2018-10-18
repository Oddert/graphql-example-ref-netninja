const mongoose = require('mongoose')

const BookSchema = new mongoose.Schema ({
  name: String,
  genre: String,
  authorId: String
})

module.exports = mongoose.model('graphql-netninja-book', BookSchema)
