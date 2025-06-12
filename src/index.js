import express from "express";

const port = 5000;

const app = express();

app.get("/", (req, res) => {
  res.send(`Welcome to Express`);
});

app.listen(port, () => console.log(`Server is listening on port ${port}`));
