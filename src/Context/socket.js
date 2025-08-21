// frontend/src/socket.js
import { io } from "socket.io-client";

// Connect once
const socket = io("http://localhost:5000", {
  autoConnect: true,
  transports: ["websocket"]
});

export default socket;