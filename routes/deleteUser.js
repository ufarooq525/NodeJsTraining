const express = require('express');
const middleware = require('../middleware/middleware');
const secretKey = require('../config');

const router = express.Router();

// Dummy data to simulate a database
const users = [
    { id: 1, username: 'umer', password: '123456' },
    { id: 2, username: 'umer1', password: '1234567' },
  ];

// Delete a user
router.delete('/:username', middleware.authenticationToken(secretKey), (req, res) => {
  const { username } = req.params;

  const index = users.findIndex(user => user.username === username);

  if (index !== -1) {
    users.splice(index, 1);
    res.json({ message: 'User deleted successfully' });
  } else {
    res.status(404).json({ error: 'User not found' });
  }
});

module.exports = router;
