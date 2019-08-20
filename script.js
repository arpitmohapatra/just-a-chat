var element = document.getElementsByClassName("chat-body");
var input = document.getElementById("chat-text");
var chatCount = 0;

function thatScroll() {
  if (input.value !== "") {
    chatCount++;
    var newChat = document.createElement("div");
    if (chatCount % 2 == 0) newChat.className = "chat-bubble-right";
    else newChat.className = "chat-bubble-left";
    newChat.innerHTML = input.value;
    input.value = "";
    element[0].appendChild(newChat);
    //console.log(element[0].scrollHeight);
    element[0].scrollTop = element[0].scrollHeight;
  }
}

// Execute a function when the user releases a key on the keyboard
input.addEventListener("keyup", function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the function
    thatScroll();
  }
});
