const express = require('express')
const router = express.Router()
const knex = require('../db/knex')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt-nodejs')
const verifyToken = require('../lib/util_methods').verifyToken
const errHandler = require('../lib/util_methods').errHandler

router.post('/login', function(req, res) {
  // Find the user by email
  knex('users')
    .where('email', req.body.email)
    .then(result => {
      let user = result[0];
      // If user can't be found, send 403 (Forbidden)
      if(!user) {
        res.sendStatus(403)
      } else {
        // Otherwise, respond with signed token and user object
        jwt.sign({ user }, 'doobiedoo', {expiresIn: '2d'}, (err, token) => {
          // Remove password from user object
          let { password, ...newUser } = user
          console.log('user', newUser);
          res.json({ token, user: newUser, authed: true })
        })
      }
    })
    .catch(err => res.status(400).send('Received something unexpected. Please try again later.'))
});

router.post('/signup', function(req, res) {
  let { name, role_id, school_id, email, password } = req.body

  // Hash the incoming password
  bcrypt.hash(password, null, null, function(err, hash) {

    // Build new user to be inserted into the database
    let newUser = {
      name,
      role_id,
      school_id,
      email,
      password: hash
    }

    // Insert new user into database
    knex('users')
      .insert(newUser, '*')
      .then(user => res.json(user[0]))
      .catch(err => errHandler(err, res))
  });
});

router.get('/secret', verifyToken, (req, res) => {
  jwt.verify(req.token, 'doobiedoo', (err, authData) => {
    if(err) {
      res.sendStatus(403)
    } else {
      res.json({
        message: 'secret stuff',
        authData
      })
    }
  })
})

module.exports = router
