const express = require("express");
const app = express();
const cors = require("cors");
const corseOptions = {
  origin: ["http://localhost:5173"],
};

app.use(cors(corseOptions));

app.get("/api", (req, res) => {
  res.json({
    fruits: ["banana", "apple", "cherry", "strawberry", "mellon", "blueberry"],
  });
});

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
