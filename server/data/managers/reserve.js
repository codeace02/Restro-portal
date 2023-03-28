const { Reservation } = require('../models/reservation')


/* For creating an reservation*/
module.exports.createReservation = (searchQuery) => {
    return new Promise((resolve, reject) => {
      Reservation.create(searchQuery,(err,profile) => {
        if(err) {
          reject(err)
        }
        resolve(profile)
      });
    });
  }