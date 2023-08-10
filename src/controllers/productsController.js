const { readJSON, writeJSON } = require("../data");
const Product = require("../data/product");

module.exports = {
  detail: (req, res) => {
    const products = readJSON("products.json");

    const id = req.params.id;
    const product = products.find((product) => product.id === id);

    return res.render("productDetail", {
      product,
    });
  },
  add: (req, res) => {
    const brands = readJSON("brands.json");

    return res.render("productAdd", {
      brands: brands.sort((a, b) =>
        a.name > b.name ? 1 : a.name < b.name ? -1 : 0
      ),
    });
  },
  create: (req, res) => {
    const products = readJSON("products.json");

    const { name, brand, price, discount, description } = req.body;

    let newProduct = new Product(req.body);
    products.push(newProduct);

    writeJSON(products, "products.json");

    return res.redirect("/admin");
  },
  edit: (req, res) => {
    const products = readJSON("products.json");
    const brands = readJSON("brands.json");

    const id = req.params.id;
    const product = products.find((product) => product.id === id);

    return res.render("productEdit", {
      ...product,
      brands: brands.sort((a, b) =>
        a.name > b.name ? 1 : a.name < b.name ? -1 : 0
      ),
    });
  },
  update: (req, res) => {
    const products = readJSON("products.json");
    const id = req.params.id;
    const product = products.find((product) => product.id === id);
    if (product) {
      Object.assign(product, req.body);
      writeJSON(products, "products.json");
    }
    return res.redirect("/admin");
  },
};
