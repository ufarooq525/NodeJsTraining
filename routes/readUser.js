const express = require('express');
const middleware = require('../middleware/middleware');
const secretKey = require('../config');

const router = express.Router();
const users = [
    { id: 1, username: 'umer', password: '123456' },
    { id: 2, username: 'umer1', password: '1234567' },
  ];

router.get('/', middleware.authenticationToken(secretKey), (req, res) => {
    res.json(users);
});

router.get('/:username', middleware.authenticationToken(secretKey), (req, res)=>{
    console.log(req.params);
    const {username} = req.params;
    
    const user = users.find(user => user.username === username);
    console.log(user);
    if(user){
        res.json(user);
    }else{
        res.status(404).json({ error: 'User not found' });
    }
})

module.exports = router;