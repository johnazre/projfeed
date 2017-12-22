module.exports = {
  errHandler,
  verifyToken
}

function errHandler(err, res) {
  switch (err.routine) {
    // If is unique
    case '_bt_check_unique':
      res.send('Email already exists, please use the "forgot password" link')
      break;

    // If incorrect data type
    case 'pg_atoi':
      res.send('data type is incorrect.')
      break;

    // Else...
    default:
      res.json(err)
      break;
  }
}

function verifyToken(req, res, next) {
  // Get auth header value
  const bearerHeader = req.headers.authorization
  // Check if bearer is undefined
  if(typeof bearerHeader !== 'undefined') {
    // Split at the space
    const bearer = bearerHeader.split(' ')
    // Get token from array
    const bearerToken = bearer[1]
    // Set the token
    req.token = bearerToken
    // next middleware
    next()
  } else {
    // Forbidden
    res.sendStatus(403)
  }

}
