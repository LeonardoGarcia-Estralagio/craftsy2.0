const {readJSON} = require('../data')

module.exports = {
    index : (req,res) => {
        const tutorials = readJSON('tutorials.json')
        const products = readJSON('products.json')
       
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