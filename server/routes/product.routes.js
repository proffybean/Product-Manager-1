const ProductController = require('../controllers/product.controller')

module.exports= (app) => {
    app.get('/api/ping', (req, res) => { res.json('ping!')})

    app.get('/api/products', ProductController.findAllProducts)

    app.post('/api/products', ProductController.createProduct)

    app.get('/api/products/:_id', ProductController.findProductById)

    app.delete('/api/products/:_id', ProductController.deleteProduct)

    app.put('/api/products/:_id', ProductController.updateProduct)
}