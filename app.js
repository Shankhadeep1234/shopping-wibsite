const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const adminRouter = require("./routes/admin");
const shopRouter = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));

app.use(adminRouter);
app.use(shopRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is stared on port ${port}`);
});
