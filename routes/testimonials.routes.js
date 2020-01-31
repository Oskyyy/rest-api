const express = require('express');
const router = express.Router();
const db = require('../db');

router.route('/testimonials').get((req, res) => {
  res.json(db.testimonials);
});

router.route('/testimonials/:id').get((req, res) => {
  let newDb = db.testimonials.filter((item) => {
    return item.id == req.params.id;
  })
  res.json(newDb);
});

router.route('/testimonials/').post((req, res) => {
  const { author, text } = req.body;
  db.testimonials.push({id: (db.testimonials[db.testimonials.length -1].id +1) ,author, text});
  res.send({ message: 'OK' });
});

router.route('/testimonials/:id').put((req, res) => {
  const { author, text } = req.body;  
  const { id } = req.params;

  db.testimonials.map((item) => {
    if(item.id == id){
      item.author = author;
      item.text = text;
      return item;
    }
    return item;
  });
  res.send({ message: 'OK' }); 
});

router.route('/testimonials/:id').delete((req, res) => {
  const { id } = req.params;
  db.testimonials = db.testimonials.filter((item) => {
    return item.id != id;
  })
  res.send({ message: 'OK' });
});

module.exports = router;