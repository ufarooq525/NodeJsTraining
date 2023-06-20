const express = require('express');
const jwt = require('jsonwebtoken');
const { validateUsername, validatePassword } = require('../validations/validate');
const middleware = require('../middleware/middleware');
const secretKey = require('../config');
const router = express.Router();

const users = [
  { id: 1, username: 'umer', password: '123456' },
  { id: 2, username: 'umer1', password: '1234567' },
];

function generateToken(userId) {
  return jwt.sign({ userId }, secretKey, { expiresIn: '1h' });
}

router.post('/', (req, res) => {
  console.log(req.body);
  const { username, password } = req.body;

  // User Authentication From DB
  const user = users.find((user) => username === user.username && password === user.password);

  if (!user) {
    return res.status(401).json({ message: 'Invalid username or password' });
  }

  // Generate a JWT Token
  const token = generateToken(user.id);

  res.json({ token });
});

module.exports = router;
