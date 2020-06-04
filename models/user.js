const mongoose =require('mongoose')
const bcrypt = require('bcryptjs')
const config = require('../config/db')

const UserSchema = mongoose.Schema({
    
    name: {
        type: String
    },
    email: {
        type: String,
        required: true
    },
    login: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        default: "client"
    },
    cart: {
        type: Array,
        default: []
    }
})

const User = module.exports = mongoose.model('User', UserSchema)

module.exports.getUserByLogin = function (login, callback) {
const query = {login:login}
User.findOne(query, callback)
}

module.exports.getUserById = function (id, callback) {
User.findById(id, callback)
}

module.exports.addUser = function (newUser, callback) {
 bcrypt.genSalt(10, (err, salt) => {
     bcrypt.hash(newUser.password, salt, (err, hash) => {
         if (err) throw err
         newUser.password = hash
         newUser.save(callback)
     })
 })
    // newUser.save(callback)
}
module.exports.comparePass = function (passFromUser, userDBPass, callback) {
bcrypt.compare(passFromUser, userDBPass, (err, isMatch) => {
    if (err) throw err
    callback(null, isMatch)
})
}

module.exports.addToCart = async function (productId, callback) {
    const cart = await cart.findById(id);
    cart.board.push(10);
    await cart.save();
}