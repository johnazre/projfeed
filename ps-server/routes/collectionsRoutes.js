const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

/* GET home page. */
router.get('/', function (req, res, next) {
  knex('collections').select().orderBy('id', 'asc').then(collections => res.json(collections))
});

router.get('/:id', function (req, res) {
  knex('collections').select().where('id', req.params.id).then(collection => res.json(collection))
});

router.post('/', function (req, res) {
  knex('collections')
    .insert(req.body, '*')
    .then(newCollection => res.json(newCollection));
});

router.patch('/:id', function (req, res) {
  knex('collections')
    .update(req.body)
    .where('id', req.params.id)
    .returning('*')
    .then(updatedCollection => res.json(updatedCollection));
});

router.delete('/:id', function (req, res) {
  knex('collections')
    .del()
    .where('id', req.params.id)
    .then(removedCollection => removedCollection);
});


module.exports = router;
