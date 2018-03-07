const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const ejsMate = require("ejs-mate");

const cookieParser = require('cookie-parser');
const session = require('express-session');


const validation = require("./routs/registration");
const login = require("./routs/login");
const user = require("./routs/resault");
const error = require('./routs/error');
const facebook = require('./routs/facebook');


app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
    extended: true
}));
app.use(express.static(`${__dirname}/public`));
app.use(cookieParser());
app.use(session({
    secret: "mySecretWord",
    key: "SESSIONID",
    resave: true,
    saveUninitialized: true,
    cookie: {
        path: "/",
        maxAge: null,
        httpOnly: true
    }
}));

app.set("views", `${__dirname}/views`);
app.set('view engine', 'ejs');
app.engine('ejs', ejsMate);

app.use("/", validation);
app.use("/login", login);
app.use('/facebook/login', facebook);
app.use("/users", user);
app.use("/error", error);

// app.use(( req, res, next) => {
//   let err = new Error("404 Not Found");
//   res.status = 404;
//   next(err)
// });


app.listen(8080, () => {
  console.log("Server running 8080...");
})
