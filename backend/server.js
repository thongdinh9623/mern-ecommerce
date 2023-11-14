import express from "express";
import dotenv from "dotenv";
dotenv.config();
import products from "./data/products.js";
const port = process.env.PORT || 5000;

const app = express();

app.get("/", (req, res) => {
  res.send("Response from API");
});

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/products/:id", (req, res) => {
  const productId = req.params.id;
  console.log(productId);
  const product = products.find((p) => p._id === productId);

  res.json(product);
});

app.listen(port, () => console.log(`Server is listening on port ${port}`));
