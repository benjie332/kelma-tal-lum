'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var KelmaSchema = new Schema({
    kelma: String, //aka l-kelma
    ezempju: String,
    data: Date
});

mongoose.model('Kelma', KelmaSchema);
