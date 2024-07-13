require('./db')

const express = require('express')
const app = express()

const productController = require('./controllers/postController')

app.use('/api', productController)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
})
