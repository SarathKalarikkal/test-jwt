import dotenv from 'dotenv';
import connectDB from './config/db.js';
import express from 'express';
import cors from 'cors';
import routes from './routes/index.js';
import cookieParser from 'cookie-parser';



dotenv.config();

// Initialize express app
const app = express();

// Middlewares
app.use(cors({
  origin: 'http://localhost:5173',  // your frontend URL
  credentials: true,                // allow cookies
}));
app.use(express.json());
app.use(cookieParser());

// Routes
app.use('/api', routes);

// Port
const PORT = process.env.PORT || 5000;

// Start server after DB connects
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
  });
});
