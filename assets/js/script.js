/*document.getElementById("sendButton").addEventListener("click", function() {
    var messageInput = document.getElementById("messageInput");
    var message = messageInput.value.trim();
    if (message !== "") {
      var chat = document.querySelector(".chat");
      var messageElement = document.createElement("div");
      messageElement.classList.add("message", "current-message");
      messageElement.innerHTML = "<p>" + message + "</p>";
      chat.appendChild(messageElement);
      messageInput.value = "";
    }
  }); */

  document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    
    // Aquí puedes realizar la lógica de autenticación y redireccionar al usuario si los datos son válidos.
    // Por ahora, simplemente mostraremos una alerta con los datos ingresados.
    alert('Nombre de usuario: ' + username + '\nContraseña: ' + password);
  });
  
 