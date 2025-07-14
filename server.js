const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());


mongoose.connect('mongodb://localhost:27017/enquiryFormDB')
.then(() => console.log("MongoDB connected"))
  .catch(err => console.error("MongoDB connection error:", err));


const enquirySchema = new mongoose.Schema({
  name: String,
  email: String,
  contactNumber: String,
  gender: String,
  howDidYouHear: String,
  codingExperience: String,
});

const Enquiry = mongoose.model('Enquiry', enquirySchema);

const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
});

const Contact = mongoose.model('Contact', contactSchema);

app.post('/api/enquiry', async (req, res) => {
  try {
    const enquiry = new Enquiry({
      name: req.body.name,
      email: req.body.email,
      contactNumber: req.body.contactNumber,
      gender: req.body.gender,
      howDidYouHear: req.body.howDidYouHear,
      codingExperience: req.body.codingExperience
    });
    await enquiry.save();
    res.status(200).send("Enquiry saved");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error saving enquiry");
  }
});


app.post('/api/contact', async (req, res) => {
  try {
    const contact = new Contact({
      name: req.body.name,
      email: req.body.email,
      message: req.body.message
    });
    await contact.save();
    res.status(200).send("Contact message saved");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error saving contact message");
  }
});


app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
