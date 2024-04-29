import express from "express" 
// import usersRouter from "./routes/users-router.js"
import productsRouter from "./routes/products-router.js"
import viewsRouter from "./routes/views-router.js"
import cartsRouter from "./routes/routes-carts.js"
import { __dirname }  from "./utils.js"
import { uploader } from "./multer.js"
import handlebars from "express-handlebars"
import { Server } from "socket.io"
import { productsSocket } from "./utils/productsSocket.js"

const app = express()

const PORT = process.env.PORT || 8080

const httpServer = app.listen(PORT, error =>{
    if(error)console.log(error)
    console.log("Server escuchando en puerto 8080 llp")
})

// socket server
const io = new Server(httpServer)


app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(__dirname + "/public"))


// middleware
app.use(productsSocket(io)) //permite modificar o agregar propiedades a la solicitud antes de que sean manejadas por el resto de la aplicación



// express usa este motor de plantilla
app.engine("hbs", handlebars.engine({
    extname: ".hbs"
}))
// seteamos la dirección de mis vistas
app.set("views", __dirname+"/views")
app.set("view engine", "hbs")


// para subir archivos
app.use("/subir-archivo", uploader.single("myFile"), (req, res)=>{
    if(!req.file){
        return res.send("No se puede subir el archivo")
    }
    res.send("Archivo subido")
})

app.use("/", viewsRouter)

// app.use("/api/users", usersRouter)

app.use("/api/products", productsRouter)

app.use("/api/carts", cartsRouter)




app.use((error, req, res, next) => {
    console.log(error)
    res.status(500).send("Error 500 en el server")
})

let messages = []
//manager products!!!!
io.on("connection", socket =>{
    console.log("Cliente conectado")

    socket.on("message", data =>{
        console.log("message data: ", data)

        //guardamos los mensajes
        messages.push(data)
        //emitimos los mensajes
        io.emit("messageLogs", messages)
    })
})




