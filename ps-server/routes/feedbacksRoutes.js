var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

/* GET home page. */
router.get('/', function (req, res, next) {
  knex('feedbacks').select().then(feedbacks => res.json(feedbacks))
});

router.get('/:id', function (req, res) {
  knex('feedbacks').select().where('id', req.params.id).then(feedback => res.json(feedback))
});

router.post('/', function (req, res) {
  knex('feedbacks')
    .insert(req.body, '*')
    .then(newFeedback => res.json(newFeedback));
});

router.patch('/:id', function (req, res) {
  knex('feedbacks')
    .update(req.body)
    .where('id', req.params.id)
    .returning('*')
    .then(updatedFeedback => res.json(updatedFeedback));
});

router.delete('/:id', function (req, res) {
  knex('feedbacks')
    .del()
    .where('id', req.params.id)
    .then(removedFeedback => removedFeedback);
});


module.exports = router;
