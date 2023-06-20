const express = require('express');
const { validateUsername, validatePassword } = require('../validations/validate');
const middleware = require('../middleware/middleware');
const secretKey = require('../config');

const router = express.Router();
let user = [];
router.post('/', middleware.authenticationToken(secretKey), (req, res) => {
  const { username, password } = req.body;

  const usernameError = validateUsername(username);
  const passwordError = validatePassword(password);

  if (usernameError || passwordError) {
    return res.status(400).json({
      error: 'Validation Failed',
      usernameError,
      passwordError,
    });
  }

  user.push({username, password});

  res.json({ message: 'User added successfully' });
});

module.exports = router;