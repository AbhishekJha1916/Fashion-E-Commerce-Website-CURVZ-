const express = require("express");
const app = express();
const port = 8000;
const expressLayouts = require("express-ejs-layouts");
const sassMiddleware = require("node-sass-middleware");
const db = require('./config/mongoose');
const session = require('express-session');
const passport = require('passport');
const passportlocal = require('./config/passport-local-strategy');
const MongoStore = require('connect-mongo');

// using the sass middleware
app.use(
  sassMiddleware({
    src: "./assets/scss",
    dest: "./assets/css",
    debug: true,
    outputStyle: "extended",
    prefix: "/css",
  })
);

app.set('layout extractStyles', true);
app.set('layout extractScript', true);

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.urlencoded());
app.use(express.static('./assets'));

app.use(expressLayouts);

app.use(session({
  name: 'curvz',
  secret: 'baburao',
  saveUninitialized: false,
  resave: false,
  cookie: {
      maxAge: (1000 * 60 * 100)
  },
  store: MongoStore.create({
      mongoUrl: "mongodb://localhost:27017/Curvz",
      autoRemove: 'disabled'
  }, function (err) { console.log(err || 'connect-mongodb setup ok'); })
}
));

app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setAuthenticatedUser);

app.use('/', require('./routes/home.js'));

app.listen(port, function (error) {
  if (error) {
    console.log(`Error in running the server: ${error}`);
  } else {
    console.log(`Server is running on port: ${port}`);
  }
});
