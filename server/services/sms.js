const twilio = require("twilio");
require("dotenv").config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = twilio(accountSid, authToken);
module.exports.smsService = (phone) => {
  return new Promise((resolve, reject) => {
    client.messages.create({
        from: "+15075807253",
        to: phone,
        body: "You have booking for automative restro",
      }).then((message) => {
        resolve(message);
      }).catch((err) => {
        resolve(err);
      });
  });
};
