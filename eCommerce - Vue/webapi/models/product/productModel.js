const mongodb = require('mongoose')
const Product = require('./productSchema')

exports.addProducts = (req, res) => {

    try {
        for(current of req.body) {
            let product = new Product({
                
                _id:                new mongodb.Types.ObjectId,
                name:               current.name,
                description:        current.description,
                shortDescription:   current.shortDescription,
                image:              current.image,
                inStockAmount:      current.inStockAmount,
                price:              current.price         
    
            })
    
            product.save()
        }

        return res.status(200).json()
    }
    catch {
        return res.status(400).json()
    }
}

exports.getProducts = (req, res) => {
    Product.find()
    .then(products => {
        if (products.length > 0) {
            return res.status(200).json(products)
        } else {
            res.status(404).json([])
        }
    })
}

exports.getProductById = (req, res) => {
    Product.findOne({
        _id: req.params.id
    })
    .then(product => {
        if (product !== null) {
            return res.status(200).json(product)
        } else {
            res.status(404).json({})
        }
    })
}
