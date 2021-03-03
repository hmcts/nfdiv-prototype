const express = require('express')
const router = express.Router()

// Branching - DIVORCE
router.post('/divorce/marriage_date', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  const over18 = req.session.data['broken-down']

  if (over18 === 'No') {
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

  if (over18 === 'No') {
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

router.post('/divorce/marry_in_uk', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  const over18 = req.session.data['help-fees']

  if (over18 === 'I need help paying the fee') {
    res.redirect('/divorce/help_fees_number')
  } else {
    res.redirect('/divorce/marry_in_uk')
  }
})

router.post('/divorce/help_fees_number', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  const over18 = req.session.data['help-fees-number']

  if (over18 === 'false') {
    res.redirect('/divorce/help_fees_apply')
  } else {
    res.redirect('/divorce/marry_in_uk')
  }
})

router.post('/divorce/jurisdiction-page', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  const over18 = req.session.data['marry-uk']

  if (over18 === 'Yes') {
    res.redirect('/divorce/jurisdiction')
  } else {
    res.redirect('/divorce/english_cert')
  }
})

router.post('/divorce/where_you_married_2', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  const over18 = req.session.data['english-certificate']

  if (over18 === 'true') {
    res.redirect('/divorce/where_you_married_2')
  } else {
    res.redirect('/divorce/certified_translation_1')
  }
})

router.post('/divorce/where_you_married_1', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  const over18 = req.session.data['cert-translation-no']

  if (over18 === 'true') {
    res.redirect('/divorce/where_you_married_1')
  } else {
    res.redirect('/divorce/need_certified_translation')
  }
})

router.post('/divorce/applicant-phone-number', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  const over18 = req.session.data['surname']

  if (over18 === 'No') {
    res.redirect('/divorce/applicant_phone_number')
  } else {
    res.redirect('/divorce/name_changed_deed')
  }
})

router.post('/divorce/respondent_postal_address', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  const over18 = req.session.data['respondent-address']

  if (over18 === 'No, I do not have their address') {
    res.redirect('/divorce/respondent_no_address')
  } else {
    res.redirect('/divorce/respondent_postal_address')
  }
})

router.post('/divorce/respondent_address', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  const over18 = req.body['no-email-address']

  if (over18 == 'I do not know their email address') {
    res.redirect('/divorce/respondent_address_no_email')
  } else {
    res.redirect('/divorce/respondent_address')
  }
})

router.post('/divorce/other-court-cases', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  const over18 = req.body['papers-served']

  if (over18 == 'checked') {
    res.redirect('/divorce/other_court_cases')
  } else {
    res.redirect('/divorce/respondent_postal_address')
  }
})

router.post('/divorce/money-property', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  const over18 = req.session.data['other-court-cases']

  if (over18 === 'No') {
    res.redirect('/divorce/money_property')
  } else {
    res.redirect('/divorce/other_court_cases_details')
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

router.post('/civil_partnership/help_fees_cp', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  const over18 = req.session.data['cp-certificate']

  if (over18 === 'false') {
    res.redirect('/civil_partnership/no_civil_partnership_cert')
  } else {
    res.redirect('/civil_partnership/help_fees_cp')
  }
})

router.post('/civil_partnership/cp_in_uk', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  const over18 = req.session.data['help-fees-cp']

  if (over18 === 'true') {
    res.redirect('/civil_partnership/help_fees_number_cp')
  } else {
    res.redirect('/civil_partnership/cp_in_uk')
  }
})

router.post('/civil_partnership/help_fees_number', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  const over18 = req.session.data['help-fees-number-cp']

  if (over18 === 'false') {
    res.redirect('/civil_partnership/help_fees_apply_cp')
  } else {
    res.redirect('/civil_partnership/cp_in_uk')
  }
})

router.post('/civil_partnership/jurisdiction-page', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  const over18 = req.session.data['cp-uk']

  if (over18 === 'true') {
    res.redirect('/civil_partnership/jurisdiction')
  } else {
    res.redirect('/civil_partnership/english_cert_cp')
  }
})

router.post('/civil_partnership/where_you_formed_cp_2', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  const over18 = req.session.data['english-certificate-cp']

  if (over18 === 'true') {
    res.redirect('/civil_partnership/where_you_formed_cp_2')
  } else {
    res.redirect('/civil_partnership/certified_translation_cp')
  }
})

router.post('/civil_partnership/where_you_formed_cp_1', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  const over18 = req.session.data['cert-translation-cp-no']

  if (over18 === 'true') {
    res.redirect('/civil_partnership/where_you_formed_cp_1')
  } else {
    res.redirect('/civil_partnership/need_certified_translation_cp')
  }
})

router.post('/civil_partnership/applicant-phone-number-cp', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  const over18 = req.session.data['surname']

  if (over18 === 'No') {
    res.redirect('/civil_partnership/applicant_phone_number_cp')
  } else {
    res.redirect('/civil_partnership/name_changed_deed_cp')
  }
})

router.post('/civil_partnership/respondent_address_cp', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  const over18 = req.body['no-email-address-cp']

  if (over18 == 'checked') {
    res.redirect('/civil_partnership/respondent_address_no_email_cp')
  } else {
    res.redirect('/civil_partnership/respondent_address_cp')
  }
})

// Add your routes here - above the module.exports line

module.exports = router
