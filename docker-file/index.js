const express = require("express");
const PORT = 3000;

const app = express();

app.get("/", (request, response) => {
  response.end("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Started server on http://localhost:${PORT}`);
});
