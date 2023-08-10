const { readJSON, writeJSON } = require("../../data");


module.exports = (req, res) => {
  const products = readJSON("products.json");

  const id = req.params.id;
  const product = products.find((product) => product.id === id);
  if (product.id === id) {
    Object.assign(product, req.body);
    writeJSON(products, "products.json");
  }
  return res.redirect("/admin");
};
