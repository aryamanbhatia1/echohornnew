const express = require('express');
const bcrypt = require('bcryptjs');
const { users, generateId } = require('../data/memoryStore');
const { isMongoConnected } = require('../config/db');
const User = require('../models/User');
const { protect, signToken } = require('../middleware/auth');
const { validateUserRegistration } = require('../utils/validation');
const { appendUser } = require('../utils/excelLogger');

const router = express.Router();

function publicUser(user) {
  return {
    id: String(user._id || user.id),
    first_name: user.first_name,
    last_name: user.last_name,
    email: user.email,
    phone_number: user.phone_number,
    user_type: user.user_type,
    company_name: user.company_name || '',
  };
}

async function register(req, res, userType) {
  try {
    validateUserRegistration(req.body);
    const email = String(req.body.email).trim().toLowerCase();

    if (isMongoConnected()) {
      const existing = await User.findOne({ email });
      if (existing) return res.status(400).json({ error: 'Email already registered.' });
      const user = await User.create({
        ...req.body,
        email,
        user_type: userType,
        password: await bcrypt.hash(req.body.password, 10),
        profile: {
          region: req.body.region || '',
          address: req.body.address || '',
          preferred_routes: req.body.preferred_routes || [],
          documents_verified: false,
        },
        activity_log: [{ event: 'account_created', source: 'api' }],
      });
      appendUser(user);
      return res.status(201).json({ user: publicUser(user), message: 'Account created.' });
    }

    if (users.some((user) => user.email === email)) {
      return res.status(400).json({ error: 'Email already registered.' });
    }

    const user = {
      id: generateId('user'),
      ...req.body,
      email,
      user_type: userType,
      profile: {
        region: req.body.region || '',
        address: req.body.address || '',
        preferred_routes: req.body.preferred_routes || [],
        documents_verified: false,
      },
      activity_log: [{ event: 'account_created', source: 'api' }],
    };
    users.push(user);
    appendUser(user);
    return res.status(201).json({ user: publicUser(user), message: 'Account created in memory database.' });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
}

router.post('/register/consumer', (req, res) => register(req, res, 'consumer'));
router.post('/register/consumer/', (req, res) => register(req, res, 'consumer'));
router.post('/register/contractor', (req, res) => register(req, res, 'contractor'));
router.post('/register/contractor/', (req, res) => register(req, res, 'contractor'));

router.post('/login', async (req, res) => {
  try {
    const email = String(req.body.email || '').trim().toLowerCase();
    const password = String(req.body.password || '');
    let user;
    let passwordOk;

    if (isMongoConnected()) {
      user = await User.findOne({ email });
      passwordOk = user ? await bcrypt.compare(password, user.password) : false;
    } else {
      user = users.find((item) => item.email === email);
      passwordOk = user?.password === password;
    }

    if (!user || !passwordOk) {
      return res.status(401).json({ error: 'Invalid email or password.' });
    }

    const access = signToken(user);
    return res.json({ access, refresh: access });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
});

router.get('/me', protect, (req, res) => res.json(req.user));
router.get('/me/', protect, (req, res) => res.json(req.user));

module.exports = router;
