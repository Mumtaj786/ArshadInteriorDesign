var express = require('express');
const mongoose = require('mongoose');
var router = express.Router();


const dbURI = 'mongodb://0.0.0.0:27017/customer'; // Replace 'mydatabase' with your database name
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log('MongoDB connection error: ', err));

  // Define a schema
const customerSchema = new mongoose.Schema({
  cName: String,
  cEmail: String,
  cPhone: Number,
  notification: Boolean,
  pincode: Number
});

// Define a model
const customer = mongoose.model('customerInfo', customerSchema);

// POST route to add a new item to the collection
router.post('/customer/customerInfo', async (req, res) => {
  const newCustomer = new customer({
      cName: req.body.name,
      cEmail: req.body.email,
      cPhone: req.body.phone,
      notification: req.body.checkBox,
      pincode: req.body.pincode
  });

  //Collection.insertOne(newCustomer);

  //  res.send(newCustomer);



  try {
      const savedCustomer = await newCustomer.save();
      res.status(201).json(savedCustomer);
  } catch (err) {
      res.status(400).json({ message: err.message });
  }
 });


module.exports = router;
