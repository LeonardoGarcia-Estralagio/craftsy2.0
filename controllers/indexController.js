const tutorials = require('../data/tutorials.json');
const products = require('../data/products.json');

module.exports = {
    index : (req,res) => {
        return res.render('index', {
            tutorials,
            products : products.filter(product => product.discount > 0)
        })
    },
    admin : (req,res) => {
        return res.render('admin', {
            products,
            tutorials
        })
    }
}