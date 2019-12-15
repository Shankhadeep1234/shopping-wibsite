const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "pug"); //to implement the view engine
app.set("views", "views"); //to explicitly tell express where to implement the view engine

const adminData = require("./routes/admin");
const shopRouter = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminData.routes);
app.use(shopRouter);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "./", "views", "404.html"));
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is stared on port ${port}`);
});
