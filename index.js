

const express = require('express'); // import express library
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const keys = require('./config/keys');
require('./models/User');
require('./services/passport');

 //require('./routes/authRoutes');

//const passport = require('passport');
//const GoogleStrategy = require('passport-google-oauth20').Strategy;
//const keys = require('./config/keys');

mongoose.connect(keys.mongoURI);

const app = express(); // running express app


app.use(bodyParser.json());
app.use(cookieSession({maxAge: 30 * 24 * 60 * 60 * 1000,
keys: [keys.cookieKey]}));

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes') (app);
require('./routes/billingRoutes') (app);
/*passport.use(new GoogleStrategy({
  clientID: keys.googleClientID,
  clientSecret: keys.googleClientSecret,
  callbackURL:'/auth/google/callback'
}, (accessToken, refreshToken, profile, done) => {
    console.log('access token', accessToken);
    console.log('refresh token', refreshToken);
    console.log('profile:', profile);
}));*/

/*app.get('/auth/google',(req,res)=>{
   res.send({hi:'there'}); // a route handler
});*/

/*app.get('/auth/google', passport.authenticate('google', {
   scope: ['profile','email'] // app can access profile and email of the user
}));

app.get('/auth/google/callback', passport.authenticate('google'));*/

app.listen(5000); // listen to port 5000


