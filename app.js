const express = require("express");
const morgan = require("morgan");
const mainRouter = require("./routes/mainRouter");

const PORT = 3001;
const app = express();
// const indexRouter = require("/")

app.use(morgan("dev"));
app.use("/", mainRouter);
app.listen(PORT, () => {});

module.exports = app;
