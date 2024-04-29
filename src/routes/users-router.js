/*
import { Router } from "express"

const router = Router()


let users = []

router.get("/", (req, res)=>{
    res.send(users)
})
    

router.get("/:uid", (req, res)=>{
    const { uid } = req.params
    const userFound = users.find( user => user.id === parseInt(uid))
    if(!userFound) return res.status(404).send({status: "error", error: "user not found"})

    res.send({status: "success", payload: userFound})
})


router.post("/", (req, res)=>{

    const { first_name, last_name, email, password } = req.body
    console.log (first_name, last_name, email, password) 

    if(!email || !password) return res.send({status: "error", error: " faltan campos"})

    const newUser = {
        id: users.length +1,
        first_name,
        last_name,
        email,
        password
    }

    users.push(newUser)

    res.status(200).send({status: "succsess", payload: newUser})
})


router.put("/:uid", (req, res)=>{

    const { uid } = req.params
    const userToUpdate = req.body

    const userIndex = users.findIndex(user => user.id === parseInt(uid))
    if(userIndex === -1) return res.status(404).send({status: "error", error: "user not found"})

    users[userIndex] = { id:parseInt(uid),  ...userToUpdate }

    res.send({status: "succsses", payload: userToUpdate})

})


router.delete("/:uid", (req, res)=>{
    
    const { uid } = req.params

    const userResult = users.filter(user => user.id !== parseInt(uid))

    res.send(userResult)
})




export default router
*/