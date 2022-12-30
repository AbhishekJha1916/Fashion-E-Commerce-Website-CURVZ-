const express = require("express");
const app = express();
const port = 8000;
const expressLayouts = require("express-ejs-layouts");

// use assets directory for static files via middleware
app.use(express.static("./assets"));

// use express layouts via middleware
app.use(expressLayouts);
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

// use express router
app.use("/", require("./routes/home.js"));

// use ejs as the view engine
app.set('view engine','ejs');
app.set('views','./views');

app.listen(port, function (error) {
  if (error) {
    console.log(`Error in running the server: ${error}`);
  } else {
    console.log(`Server is running on port: ${port}`);
  }
});
