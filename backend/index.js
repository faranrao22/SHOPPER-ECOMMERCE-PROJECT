const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const routes = require('./routes/index');

dotenv.config();
const app = express();
const port = process.env.PORT;

// Middleware
app.use(cors());
app.use(express.json());
app.use('/images', express.static('uploads/images'));

// API routes
app.use('/api', routes);

// Connect to MongoDB and start server
connectDB();

app.listen(port, () => {
  console.log(`🚀 Server running on http://localhost:${port}`);
});
