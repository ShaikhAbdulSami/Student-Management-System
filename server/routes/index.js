const express = require('express');
const { homeView } = require("../controllers/indexController");

// Creating Router
const router = express.Router();

// Creating Home route
router.get('/', homeView);

module.exports = router;