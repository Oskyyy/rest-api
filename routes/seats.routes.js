const express = require('express');
const router = express.Router();
const db = require('./../db');

router.route('/seats').get((req, res) => {
  res.json(db.seats);
});

module.exports = router;