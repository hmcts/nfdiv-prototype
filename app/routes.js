const express = require('express')
const router = express.Router()

// Branching
router.post('/postal_address', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  const over18 = req.session.data['broken-down']

  if (over18 === 'false') {
    res.redirect('/cannot_divorce')
  } else {
    res.redirect('/postal_address')
  }
})

router.post('/email_address', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  const over18 = req.session.data['postal-address']

  if (over18 === 'false') {
    res.redirect('/need_postal_address')
  } else {
    res.redirect('/email_address')
  }
})

router.post('/sign_in', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  const over18 = req.session.data['marriage-certificate']

  if (over18 === 'false') {
    res.redirect('/no_marriage_cert')
  } else {
    res.redirect('/sign_in')
  }
})

// Add your routes here - above the module.exports line

module.exports = router
