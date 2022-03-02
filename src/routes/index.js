const express = require("express")
var router = express()

// controllers

var article_controller = require('../controllers/article');
var login_controller = require('../controllers/login');
var order_controller = require('../controllers/order');


// Articles routes
router.get('/articles', article_controller.get_list)
router.delete('/articles/:id', article_controller.delete)
// router.put('/articles/<id>', article_controller.get_list)
router.post('/article/publish', article_controller.create)

// Order
router.get('/orders', order_controller.get)
router.post('/order/publish', order_controller.create)

router.post('/register', login_controller.register)
router.post('/login', login_controller.login)

// Users
router.get('/users', login_controller.get_users)
router.delete('/user', login_controller.delete_user)

module.exports = router;