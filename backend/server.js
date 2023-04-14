const express = require("express");
const cors = require("cors");

const backendServer = express();

const allowed = ["http://localhost:3000", "http://127.0.0.1:3000"];

function isAllowed(req, res) {
  let result;
  const origin = req.header("Origin");
  if (allowed.indexOf(origin) != -1) {
    result = {
      origin: true,
      optionSuccessStatus: 200,
    };
  } else {
    result = {
      origin: "Not Allowed",
    };
  }

  res(null, result);
}

backendServer.use(cors(isAllowed));

backendServer.get("/", (req, res) => {
  res.send("I am home");
});

backendServer.listen(8000, () => {
  console.log("Server is listening.....");
});
