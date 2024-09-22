// /* eslint-disable no-undef */
// const express = require('express');
// const mongoose = require('mongoose');
// const dotenv = require('dotenv');
// const authRoutes = require('./routes/authRoutes');
// const cors = require('cors');

// // Load environment variables
// dotenv.config();
// app.use(cors({
//   origin: 'http://localhost:5173',  // Adjust this to match your frontend URL
//   methods: ['GET', 'POST'],
//   credentials: true,
// }));
// const app = express();
// app.use(express.json());





// // Connect to MongoDB using the environment variable
// mongoose.connect(process.env.MONGO_URL)
//   .then(() => console.log('Connected to MongoDB'))
//   .catch((err) => console.error('MongoDB connection error:', err));

// app.use('/', authRoutes);

// const PORT = process.env.PORT || 3001;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });

/* eslint-disable no-undef */
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');
const cors = require('cors'); // Move this to the top

// Load environment variables
dotenv.config();

const app = express(); // Initialize app here

// CORS setup
app.use(cors({
  origin: 'http://localhost:5173',  // Adjust this to match your frontend URL
  methods: ['GET', 'POST', 'OPTIONS'],
  credentials: true,
}));

app.options('*', cors()); // Enable preflight for all routes

app.use(express.json());

// Connect to MongoDB using the environment variable
mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

app.use('/', authRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
