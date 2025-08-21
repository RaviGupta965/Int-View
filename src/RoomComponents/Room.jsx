import { useState, useEffect } from "react";
import axios from "axios";
import io from "socket.io-client";
import { useNavigate } from "react-router-dom";
let socket;

export default function RoomUI() {
  if (!socket) {
    socket = io("http://localhost:5000", { autoConnect: true });
  }
  const [roomName, setRoomName] = useState("");
  const [roomCode, setRoomCode] = useState("");
  const navigate = useNavigate();
  // Creating Room Hnadler
  const onCreate = async (Roomname) => {
    const res = await axios.get("http://localhost:5000/create-room");
    setRoomCode(res.data.roomCode);
    console.log(`Creating Room : ${Roomname}`);
    alert(`Room created! Share this code: ${res.data.roomCode}`);
    navigate(`/meet/${res.data.roomCode}`);
  };

  useEffect(() => {
    socket.on("connect", () => {
      console.log("Connected:", socket.id);
    });

    socket.on("user-joined", ({ userName }) => {
      console.log(`${userName} joined the room.`);
    });
  }, []);

  // Join Room Handler
  const onJoin = async (roomcode) => {
    socket.emit("join-room", { roomCode: roomcode });
    navigate(`/meet/${roomCode}`);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-tl from-[#090040] via-purple-600 to-[#471396] flex items-center justify-center p-4">
      <div className="text-white text-xl font-bold m-5">
        Meet at your Finguretips...
      </div>
      <div className="max-w-lg w-full space-y-6">
        {/* Create Room */}
        <div className="rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl ring-1 ring-white/10 p-6">
          <h2 className="text-white text-2xl font-bold">Create a Room</h2>
          <p className="text-white/80 text-sm mt-1">
            Enter a name for your room
          </p>
          <input
            type="text"
            value={roomName}
            onChange={(e) => setRoomName(e.target.value)}
            placeholder="Room Name"
            className="w-full mt-4 px-4 py-2 rounded-xl bg-white/20 text-white placeholder-white/70 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/50"
          />
          <button
            onClick={() => roomName && onCreate(roomName)}
            className="w-full mt-4 px-4 py-2 rounded-xl bg-white/20 hover:bg-white/30 text-white border border-white/20 transition"
          >
            Create Room
          </button>
        </div>

        {/* Join Room */}
        <div className="rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl ring-1 ring-white/10 p-6">
          <h2 className="text-white text-2xl font-bold">Join a Room</h2>
          <p className="text-white/80 text-sm mt-1">Enter the room code</p>
          <input
            type="text"
            value={roomCode}
            onChange={(e) => setRoomCode(e.target.value.toUpperCase())}
            placeholder="Room Code"
            className="w-full mt-4 px-4 py-2 rounded-xl bg-white/20 text-white placeholder-white/70 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/50"
          />
          <button
            onClick={() => roomCode && onJoin(roomCode)}
            className="w-full mt-4 px-4 py-2 rounded-xl bg-white/20 hover:bg-white/30 text-white border border-white/20 transition"
          >
            Join Room
          </button>
        </div>
      </div>
    </div>
  );
}
