const express = require('express')
const router = express.Router()

// Branching
router.post('/divorce/postal_address', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  const over18 = req.session.data['broken-down']

  if (over18 === 'false') {
    res.redirect('/divorce/cannot_divorce')
  } else {
    res.redirect('/divorce/postal_address')
  }
})

router.post('/divorce/marriage_date', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  const over18 = req.session.data['postal-address']

  if (over18 === 'false') {
    res.redirect('/divorce/need_postal_address')
  } else {
    res.redirect('/divorce/marriage_date')
  }
})

router.post('/sign_in', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  const over18 = req.session.data['marriage-certificate']

  if (over18 === 'false') {
    res.redirect('/divorce/no_marriage_cert')
  } else {
    res.redirect('/sign_in')
  }
})

// Add your routes here - above the module.exports line

module.exports = router
