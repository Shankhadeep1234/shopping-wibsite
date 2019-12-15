const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const errorControllers = require("./controllers/error");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use(errorControllers.get404Page);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`The server is started on port ${port}`);
});
