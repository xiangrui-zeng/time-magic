/**
 * Created by rain on 2016/12/29.
 */
var form = require('../modules/mod_form');


exports.createForm = function (req, res) {
    var formData = {};
    formData.subject = req.body.subject;
    formData.tel = req.body.tel;
    formData.message = req.body.message;
    formData.dateRange = req.body.dateRage;

    // formData.subject = "test subject";
    // formData.tel = "911";
    // formData.message = "test message";
    // formData.dateRange = [];

    //TODO check valid

    console.log(formData);

    form.createForm(formData, function (err , result) {
        if (err) {
            return res.json({status:"error", eventId:""});
        }

        return res.json({status:"success", eventId:result});
    })
}

exports.getFormInfo = function (req, res) {
    var eventId = req.params.eventId;
    if (eventId == undefined) {
        return res.json({status: "error", data:""});
    }

    form.getFormInfo(eventId, function (err , result) {
        if (err) {
            return res.json({status:"error", data:""});
        }

        return res.json({status:"success", data:result});
    })
}