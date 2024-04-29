const { Router } = require ("express")

const router = Router()

const products = [
    { id: 1, title: "Product1", price: 100 },
    { id: 2, title: "Product2", price: 101 },
    { id: 3, title: "Product3", price: 102 },
    { id: 4, title: "Product4", price: 103 },
    { id: 5, title: "Product5", price: 104 }
]

const user = {
    username: "renesgo",
    nombre: "René",
    apellido: "Llugdar",
    role: "admin"
}

router.get("/", (req, res) =>{
    res.render("index", {})
})

// router.get("/", (req, res)=>{
//     res.render("home", {
//         username: user.username,
//         nombre: user.nombre,
//         apellido: user.apellido,
//         role: user.role === "admin",
//         title: "Ecomerce || René",
//         products,
//         styles: "homeStyles.css"
//     })
// })

// router.get("/chat", (req, res)=>{
//     res.render("chat", {})
// })

// router.get('/chat', (req, res) => {
//     io.on('connection', socket => {
//         const messages = []

//         // socket.on('mensaje_cliente', data => {
//         //     console.log(data);
//         //     messages.push({ socket.id, message: data })
            
//         //     io.emit('messages_server', messages)
//         // })

//         res.render('chat', {
//             styles: 'homeStyles.css'
//         })
//     })
// })


module.exports = router