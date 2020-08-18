import express from "express";
const app = express();
const port: number = 9000;

app.get("/", (req, res) => {
  res.send("<h1>Hello from express!!!!</h1>");
});

app.listen(port);

console.log(`App is running on port ${port}`);
