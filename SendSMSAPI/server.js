require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/contact", require("./routes/contact"));

app.listen(process.env.PORT, () => {
  console.log(`Server running on ${process.env.PORT}`);
});