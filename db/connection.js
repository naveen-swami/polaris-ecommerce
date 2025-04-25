const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://admin:yZ4eeFH4FpWKK0GW@my-ecom.ujmjzup.mongodb.net/ecom')
  .then(() => console.log('Connected! to Database'));