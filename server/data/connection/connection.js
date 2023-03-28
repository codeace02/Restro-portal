const mongoose = require('mongoose');
mongoose.set({strictQuery : true});
mongoose.connect(process.env.CONNECTION_STRING, {useNewUrlParser: true, useUnifiedTopology: true,})
  .then(connection => {
    console.log('Database successfully Connected.....');
  })
  .catch(error => {
    console.log(error.message);
  });

module.exports = mongoose;

