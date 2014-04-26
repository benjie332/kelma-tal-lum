'use strict';

var mongoose = require('mongoose'),
    Kelma = mongoose.model('Kelma');

exports.kelmaTalLum = function(req, res) {
    return Kelma.findOne({data: req.body.data}, function (err, kelma) {
        if (!err) {
            return res.json(kelma);
        } else {
            return res.send(err);
        }
    });
};

exports.wahda = function(req, res) {
    return Kelma.findOne({_id: req.body.kelma}, function (err, kelma) {
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
    //TODO: find all where data = null
    return Kelma.find({data : null}, function (err, kliem) {
        if (!err) {
            return res.json(kliem);
        } else {
            return res.send(err);
        }
    });
};

exports.irranga = function(req, res) {
    Kelma.findOneAndUpdate({_id: req.body.kelma}, {ezempju: req.body.ezempju, data: req.body.data}).exec();
};

exports.gdida = function(req, res) {
    new Kelma({_id: req.body.kelma, ezempju: req.body.ezempju, data: req.body.data}).save();
};