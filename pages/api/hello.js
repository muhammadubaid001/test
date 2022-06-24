// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const express = require('express')
const router = express.Router

router.get('/auth', async (req, res) => {
  res.status(200).json({
    success: true,
    message: 'False'
  })
})

module.exports = router