
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const Film=require('./models/films.models.js')
const cors = require('cors');

app.use(cors())
app.use(express.json())
app.get('/api/films', async(req, res) => {
  try{
    const films =await Film.find({})
    res.status(200).json(films)

}
catch(error){
    res.status(500).json({message:error.message})
}
})

app.post('/submit', async (req, res) => {
  try {
    const newFilm = await Film.create(req.body);
    const savedFilm = await newFilm.save();
    res.status(201).json(savedFilm);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
})
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ Connected to MongoDB Atlas");
  })
  .catch((err) => {
    console.error("❌ MongoDB connection failed:", err);
  });

app.listen(3000, () => {
  console.log("🚀 Server running on http://localhost:3000");
});