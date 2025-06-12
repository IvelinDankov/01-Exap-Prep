import express, { urlencoded } from "express";

const port = 5000;

const app = express();

app.use("static", express.static("src/public"));

app.use(express.urlencoded());

app.get("/", (req, res) => {
  res.send(`Welcome to Express and starting files`);
});

app.listen(port, () => console.log(`Server is listening on port ${port}...`));
