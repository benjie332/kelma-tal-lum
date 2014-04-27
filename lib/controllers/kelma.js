'use strict';

var mongoose = require('mongoose'),
    moment = require('moment'),
    Kelma = mongoose.model('Kelma');

exports.kelmaTalLum = function(req, res) {
    var start = moment(req.query.data).startOf('day').toDate();
    var end = moment(req.query.data).endOf('day').toDate();
    Kelma.findOne({data : {$lt: end, $gt: start}}).exec(function (err, kliem) {
        if (!err) {
            return res.json(kliem);
        } else {
            return res.send(err);
        }
    });
};

exports.wahda = function(req, res) {
    return Kelma.findOne({_id: req.params.kelma}, function (err, kelma) {
        if (!err) {
            return res.json(kelma);
        } else {
            return res.send(err);
        }
    });
};

exports.kollha = function(req, res) {
    return Kelma.find({}, function (err, kliem) {
        if (!err) {
            return res.json(kliem);
        } else {
            return res.send(err);
        }
    });
};

exports.suggerimenti = function(req, res) {
    Kelma.find({}).where('data').equals(null).exec(function (err, kliem) {
        if (!err) {
            return res.json(kliem);
        } else {
            return res.send(err);
        }
    });
};

exports.irranga = function(req, res) {
    Kelma.findById(req.params.kelma, function (err, kelma){
        kelma.ezempju = req.body.ezempju;
        kelma.data = req.body.data;
        kelma.save(function(err){
            if (err) {
                console.log(err);
                res.send(500);
            } else {
                res.send(200);
            }
        });
    });
};

exports.kontribwixxi = function(req, res) {
    new Kelma({_id: req.body.kelma, ezempju: req.body.ezempju, data: req.body.data}).save();
    res.send(200);
};