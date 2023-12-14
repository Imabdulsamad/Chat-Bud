const chatInput = document.querySelector("#chat-input")
const sendButton = document.querySelector("#send-btn")

const handleOutgoingChat = ()=>{
    userText = chatInput.ariaValueMax.trim()
    console.log(userText)
}

sendButton.addEventListener('click', handleOutgoingChat)

