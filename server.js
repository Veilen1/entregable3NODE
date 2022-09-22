const express = require('express');
const random = require('random');
const app = express()
const Contenedor = require('./classProd');

let instContent = new Contenedor("./productos.txt")
let arrObj = instContent.getAll()

async function itemRandom() {
    const cantObj = await arrObj.then(val => val.length)
    const nRandom = random.int(1, cantObj)
    let arrObj2 = await arrObj.then(val => val.find(e => e.id === nRandom))
    return arrObj2
}

app.get("/productos", (req, res) =>{
    arrObj.then(val => res.send(val))
})

app.get("/productoRandom", (req, res) =>{
    itemRandom().then(val => res.send(val))
})


const PORT = process.env.PORT || 8080;

const server = app.listen(PORT, () => {console.log("Server running")})
server.on("error", error => console.log(`Error ${error}`))
