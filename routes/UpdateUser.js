const express = require('express');
const { validatePassword } = require('../validations/validate');
const middleware = require('../middleware/middleware');
const secretKey = require('../config');

const router = express.Router();

// Dummy data to simulate a database
const users = [
    { id: 1, username: 'umer', password: '123456' },
    { id: 2, username: 'umer1', password: '1234567' },
  ];

// Update a user
router.put('/:username', middleware.authenticationToken(secretKey), (req, res) => {
  const { username } = req.params;
  const { password } = req.body;

  const user = users.find(user => user.username === username);

  if (user) {
    user.password = password;
    res.json({ message: 'User updated successfully' });
  } else {
    res.status(404).json({ error: 'User not found' });
  }
});

module.exports = router;
