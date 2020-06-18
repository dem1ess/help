const mongoose =require('mongoose')
const config = require('../config/db')
const express = require('express')
const router = express.Router()


const productSchema = mongoose.Schema({
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
 
let Product = module.exports = mongoose.model('Product', productSchema);

// const products = new Product [
//     {id: 1, name: "Каліфорнія", price:125, description: "Опис"},
//     {id: 2, name: "Філадельфія", price: 115, description: "Опис"},
//     {id: 3, name: "Каліфорнія з крабовим м'ясом", price: 100, description: "Опис"}
// ];
let kali = new Product ({
    id: 1,
    name: "Калифорния",
    price: 150,
    description: "Опис"
})
let fila = new Product ({
    id: 1,
    name: "Калифорния",
    price: 150,
    description: "Опис"
})
let filalos = new Product ({
    id: 1,
    name: "Калифорния",
    price: 150,
    description: "Опис"
})


kali.save(function (err) {
    if (err) throw err;
    console.log('save');
    
})
fila.save(function (err) {
    if (err) throw err;
    console.log('save');
    
})
filalos.save(function (err) {
    if (err) throw err;
    console.log('save');
    
})


module.exports.getPrudctById = function (id, callback) {
product.findById(id, callback)
}



// module.exports.addProduct = function (newProduct, callback) {
//     newProduct.save(callback);
//            // newUser.save(callback)
//    }
