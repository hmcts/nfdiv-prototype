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


router.post('/divorce/confirmation', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names


  const over18 = req.session.data['papers-served-email']

  if (over18 === 'checked') {
    res.redirect('/divorce/confirmation_self_serve')
  } else {
    res.redirect('/divorce/confirmation')
  }
})






router.post('/divorce/respondent_solicitor_address_enter', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names


  const over18 = req.session.data['another']
  const secondcheck = req.session.data['another2']

  if (secondcheck === 'yes') {

    if (over18 === 'solicitor') {
      res.redirect('/divorce/respondent_solicitor_address_enter')
    } else {
      res.redirect('/divorce/respondent_email')
    }

  } else {
    res.redirect('/divorce/respondent_email')
  }


})








router.post('/divorce/review_application', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  const over18 = req.session.data['agreeordispute']

  if (over18 === 'Dispute') {
    res.redirect('/divorce/application_withdraw')
  } else {
    res.redirect('/divorce/review_application')
  }
})



router.post('/joint_divorce/review_application', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  const over18 = req.session.data['agreeordispute']

  if (over18 === 'Dispute') {
    res.redirect('/joint_divorce/application_withdraw_joint')
  } else {
    res.redirect('/joint_divorce/review_application')
  }
})



router.post('/joint_divorce/hub_respond_made', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  const over18 = req.session.data['paperupload']

  if (over18 === 'paperupload') {
    res.redirect('/joint_divorce/hub_respond_made_paper')
  } else {
    res.redirect('/joint_divorce/hub_respond_made')
  }
})








router.post('/divorce/respondent/wantdispute', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  const over18 = req.session.data['jurisdiction_agree']
  const valid = req.session.data['valid_agree']

  if (over18 === 'Yes, I agree the courts have jurisdiction' && valid !== 'No, the marriage was not valid') {
    res.redirect('/divorce/respondent/other_court_cases')
  } else if (over18 === 'No, I do not agree the courts have jurisdiction' && valid === 'No, the marriage was not valid') {
    res.redirect('/divorce/respondent/wantdispute')
  } else if (over18 === 'No, I do not agree the courts have jurisdiction' && valid !== 'No, the marriage was not valid') {
    res.redirect('/divorce/respondent/wantdispute_juris')
  } else if (over18 === 'Yes, I agree the courts have jurisdiction' && valid === 'No, the marriage was not valid') {
    res.redirect('/divorce/respondent/wantdispute_valid')
  }
})


router.post('/divorce/respondent/hub_2', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  const over18 = req.session.data['agreeordispute']
  const confirm = req.session.data['agreeordispute3']


  if (over18 === 'I want to dispute the divorce' && confirm == 'Agree') {
    res.redirect('/divorce/respondent/hub_dispute')
  } else {
    res.redirect('/divorce/respondent/hub_2')
  }
})



router.post('/divorce/respondent/other_court_cases', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  const over18 = req.session.data['dispute_agree']

  if (over18 === 'Change') {
    res.redirect('/divorce/respondent/jurisdictionv2')
  } else {
    res.redirect('/divorce/respondent/other_court_cases')
  }
})




router.post('/divorce/sole_or_joint', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  const over18 = req.session.data['marriage-certificate']

  if (over18 === 'No, I do not have my marriage certificate with me') {
    res.redirect('/divorce/no_marriage_cert')
  } else {
    res.redirect('/divorce/sole_or_joint')
  }
})

