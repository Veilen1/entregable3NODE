const express = require('express');
const app = express;


app.get("/productos", (req, res) =>{

})

app.get("/productoRandom", (req, res) =>{
    let obj = {"title":"Mouse logitech G PRO MAX","price":789,"thumbnail":"URL3","id":1}
    res.send(obj)
})