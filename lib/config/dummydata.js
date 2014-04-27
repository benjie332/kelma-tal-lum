'use strict';

var mongoose = require('mongoose'),
  User = mongoose.model('User'),
  Kelma = mongoose.model('Kelma');

/**
 * Populate database with sample application data
 */

Kelma.find({}).remove(function() {
    Kelma.create({
        _id : 'testKelma',
        ezempju: 'Ezempju tajjeb',
        data : new Date()
    }, {
        _id : 'IluNaqra',
        ezempju: 'Ilu hafna',
        data : new Date(2013,11,25)
    }, {
        _id : 'Suggeriment',
        ezempju: 'Suggeriment tajjeb'
    }, function() {
        console.log('Populated test kelma');
    })
})

// Clear old users, then add a default user
User.find({}).remove(function() {
  User.create({
    provider: 'local',
    name: 'Test User',
    email: 'test@test.com',
    password: 'test'
  }, function() {
      console.log('finished populating users');
    }
  );
});
