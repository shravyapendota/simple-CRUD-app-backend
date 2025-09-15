const express = require('express');
const app = express();
const mongoose = require("mongoose");
const Product  = require("./models/product.model.js")

//middleware config
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//Routing
app.use('/api/products', require('./Routes/product.route.js'));


app.get('/', (req,res)=>{
    res.send('server updated');
});

//datebase connection
mongoose.connect("mongodb+srv://shravya:shrav@backenddb.rhjfhwe.mongodb.net/Node-API?retryWrites=true&w=majority&appName=backenddb")
.then(()=>{
    console.log("connected to the database");
    app.listen(3000,()=>{
        console.log("server is running on port 3000");
    });
})
.catch(()=>{
    console.log("connection failed");
});


