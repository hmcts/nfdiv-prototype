//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here

router.post('/fees-answer', function(request, response) {

    var HelpFees = request.session.data['help-fees']
    if (HelpFees == "I need help paying the fee"){
        response.redirect("/divorce2/help_fees_number")
    } else {
        response.redirect("/divorce2/sole_or_joint")
    }
})

router.post('/HWF-applied', function(request, response) {

    var HelpFeesNumber = request.session.data['help-fees-number']
    if (HelpFeesNumber == "Yes"){
        response.redirect("/divorce2/sole_or_joint")
    } else {
        response.redirect("/divorce2/help_fees_apply_2")
    }
})

router.post('/jurisdiction-page', function(request, response) {

    var MarryUK = request.session.data['marry-uk']
    if (MarryUK == "Yes"){
        response.redirect("/divorce2/jurisdiction")
    } else {
        response.redirect("/divorce2/english_cert")
    }
})

router.post('/english-certificate', function(request, response) {

    var EnglishCertificate = request.session.data['english-certificate']
    if (EnglishCertificate == "Yes"){
        response.redirect("/divorce2/where_you_married_2")
    } else {
        response.redirect("/divorce2/certified_translation_1")
    }
})

router.post('/certified-translation', function(request, response) {

    var CertifiedTranslation = request.session.data['certified-translation']
    if (CertifiedTranslation == "Yes"){
        response.redirect("/divorce2/where_you_married_2")
    } else {
        response.redirect("/divorce2/need_certified_translation")
    }
})
