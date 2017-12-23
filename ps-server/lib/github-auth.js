const passport = require('passport')
const GithubStrategy = require('passport-github').Strategy

const githubLogin = new LocalStrategy(new GitHubStrategy({
    clientID: GITHUB_CLIENT_ID,
    clientSecret: GITHUB_CLIENT_SECRET,
    callbackURL: "http://127.0.0.1:3000/auth/github/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
    User.findOrCreate({ githubId: profile.id }, function (err, user) {
      return cb(err, user);
    });
  }
))
// Tell passport to use this strategy
passport.use(githubLogin)
