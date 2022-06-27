const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const PORT = 5000;
const cors = require("cors");
const expressLayouts = require("express-ejs-layouts");
require("./db/index");

const app = express();

app.use(cors());
// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

const indexRouter = require("./routes/index");
app.use("/admin", indexRouter);
const usersRouter = require("./routes/users");
app.use("/users", usersRouter);

app.use(expressLayouts);

const dashboard = require("./routes/dashboard");
app.use("/dashboard", dashboard);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

app.listen(PORT, () => {
  console.log("http://localhost:" + PORT);
});