router.post('/divorce/help_fees', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  const over18 = req.session.data['sole-joint']

  if (over18 === 'I want to apply jointly, with my husband or wife') {
    res.redirect('/joint_divorce/email_address')
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


router.post('/joint_divorce/help_fees_apply_co_app', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  const over18 = req.session.data['help-fees-number']

  if (over18 === 'true') {
    res.redirect('/joint_divorce/your_names_co_app2')
  } else {
    res.redirect('/joint_divorce/help_fees_apply_co_app')
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



//router.post('/divorce/applicant-phone-number', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  //const over18 = req.session.data['surname']

//  if (over18 === 'No') {
//    res.redirect('/divorce/applicant_phone_number')
//  } else {
//    res.redirect('/divorce/name_changed_deed')
//  }
//})

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

router.post('/divorce/respondent_no_address_no_email', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  const over18 = req.session.data['respondent-address-no-email']

  if (over18 === 'Yes, I have their address') {
    res.redirect('/divorce/respondent_postal_address')
  } else {
    res.redirect('/divorce/respondent_no_address_no_email')
  }
})

router.post('/divorce/respondent_address', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  const firstcheck = req.session.data['another']
  const secondcheck = req.session.data['another2']
  const over18 = req.body['no-email']

  if (over18 === 'I do not know their email address' && secondcheck === 'no') {
    res.redirect('/divorce/respondent_address_no_email')
  } else {
    res.redirect('/divorce/respondent_address')
  }
})

router.post('/divorce/respondent-postal-address', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  const over18 = req.body['papers-served-email']

  if (over18 === 'checked') {
    res.redirect('/divorce/email_service')
  } else {
    res.redirect('/divorce/respondent_postal_address')
  }
})

router.post('/divorce/alternative_service', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  const over18 = req.body['papers-served']

  if (over18 == 'checked') {
    res.redirect('/divorce/alternative_service_no_email')
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


router.post('/divorce/respondent/other_court_cases_details', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  const over18 = req.session.data['other-court-cases']

  if (over18 === 'Yes') {
    res.redirect('/divorce/respondent/other_court_cases_details')
  } else {
    res.redirect('/divorce/respondent/applicant_phone_number')
  }
})




router.post('/divorce/financial_order_details', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  const over18 = req.session.data['financial-order']

  if (over18 === 'No, I do not want to apply for a financial order') {
    res.redirect('/divorce/upload')
  } else {
    res.redirect('/divorce/financial_order_details')
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

router.post('/civil_partnership/sole_or_joint_cp', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  const over18 = req.session.data['cp-certificate']

  if (over18 === 'No, I do not have my civil partnership certificate with me') {
    res.redirect('/civil_partnership/no_civil_partnership_cert')
  } else {
    res.redirect('/civil_partnership/sole_or_joint_cp')
  }
})

router.post('/civil_partnership/help_fees_cp', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  const over18 = req.session.data['sole-joint-cp']

  if (over18 === 'I want to apply jointly, with my civil partner') {
    res.redirect('/joint_divorce/email_address')
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
    res.redirect('/civil_partnership/jurisdiction_cp')
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

  const over18 = req.session.data['surname-cp']

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

router.post('/civil_partnership/respondent_postal_address_cp', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  const over18 = req.session.data['respondent-address-cp']

  if (over18 === 'No, I do not have their address') {
    res.redirect('/civil_partnership/respondent_no_address_cp')
  } else {
    res.redirect('/civil_partnership/respondent_postal_address_cp')
  }
})

router.post('/civil_partnership/respondent_no_address_no_email_cp', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  const over18 = req.session.data['respondent-address-no-email-cp']

  if (over18 === 'Yes, I have their address') {
    res.redirect('/civil_partnership/respondent_postal_address_cp')
  } else {
    res.redirect('/civil_partnership/respondent_no_address_no_email_cp')
  }
})

router.post('/civil_partnership/money-property-cp', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  const over18 = req.session.data['other-court-cases-cp']

  if (over18 === 'No') {
    res.redirect('/civil_partnership/money_property_cp')
  } else {
    res.redirect('/civil_partnership/other_court_cases_details_cp')
  }
})

router.post('/civil_partnership/financial_order_details_cp', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  const over18 = req.session.data['financial-order-cp']

  if (over18 === 'No, I do not want to apply for a financial order') {
    res.redirect('/civil_partnership/claim_costs_cp')
  } else {
    res.redirect('/civil_partnership/financial_order_details_cp')
  }
})

router.post('/civil_partnership/respondent-postal-address-cp', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  const over18 = req.body['papers-served-email-cp']

  if (over18 == 'checked') {
    res.redirect('/civil_partnership/email_service_cp')
  } else {
    res.redirect('/civil_partnership/respondent_postal_address_cp')
  }
})

