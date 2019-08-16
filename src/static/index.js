const socket = io("/");

function sendMessage(message) {
  socket.emit("newMessage", { message });
  console.log(`Me: ${message}`);
}

function setNickname(nickname) {
  socket.emit("setNickname", { nickname });
}

function handleMessageNotifi(data) {
  const { message, nickname } = data;
  console.log(`${nickname}: ${message}`);
}

socket.on("messageNotifi", handleMessageNotifi);
