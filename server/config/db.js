const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost:27017/stock_Cart")
    .then(() => {
        console.log('Db Connected')
    })
    .catch((err) => {
        console.log("Db Error", err)
    })


