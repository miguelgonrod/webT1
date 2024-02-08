document.addEventListener("DOMContentLoaded", function() {
    const chatbox = document.getElementById("chatbox");
    const messageForm = document.getElementById("messageForm");
    const messageInput = document.getElementById("mensaje");
    const usernameInput = document.getElementById("nombre");
    const usernameError = document.getElementById("usernameError");
    const messageError = document.getElementById("messageError");

    messageForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Evita que el formulario se envíe y la página se recargue

        const username = usernameInput.value.trim();
        const message = messageInput.value.trim();

        // Reiniciar mensajes de error
        usernameError.textContent = "";
        messageError.textContent = "";

        // Validar campos
        if (!username) {
            usernameError.textContent = "!Ingrese un nombre¡";
            if (!message) {
                messageError.textContent = "!Ingrese un mensaje¡";
            }
            return;
        }

        if (!message) {
            messageError.textContent = "!Ingrese un mensaje¡";
            return;
        }
        else if (message.length > 300) {
            messageError.textContent = "!El mensaje no puede tener más de 300 caracteres¡";
            return;
        }

        // Agregar mensaje al chatbox
        const messageElement = document.createElement("div");
        messageElement.textContent = `< ${username} >: ${message}`;
        chatbox.appendChild(messageElement);

        // Limpiar campos después de enviar
        usernameInput.value = "";
        messageInput.value = "";
    });
});