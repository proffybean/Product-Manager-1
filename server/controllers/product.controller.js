const ProductModel = require('../models/product.model')

module.exports = {
    findAllProducts: (req,res) => {
        console.log('inside findAllProducts')
    
        ProductModel.find({})
            .then( (ProductObj) => {
                console.log(ProductObj)
                res.json(ProductObj)
            })
            .catch( (err) => {
                console.log(`error: ${err}`)
                res.status(500).send(err)
            })
    },

    createProduct: (req,res) => {
        console.log('inside createProduct')
        console.log(req.body)
    
        ProductModel.create(req.body)
            .then( (ProductObj) => {
                console.log('Great Success! Product written')
                res.json(ProductObj)
            })
            .catch( (err) => {
                console.log(`error: ${err}`)
                res.status(500).json(err)
            })
    },

    findProductById: (req,res) => {
        console.log('inside findProductById')
    
        ProductModel.findOne({_id:req.params._id})
            .then( (productObj) => {
                console.log(productObj)
                return res.json(productObj)
            })
            .catch( (err) => {
                console.log(`err: ${err}`)
                return res.status(500).send(err)
            })
    },

    updateProduct: (req, res) => {
        ProductModel.findOneAndUpdate({_id:req.params._id},
            req.body,
            {new:true, runValidators:true}
            )
            .then(updatedProduct => {
                console.log('updated Product: ' + updatedProduct)
                res.json(updatedProduct)
            })
            .catch( (err) => {
                console.log(`error: ${err}`)
                return res.status(500).send(err)
            })
    },

    deleteProduct: (req,res) => {
        console.log('inside deleteProduct')
        //console.log(req)
        console.log(req.params)
    
        ProductModel.deleteOne({_id:req.params._id})
            .then( deletedProduct => {
                console.log('Great Success! Product deleted')
                console.log(deletedProduct)
                return res.json(deletedProduct)
            })
            .catch( (err) => {
                console.log(`error: ${err}`)
                return res.status(500).send(err)
            })
    }


}