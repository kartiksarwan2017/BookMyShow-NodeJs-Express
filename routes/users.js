const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users_controller');


// http://localhost:5000/user-register
router.post("/user-register", usersController.registerUser);

module.exports = router;