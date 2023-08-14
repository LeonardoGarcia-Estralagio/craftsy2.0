const {readJSON} = require('../../data')

module.exports = (req,res) => {
    const products = readJSON('products.json')
    const id = req.params.id;

    const productsModify = products.filter(product => product.id === id)
    
    return res.send('remover el producto')
}