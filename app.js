const express = require('express');
const jwt = require('jsonwebtoken');
const middleware = require('./middleware/middleware');
const loginRouter = require('./routes/login');
const addUserRouter = require('./routes/addUser');
const readUserRouter = require('./routes/readUser');
const updateUserRouter = require('./routes/UpdateUser');
const deleteUserRouter = require('./routes/deleteUser');


const app = express();
app.use(express.json());

app.use('/login', loginRouter);
app.use('/', readUserRouter);
app.use('/add', addUserRouter);
app.use('/delete', deleteUserRouter);
app.use('/update', updateUserRouter);

// Protected route
app.get('/protected', middleware.authenticationToken, (req, res) => {
  res.json({ message: 'This is a protected route' });
});

// Public route
app.get('/public', (req, res) => {
  res.json({ message: 'This is a public route' });
});

// Start the server
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
