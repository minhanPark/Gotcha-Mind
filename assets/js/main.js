import { handleMessageNotifi } from "./chat";

const socket = io("/");

const sendMessage = () => {
  socket.emit("newMessage", { message });
  console.log(`Me: ${message}`);
};

const setNickname = nickname => {
  socket.emit("setNickname", { nickname });
};

socket.on("messageNotifi", handleMessageNotifi);
