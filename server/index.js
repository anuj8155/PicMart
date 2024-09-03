const express = require("express");
const app = express();
const dotenv = require("dotenv");
//imoprt this route for other folder---->
const authRote = require("./routes/authRoute");
const { connectDb } = require("./connection");


dotenv.config();

const port = process.env.PORT || 5000;
app.get("/", (req, res) => {
  res.send("Hello World!");
});

//middleware for using routes---->
connectDb();
app.use(express.json());

app.use("/api", authRote);

// imoprting routes dynamically --->


app.listen(port, function () {
  console.log(`Server is running on port ${port}`);
});

