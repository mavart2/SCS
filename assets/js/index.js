
/*<script>
$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});
</script>*/

// Datos de ejemplo: conversaciones
const conversations = [
  {
    id: 1,
    name: 'John',
    lastMessage: 'Hello',
    date: '2023-05-15 10:30:00'
  },
  {
    id: 2,
    name: 'Jane',
    lastMessage: 'Hi there!',
    date: '2023-05-16 15:45:00'
  },
  {
    id: 3,
    name: 'Mark',
    lastMessage: 'How are you?',
    date: '2023-05-17 09:15:00'
  },
  // Agrega más conversaciones aquí...
];

document.getElementById("sendButton").addEventListener("click", function() {
  var messageInput = document.getElementById("messageInput");
  var message = messageInput.value.trim();
  if (message !== "") {
    var chat = document.querySelector(".chat");
    var messageElement = document.createElement("div");
    var date = new Date().toLocaleDateString('es-CL', { day: 'numeric', month: 'long', year: 'numeric' });
    messageElement.classList.add("message", "current-message");
    messageElement.innerHTML = "<p>" + message + "</p><span class='message-date'>" + date + "</span>";
    chat.appendChild(messageElement);
    messageInput.value = "";
  }
}); 

////

//* Datos de ejemplo de las conversaciones/*