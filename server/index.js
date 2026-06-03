const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });

const express = require('express');
const cors = require('cors');
const { connectDB } = require('./config/db');
const authRoutes = require('./routes/auth');
const consumerRoutes = require('./routes/consumer');
const contractorRoutes = require('./routes/contractor');
const adminRoutes = require('./routes/admin');

const app = express();
const port = process.env.PORT || 5001;

app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true,
}));
app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    service: 'EchoHorn JavaScript Backend',
    status: 'running',
    database: process.env.MONGODB_URI ? 'MongoDB configured' : 'in-memory arrays active',
  });
});

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', service: 'echohorn-js-backend' });
});

app.use('/api/auth', authRoutes);
app.use('/api/consumer', consumerRoutes);
app.use('/api/contractor', contractorRoutes);
app.use('/api/core', adminRoutes);

app.use((error, req, res, next) => {
  console.error(error);
  res.status(500).json({ error: 'Server error.' });
});

connectDB().finally(() => {
  app.listen(port, () => {
    console.log(`EchoHorn JavaScript backend running on http://localhost:${port}`);
  });
});
