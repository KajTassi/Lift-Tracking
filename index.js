const express = require("express");
const app = express();
const cors = require("cors");

//middeleware
app.use(cors());
//allows us to have access to request.body
app.use(express.json());

app.listen(5000, () => {
    console.log("server has started on port 5000");
});