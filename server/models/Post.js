const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
  userId: { type: Number, required: true },
  title: { type: String, required: true },
  body: { type: String, required: true },
})

module.exports = mongoose.model('Post', postSchema)
