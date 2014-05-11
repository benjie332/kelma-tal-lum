'use strict';

var mongoose = require('mongoose'),
    moment = require('moment'),
    Kelma = mongoose.model('Kelma');

exports.kollha = function(req, res) {
    var query;
    console.log(req.query);
    if (req.query.data) {
        var start = moment(req.query.data).startOf('day').toDate();
        var end = moment(req.query.data).endOf('day').toDate();
        query = Kelma.findOne({data : {$lt: end, $gt: start}})
    } else if (req.query.suggerimenti) {
        query =  Kelma.find({}).where('data').equals(null);
    } else {
        query = Kelma.findOne({});
    }
    query.exec(function (err, kliem) {
        if (!err) {
            return res.json(kliem);
        } else {
            return res.send(err);
        }
    });
};

exports.wahda = function(req, res) {
    return Kelma.findOne({_id: req.params.id}, function (err, kelma) {
        if (!err) {
            return res.json(kelma);
        } else {
            return res.send(err);
        }
    });
};

exports.irranga = function(req, res) {
    Kelma.findById(req.params.id, function (err, kelma){
        kelma.kelma = req.body.kelma;
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
    new Kelma({kelma: req.body.kelma, ezempju: req.body.ezempju, data: req.body.data}).save();
    res.send(200);
};