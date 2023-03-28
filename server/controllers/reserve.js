const _ = require("underscore");
const reservationManager = require("../data/managers/reserve");
const sms = require("../services/sms");

module.exports.createReservation = async (req, res) => {
  try {
    if (_.isEmpty(req.body)) {
      return res.status(404).json({ success: false, message: "Request Data missing" });
    }
    let params = req.body;
    let searchQuery = {
      phone_no: params.phone_no,
    };
    let payload = {
      first_name: params.first_name,
      last_name:  params.last_name,
      guests:     params.guests,
      phone_no:   params.phone_no,
      reservation_time: params.reservation_time,
      reservation_date:params.reservation_date,
      email : params.email,

    };

    await reservationManager.createReservation(payload);
    let smsSent = await sms.smsService(payload.phone_no);
    return res.status(200).json({ success: true, message: "reservation done " ,sms :smsSent });
  } catch (error) {
    res.status(409).json({ success: false, message: error.message });
  }
};
