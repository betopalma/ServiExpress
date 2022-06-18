require('dotenv').config();
const express = require('express');
const passport = require('passport');
const { User } = require('../database/postgres');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const router = express.Router();
const bcrypt = require('bcryptjs');

const registerGoogle = new GoogleStrategy(
  {
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: '/register/oauth2/redirect/google'
  },
  async (accessToken, refreshToken, profile, cb) => {
    const [user, created] = await User.findOrCreate({
      where: {
        email: profile.emails[0].value
      },
      defaults: {
        name: profile.displayName,
        last_name: profile.name.familyName,
        email: profile.emails[0].value,
        avatar_image: profile.photos[0].value
      }
    });

    if (created) {
      cb(null, user);
    } else {
      cb(null, { message: 'User already registered' });
    }
  }
);

// force use because name is not unique
passport._strategies.registerGoogle = registerGoogle;
passport._strategies.registerGoogle.name = 'registerGoogle';

passport.serializeUser((user, cb) => cb(null, user));

passport.deserializeUser((user, cb) => cb(null, user));

router.get('/error', (req, res) => {
  if (Object.keys(req.sessionStore.sessions).length > 0) {
    res.send({ message: 'User already registered' });
  } else {
    res.send({ message: '' });
  }
});

router.get('/success', async (req, res) => {
  if (req.user) {
    return res.status(200).send(req.user);
  }
});

router.post('/logout', function (req, res) {
  req.logout();
  res.send({
    message: 'Logged out'
  });
});

router.put('/confirm', async (req, res) => {
  const { confirmPassword, id } = req.body;
  const user = await User.findByPk(id);

  if (user) {
    await user.update({
      password: bcrypt.hashSync(confirmPassword, 10)
    });
    return res.redirect('http://localhost:3000/login');
  }
});

router.get(
  '/google',
  passport.authenticate('registerGoogle', { scope: ['profile', 'email'] })
);

router.get(
  '/oauth2/redirect/google',
  passport.authenticate('registerGoogle', {
    failureRedirect: '/register/error'
  }),
  (req, res) => {
    if (req.user.message) {
      res.redirect('http://localhost:3000/login');
    } else {
      res.redirect('http://localhost:3000/sendEmail/confirm');
    }
  }
);

module.exports = router;