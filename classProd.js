const fs = require("fs")

class Contenedor {
    constructor(archivo){
        this.archivo = archivo;
    }

    async save(producto){
        let content = await fs.promises.readFile(this.archivo)
        let contObj = JSON.parse(content)
        let newId;
        if (contObj.length > 0) {
            newId = contObj.length + 1;
        } else {
            newId = 1
        }
        producto.id = newId;
        contObj.push(producto)
        await fs.promises.writeFile(this.archivo, JSON.stringify(contObj))
        console.log(`El item ${producto.title} fue agregado con exito, ID: ${newId}`);
    }

    async getById(id){
        let contenido = await fs.promises.readFile(this.archivo)
        let contObj = JSON.parse(contenido)
        return console.log(contObj.find(producto => producto.id === id))
    }

    async getAll(){
        let contenido = await fs.promises.readFile(this.archivo)
        let contObj = JSON.parse(contenido)
        return contObj;
    }

    async deleteById(id){
        let contenido = await fs.promises.readFile(this.archivo)
        let contObj = JSON.parse(contenido)
        await fs.promises.writeFile(this.archivo, JSON.stringify(contObj.filter(producto => producto.id != id)))
        return console.log(`El elemento con ID: ${id} fue eliminado de la lista`);
    }

    async deleteAll(){
        let contenido = await fs.promises.readFile(this.archivo)
        let contObj = JSON.parse(contenido)
        contObj = []
        await fs.promises.writeFile(this.archivo, JSON.stringify(contObj))
        return console.log("Lista vaciada con exito!")
    }

}

const product1 = {
    title: "Mouse logitech G PRO +",
    price: 123,
    thumbnail: "URL1",
}
const product2 = {
    title: "Mouse logitech G PRO ultra",
    price: 456,
    thumbnail: "URL2",
}
const product3 = {
    title: "Mouse logitech G PRO MAX",
    price: 789,
    thumbnail: "URL3",
}


const listaProductos = new Contenedor("productos.txt")
listaProductos.getAll()


module.exports = Contenedor