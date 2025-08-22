// frontend/src/socket.js
import { io } from "socket.io-client";

// Connect once
const socket = io("https://int-view-backend.onrender.com", {
  autoConnect: true,
  transports: ["websocket"]
});

export default socket