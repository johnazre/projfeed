var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

/* GET home page. */
router.get('/', function (req, res, next) {
  knex('schools').select().then(schools => res.json(schools))
});

router.get('/:id', function (req, res) {
  knex('schools').select().where('id', req.params.id).then(school => res.json(school))
});

router.post('/', function (req, res) {
  knex('schools')
    .insert(req.body, '*')
    .then(newSchool => res.json(newSchool));
});

router.patch('/:id', function (req, res) {
  knex('schools')
    .update(req.body)
    .where('id', req.params.id)
    .returning('*')
    .then(updatedSchool => res.json(updatedSchool));
});

router.delete('/:id', function (req, res) {
  knex('schools')
    .del()
    .where('id', req.params.id)
    .then(removedSchool => removedSchool);
});


module.exports = router;
