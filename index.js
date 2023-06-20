const express = require("express");
const app = express();
const port = 8000;
const expressLayouts = require("express-ejs-layouts");
const sassMiddleware = require("node-sass-middleware");
const db = require('./config/mongoose');

// using the sass middleware
app.use(
  sassMiddleware({
    src: "./assets/scss",
    dest: "./assets/css",
    debug: false,
    outputStyle: "extended",
    prefix: "/css",
  })
);

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.urlencoded());
app.use(express.static('./assets'));

app.set('layout extractStyles', true);
app.set('layout extractScript', true);

app.use(expressLayouts);
app.use('/', require('./routes/home.js'));

app.listen(port, function (error) {
  if (error) {
    console.log(`Error in running the server: ${error}`);
  } else {
    console.log(`Server is running on port: ${port}`);
  }
});
