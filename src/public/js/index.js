console.log("index.js se ha cargado y está funcionando");

const socket = io()

let user




Swal.fire({
    title: "Identifícate por favor🤗",
    input: "text",
    text: "Ingresa tu usuario",
    inputValidator: value => {
        return !value && "Por favor escribe un usuario para el chat🙏"
    },
    allowOutsideClick: false,
    
})
.then(result =>{
    user = result.value
    console.log(user)
})

//input del chat
let chatBox = document.querySelector("#chatBox")
chatBox.addEventListener("keyup", evt => {
    if(evt.key === "Enter"){
        if(chatBox.value.trim().length > 0){
            socket.emit("message", { user, message: chatBox.value })
            chatBox.value = ""
        }
    }
})

socket.on("messageLogs", data => {
    //console.log("Mensajes del Server: ", data)
    let log = document.getElementById("messageLog")

    let messages = ""
    data.forEach(message =>{
        messages += `<li>${message.user} dice: ${message.message}</li> <br>`
    })
    log.innerHTML = messages
})