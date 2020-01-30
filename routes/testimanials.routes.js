const express = require('express');
const router = express.Router();
const db = require('./../db');

router.route('/testimonials').get((req, res) => {
  res.json(db.testimonials);
});

module.exports = router;