const { readJSON, writeJSON } = require("../../data");
const Product = require("../../data");

module.exports = (req, res) => {
  const products = readJSON("products.json");

  const { name, brand, price, discount, description } = req.body;

  let newProduct = new Product(req.body);
  products.push(newProduct);

  writeJSON(products, "products.json");

  return res.redirect("/admin");
};
