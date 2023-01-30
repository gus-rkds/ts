import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

import connectDB from './mongodb/connect.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb' }));

app.get('/', async (req, res) => {
  res.status(200).json({
    message: 'Hello! this works',
  });
});

const startServer = async () => {
  try {
    connectDB(process.env.MONGODB_URI);
    app.listen(8000, () => console.log('Server started on port 8000'));
  } catch (error) {
    console.log(error);
  }
};

startServer();
