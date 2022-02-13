const router = require('express').Router();
let Order = require('../models/order.model');


router.route('/').get((req, res)  => {
    Order.find()
        .then(orders => res.json(orders))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Order.findById(req.params.id)
    .then(order => res.json(order))
    .catch(err => res.status(400).json('Error: ' + err));
})


router.route('/add').post((req, res) => {
    const orderItems = req.body.orderItems;
    const shippingAddress = req.body.shippingAddress;
    const itemsPrice = Number(req.body.itemsPrice);
    const shippingPrice = Number(req.body.shippingPrice);
    const totalPrice = Number(req.body.totalPrice);

    const newOrder = new Order({
        orderItems,
        shippingAddress,
        itemsPrice,
        shippingPrice,
        totalPrice,
    })

    newOrder.save()
    .then(() => res.json('Order Added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Order.findByIdAndDelete(req.params.id)
    .then(() => res.json('Order deleted'))
    .catch(err => res.status(400).json('Error: ' + err));
})

router.route('/update/:id').post((req, res) => {
    Order.findById(req.params.id)
    .then(order => {
        order.orderItems = req.body.orderItems;
        order.shippingAddress = req.body.shippingAddress;
        order.itemsPrice = req.body.itemsPrice;
        order.shippingPrice = req.body.shippingPrice;
        order.totalPrice = req.body.totalPrice;
    })

    order.save()
    .then(() => res.json('Order updated'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;