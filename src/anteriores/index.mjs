/*

import express from "express" 
import ProductManager from '../ProductManager.js'


const app = express() 

let productArray = [
    {
        title: "BATERIA 12 V 75 A",
        description: "BATERIA AUTO 12 X 75 A 500 CCA LIBRE GARANTIA 1 AÑO",
        price: 99000,
        thumbnail: "sinImagen1.jpeg",
        code: "tn12x75",
        stock: 21

    },
    {
        title: "BATERIA 12 V 85 A",
        description: "BATERIA AUTO 12 X 85 A 550 CCA LIBRE GARANTIA 1 AÑO",
        price: 114000,
        thumbnail: "sinImagen2.jpeg",
        code: "tn12x85",
        stock: 22
    },
    {
        title: "BATERIA 12 V 90 A",
        description: "BATERIA CAMIONETA 12 X 90 A 750 CCA LIBRE GARANTIA 1 AÑO",
        price: 157000,
        thumbnail: "sinImagen3.jpeg",
        code: "tn12x90",
        stock: 23,
    },
    {
        title: "BATERIA 12 V 110 A",
        description: "BATERIA MAQUINARIA 12 X 110 A 800 CCA LIBRE GARANTIA 1 AÑO",
        price: 159000,
        thumbnail: "sinImagen4.jpeg",
        code: "tn12x110",
        stock: 24,
    },
    {
        title: "BATERIA 12 V 120 A",
        description: "BATERIA TRACTOR 12 X 120 A 850 CCA LIBRE GARANTIA 1 AÑO",
        price: 163000,
        thumbnail: "sinImagen5.jpeg",
        code: "tn12x120",
        stock: 25,
    },
    {
        title: "BATERIA 12 V 180 A",
        description: "BATERIA CAMION 12 X 180 A 1000 CCA LIBRE GARANTIA 1 AÑO",
        price: 280000,
        thumbnail: "sinImagen6.jpg",
        code: "tn12x180",
        stock: 26,
    },
    {
        title: "Auxilios Inmediatos",
        description:"En menos de 50 minutos estamos a donde nos indiques",
        price: 50000,
        thumbnail: "sinImagen7.jpg",
        code: "AUX24YA",
        stock: 27,
    },
    {
        title: "Auxilios programados",
        description:"Progrmá tu auxilio estes donde estes",
        price: 50000,
        thumbnail: "sinImagen8.jpg",
        code: "AUX24PROG",
        stock: 28,
    },
    {
        title: "Membresía Gold",
        description:"No dejes de arrancas nunca! LLamanos las 24hs",
        price: 300000,
        thumbnail:"sinImagen9",
        code: "AUX24MEM",
        stock: 29
    }
]

// ------------------Mi instancia de trabajo---------------------

const products = new ProductManager('./data/productos.json')

// --------------------------------------------------------------




// Ruta para obtener todos los productos o si hay parametro Limit restringe la muestra

app.get('/products', (req, res) => {


    const productsList = products.getProducts();



    const { limit } = req.query //extraigo con desestructuración de query, el parámetro limit de la consulta

    if(limit){ //si existe el parámetro lo parseo y opero con slice para mostrar una lista limitada
        const limitValue = parseInt(limit)
        if(!isNaN(limitValue)){ 
            res.send(productsList.slice(0, limitValue)) 
            return
        }
    }


    res.send(productsList) // si no entra en el if... muestro la lista completa de mis productos
});



// Ruta para obtener un producto por su ID

app.get('/products/:id', (req, res) => {
    try {
        const product = products.getProductById(Number(req.params.id));
        res.send(product);
    } catch (error) {
        res.status(404).send({ message: error.message });
    }
});





async function asincronaDeLecturasdePrueba () {
    try {
        await products.addMultipleProducts(productArray) 

        await products.saveProducts()

        console.log("Productos del array products: ", products.getProducts())

    } catch (error) {
        console.error(error)
    }
}

asincronaDeLecturasdePrueba () 



// _______________________________________________________________________________________

app.listen(8080, error => {
    console.log('Escuchando el puerto 8080') //modo escucha
})

// -----------------------------------------------------------------------------------------


*/