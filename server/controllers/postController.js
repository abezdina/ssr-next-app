const express = require('express')
const router = express.Router()
const Post = require('../models/Post')

router.get('/posts', async (req, res) => {
  try {
    console.log(`Get posts`)

    const posts = await Post.find()
    res.json(posts)
  } catch (error) {
    console.error(`Error ${error}`)

    res.status(500).json({ error: 'Internal server error' })
  }
})

router.get('/posts/:id', async (req, res) => {
  try {
    console.log(`Get post ${req.params.id}`)

    const post = await Post.findById(req.params.id)

    if (!post) {
      return res.status(404).json({ error: 'Post not found' })
    }
    res.json(post)
  } catch (error) {
    console.error(`Error ${error}`)

    res.status(500).json({ error: 'Internal server error' })
  }
})

module.exports = router
