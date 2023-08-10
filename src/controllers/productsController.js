const { writeJSON, readJSON } = require("../data");
const Product = require('../data/products')

module.exports = {
  detail: (req, res) => {
    const id = req.params.id;
    const product = products.find((product) => product.id === +id);

    return res.render("ProductDetail", {
      product,
    });
  },
  add: (req, res) => {
    return res.render("productAdd", {
      brands: brands.sort((a, b) =>
        a.name > b.name ? 1 : a.name < b.name ? -1 : 0
      ),
    });
  },
  create: (req, res) => {

    const products =readJSON('products,json');

    let newProduct = new Product(...req.body);
    
    products.push(newProduct);

    writeJSON(products,'products.json')

    return res.redirect('/admin');
  },
  edit: (req, res) => {
    
    const products =readJSON('products,json');


    return res.render("productEdit");
  },
};
