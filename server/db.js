const mongoose = require('mongoose')

const USER = process.env.MONGO_DB_USERNAME
const PASSWORD = process.env.MONGO_DB_PASSWORD
const URI = `mongodb://${USER}:${PASSWORD}@mongo-db:27017/blog?authSource=admin`

mongoose
  .connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to MongoDB')
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error)
  })
