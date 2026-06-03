const jwt = require('jsonwebtoken');
const { users } = require('../data/memoryStore');
const { isMongoConnected } = require('../config/db');
const User = require('../models/User');

const JWT_SECRET = process.env.JWT_SECRET || 'echohorn-demo-secret';

async function protect(req, res, next) {
  try {
    const header = req.headers.authorization || '';
    const token = header.startsWith('Bearer ') ? header.slice(7) : null;

    if (!token) {
      return res.status(401).json({ error: 'Authentication token required.' });
    }

    const decoded = jwt.verify(token, JWT_SECRET);
    let user;

    if (isMongoConnected()) {
      user = await User.findById(decoded.id).lean();
    } else {
      user = users.find((item) => item.id === decoded.id);
    }

    if (!user) {
      return res.status(401).json({ error: 'User not found.' });
    }

    req.user = {
      id: String(user._id || user.id),
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email,
      user_type: user.user_type,
      company_name: user.company_name,
    };

    return next();
  } catch {
    return res.status(401).json({ error: 'Invalid authentication token.' });
  }
}

function signToken(user) {
  return jwt.sign({ id: String(user._id || user.id) }, JWT_SECRET, { expiresIn: '7d' });
}

module.exports = { protect, signToken };
