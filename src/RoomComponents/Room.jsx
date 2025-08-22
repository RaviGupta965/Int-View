import { SignInButton, useAuth } from "@clerk/clerk-react";
import { useState } from "react";
import { Card, CardHeader,CardFooter, CardTitle, CardDescription} from "../ui/Card";
import { useNavigate } from "react-router-dom";
export default function RoomUI() {
  const [roomName, setRoomName] = useState("");
  const [roomCode, setRoomCode] = useState("");
  const navigate = useNavigate();
  const {isSignedIn} = useAuth();
      if(!isSignedIn){
          return <div className="w-[100%] h-[100vh] flex justify-center items-center">
            <Card className="w-[50%]">
                <CardHeader>
                    <CardTitle>Oops! It seems you are not signed-in</CardTitle>
                    <CardDescription>Please Sign-In to continue</CardDescription>
                </CardHeader>
                <CardFooter className="flex w-full justify-center border-t-2 border-gray-500 p-5 pb-0">
                    <SignInButton fallbackRedirectUrl={"/room"}>
                    <button 
                      className="rounded border bg-[#471396] w-50 h-10 text-white px-3 hover:bg-[#090040]">
                      Sign-In
                    </button>
                    </SignInButton>
                </CardFooter>
            </Card>
          </div>
      }

  // Creating Room Hnadler
  const onCreate= async (Roomname)=>{
    console.log(`Creating Room : ${Roomname}`);
  }


  // Join Room Handler
  const onJoin = async (roomcode)=>{
    console.log(`Joining Room : ${roomcode}`);
  }
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-tl from-[#090040] via-purple-600 to-[#471396] flex items-center justify-center p-4">
      <div className="text-white text-xl font-bold m-5">
        Meet at your Finguretips...
      </div>
      <div className="max-w-lg w-full space-y-6">
        {/* Create Room */}
        <div className="rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl ring-1 ring-white/10 p-6">
          <h2 className="text-white text-2xl font-bold">Create a Room</h2>
          <p className="text-white/80 text-sm mt-1">Enter a name for your room</p>
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