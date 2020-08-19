import express from "express";
import bodyParser from "body-parser";
import { listings } from "./listings";
const app = express();
const port: number = 9000;

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("<h1>Hello from express!!!!</h1>");
});

app.get("/listings", (_req, res) => {
  return res.send(listings);
});

app.post("/delete-listing", (req, res) => {
  const id: string = req.body.id;

  for (let i = 0; i < listings.length; i++) {
    if (listings[i].id === id) {
      return res.send(listings.splice(i, 1)[0]);
    }
  }

  return res.send("failed to deleted listing");
});

app.listen(port);

console.log(`App is running on port ${port}`);
