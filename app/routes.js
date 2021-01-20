const express = require('express')
const router = express.Router()

// Branching - DIVORCE
router.post('/divorce/marriage_date', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  const over18 = req.session.data['broken-down']

  if (over18 === 'false') {
    res.redirect('/divorce/cannot_divorce')
  } else {
    res.redirect('/divorce/marriage_date')
  }
})

router.post('/divorce/marriage_date_2', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  const over18 = req.session.data['broken-down-v2']

  if (over18 === 'false') {
    res.redirect('/divorce/cannot_divorce_2')
  } else {
    res.redirect('/divorce/marriage_date_2')
  }
})

router.post('/divorce/help_fees', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  const over18 = req.session.data['marriage-certificate']

  if (over18 === 'false') {
    res.redirect('/divorce/no_marriage_cert')
  } else {
    res.redirect('/divorce/help_fees')
  }
})

router.post('/divorce/help_fees_2', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  const over18 = req.session.data['marriage-certificate-v2']

  if (over18 === 'false') {
    res.redirect('/divorce/no_marriage_cert_2')
  } else {
    res.redirect('/divorce/help_fees_2')
  }
})

router.post('/divorce/end_page', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  const over18 = req.session.data['help-fees']

  if (over18 === 'true') {
    res.redirect('/divorce/help_fees_number')
  } else {
    res.redirect('/divorce/end_page')
  }
})

router.post('/divorce/end_page_1', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  const over18 = req.session.data['help-fees-number']

  if (over18 === 'false') {
    res.redirect('/divorce/help_fees_apply')
  } else {
    res.redirect('/divorce/end_page_1')
  }
})

// Branching - CIVIL PARTNERSHIP
router.post('/civil_partnership/civil_partnership_date', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  const over18 = req.session.data['broken-down-cp']

  if (over18 === 'false') {
    res.redirect('/civil_partnership/cannot_end_civil_partnership')
  } else {
    res.redirect('/civil_partnership/civil_partnership_date')
  }
})

router.post('/civil_partnership/sign_in', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  const over18 = req.session.data['cp-certificate']

  if (over18 === 'false') {
    res.redirect('/civil_partnership/no_civil_partnership_cert')
  } else {
    res.redirect('/civil_partnership/sign_in')
  }
})

// Add your routes here - above the module.exports line

module.exports = router
