const express = require("express");
const path = require("path");

const app = express();

// IMPORTANT: gamitin yung port na ibibigay ng platform
const PORT = process.env.PORT;

app.use(express.static(path.join(__dirname, "public")));

app.listen(PORT, "0.0.0.0", () => {
  console.log("Server running on port " + PORT);
});