router.post('/civil_partnership/alternative_service_cp', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  const over18 = req.body['papers-served-cp']

  if (over18 == 'checked') {
    res.redirect('/civil_partnership/alternative_service_cp')
  } else {
    res.redirect('/civil_partnership/respondent_postal_address_cp')
  }
})






// Branching - JOINT DIVORCE

router.post('/joint_divorce/marriage_date', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  const over18 = req.session.data['broken-down']

  if (over18 === 'No') {
    res.redirect('/joint_divorce/cannot_divorce')
  } else {
    res.redirect('/joint_divorce/marriage_date')
  }
})



router.post('/joint_divorce/application_changes_co_app', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  const over18 = req.session.data['needchange']

  if (over18 === 'No') {
    res.redirect('/joint_divorce/application_changes_co_app')
  } else {
    res.redirect('/joint_divorce/check_answers_p2_co_app')
  }
})





router.post('/joint_divorce/your_names_co_app', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  const over18 = req.session.data['broken-down-co-app']

  if (over18 === 'No') {
    res.redirect('/joint_divorce/cannot_divorce_co_app')
  } else {
    res.redirect('/joint_divorce/your_names_co_app')
  }
})



router.post('/joint_divorce/help_fees_co_app', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  const over18 = req.session.data['broken-down-co-app']

  if (over18 === 'No') {
    res.redirect('/joint_divorce/cannot_divorce_co_app')
  } else {
    res.redirect('/joint_divorce/help_fees_co_app')
  }
})

router.post('/joint_divorce/help_fees3', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  const over18 = req.session.data['marriage-certificate']

  if (over18 === 'No, I do not have my marriage certificate with me') {
    res.redirect('/joint_divorce/no_marriage_cert')
  } else {
    res.redirect('/joint_divorce/help_fees3')
  }
})

router.post('/joint_divorce/email_address', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  const over18 = req.session.data['sole-joint']

  if (over18 === 'I want to apply jointly, with my husband or wife') {
    res.redirect('/joint_divorce/email_address')
  } else {
    res.redirect('/divorce/marry_in_uk')
  }
})

router.post('/joint_divorce/marry_in_uk', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  const over18 = req.body['no-email-joint']

  if (over18 == 'I do not know their email address') {
    res.redirect('/joint_divorce/need_email_address')
  } else {
    res.redirect('/joint_divorce/marry_in_uk')
  }
})


//respondent fork
router.post('/divorce/respondent/jurisdiction', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  const over18 = req.body['agreeordispute']

  if (over18 == 'I want to dispute the divorce') {
    res.redirect('/divorce/respondent/dispute')
  } else {
    res.redirect('/divorce/respondent/jurisdiction')
  }
})




//respondent fork
router.post('/divorce/respondent/accept_dispute', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  const over18 = req.body['agreeordispute3']

  if (over18 == 'I confirm I want to dispute the divorce') {
    res.redirect('/divorce/respondent/jurisdiction')
  } else {
    res.redirect('/divorce/respondent/accept_dispute')
  }
})


router.post('/joint_divorce/sole_or_joint', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  const over18 = req.session.data['help-fees']

  if (over18 === 'I need help paying the fee') {
    res.redirect('/joint_divorce/help_fees_number')
  } else {
    res.redirect('/joint_divorce/sole_or_joint')
  }
})


router.post('/joint_divorce/your_names_co_app2', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  const over18 = req.session.data['help-fees']

  if (over18 === 'I need help paying the fee') {
    res.redirect('/joint_divorce/help_fees_number_co_app')
  } else {
    res.redirect('/joint_divorce/your_names_co_app2')
  }
})



router.post('/joint_divorce/help_fees_number', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  const over18 = req.session.data['help-fees-number']

  if (over18 === 'false') {
    res.redirect('/joint_divorce/help_fees_apply')
  } else {
    res.redirect('/joint_divorce/sole_or_jointv2')
  }
})

router.post('/joint_divorce/jurisdiction-page', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  const over18 = req.session.data['marry-uk']

  if (over18 === 'Yes') {
    res.redirect('/joint_divorce/jurisdiction')
  } else {
    res.redirect('/joint_divorce/english_cert')
  }
})

