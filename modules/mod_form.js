/**
 * Created by rain on 2016/12/29.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;
mongoose.Promise = require('bluebird');

var FormSchema = new Schema({
    id        :     {type: ObjectId, index: true},
    subject     :     {type: String},
    tel     :     {type: String},
    message   :     {type: String},
    dateRange     :     [Date],
    createdate:     {type: Date, default: Date.now },
    updatedate:     {type: Date, default: Date.now }

});

mongoose.connect('mongodb://localhost/time-magic');

var Form = mongoose.model('Form', FormSchema);

function model(data) {
    return new Form(data);
}

exports.createForm = function (data, callback) {
    var newform = model(data);
    newform.save(function (err, result) {
        callback(err, result)
    });
};

exports.getFormInfo = function (eventId, callback) {
    Form.findById(eventId, function (err, result) {
        callback(err, result)
    });
};

