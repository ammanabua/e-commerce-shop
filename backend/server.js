const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


const uri = 'mongodb://localhost/webshop';
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
});

const usersRouter = require('./routes/users');
const ordersRouter = require('./routes/orders');
const productsRouter = require('./routes/products')


app.use('/orders', ordersRouter);
app.use('/users', usersRouter);
app.use('/products', productsRouter);



app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})