router.post('/joint_divorce/jurisdiction_co_app', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  const over18 = req.session.data['help-fees-co-app']

  if (over18 === 'I need help paying the fee') {
    res.redirect('/joint_divorce/help_fees_number_co_app')
  } else {
    res.redirect('/joint_divorce/jurisdiction_co_app')
  }
})




router.post('/joint_divorce/sole_or_joint', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  const over18 = req.session.data['help-fees']

  if (over18 === 'I need help paying the fee') {
    res.redirect('/joint_divorce/sole_or_jointv2')
  } else {
    res.redirect('/joint_divorce/sole_or_joint')
  }
})




router.post('/joint_divorce/where_you_married_2', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  const over18 = req.session.data['english-certificate']

  if (over18 === 'true') {
    res.redirect('/joint_divorce/where_you_married_2')
  } else {
    res.redirect('/joint_divorce/certified_translation_1')
  }
})

router.post('/joint_divorce/where_you_married_1', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  const over18 = req.session.data['cert-translation-no']

  if (over18 === 'true') {
    res.redirect('/joint_divorce/where_you_married_1')
  } else {
    res.redirect('/joint_divorce/need_certified_translation')
  }
})

router.post('/joint_divorce/applicant-phone-number', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  const over18 = req.session.data['surname']

  if (over18 === 'No') {
    res.redirect('/joint_divorce/applicant_phone_number')
  } else {
    res.redirect('/joint_divorce/name_changed_deed')
  }
})


router.post('/joint_divorce/applicant-phone-number-co-app', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  const over18 = req.session.data['surnameco']

  if (over18 === 'No') {
    res.redirect('/joint_divorce/applicant_phone_number_co_app')
  } else {
    res.redirect('/joint_divorce/name_changed_deed_co_app')
  }
})




router.post('/joint_divorce/respondent_postal_address', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  const over18 = req.session.data['respondent-address']

  if (over18 === 'No, I do not have their address') {
    res.redirect('/joint_divorce/respondent_no_address')
  } else {
    res.redirect('/joint_divorce/respondent_postal_address')
  }
})

router.post('/joint_divorce/respondent_no_address_no_email', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  const over18 = req.session.data['respondent-address-no-email']

  if (over18 === 'Yes, I have their address') {
    res.redirect('/joint_divorce/respondent_postal_address')
  } else {
    res.redirect('/joint_divorce/respondent_no_address_no_email')
  }
})



router.post('/joint_divorce/respondent-postal-address', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  const over18 = req.body['papers-served-email']

  if (over18 == 'checked') {
    res.redirect('/joint_divorce/email_service')
  } else {
    res.redirect('/joint_divorce/respondent_postal_address')
  }
})

router.post('/joint_divorce/alternative_service', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  const over18 = req.body['papers-served']

  if (over18 == 'checked') {
    res.redirect('/joint_divorce/alternative_service')
  } else {
    res.redirect('/joint_divorce/respondent_postal_address')
  }
})

router.post('/joint_divorce/money-property', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  const over18 = req.session.data['other-court-cases']

  if (over18 === 'No') {
    res.redirect('/joint_divorce/money_property')
  } else {
    res.redirect('/joint_divorce/other_court_cases_details')
  }
})

router.post('/joint_divorce/money-property-co-app', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  const over18 = req.session.data['other-court-cases-co-app']

  if (over18 === 'No') {
    res.redirect('/joint_divorce/money_property_co_app')
  } else {
    res.redirect('/joint_divorce/other_court_cases_details_co_app')
  }
})

router.post('/joint_divorce/financial_order_details', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  const over18 = req.session.data['financial-order']

  if (over18 === 'No, I do not want to apply for a financial order') {
    res.redirect('/joint_divorce/upload')
  } else {
    res.redirect('/joint_divorce/financial_order_details')
  }
})

router.post('/joint_divorce/financial_order_details_co_app', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  const over18 = req.session.data['financial-order-co-app']

  if (over18 === 'No, I do not want to apply for a financial order') {
    res.redirect('/joint_divorce/check_answers_p1_co_app')
  } else {
    res.redirect('/joint_divorce/financial_order_details_co_app')
  }
})

// Add your routes here - above the module.exports line

module.exports = router
