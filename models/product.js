const mongoose =require('mongoose')
const config = require('../config/db')
var products = [
    {id = 1, name = "Каліфорнія", price = 125, description = "Опис"},
    {id = 2, name = "Філадельфія", price = 115, description = "Опис"},
    {id = 3, name = "Каліфорнія з крабовим м'ясом", price = 100, description = "Опис"}
]
const ProductSchema = mongoose.Schema({
    id: {
        type: Number
    },
    name: {
        type: String,
    },
    price: {
        type: Number,
    },
    description: {
        type: String,
    },
    category: {
        type: String,
    }

})

const Product = module.exports = mongoose.model('Product', ProductsSchema)


module.exports.getPrudctById = function (id, callback) {
Products.findById(id, callback)
}

module.exports.addProduct = function (newProduct, callback) {
    
           // newUser.save(callback)
   }
