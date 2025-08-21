import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import io from "socket.io-client";

const socket = io("https://int-view-backend.onrender.com", { autoConnect: true });

function Meet() {
  const { roomId } = useParams(); // get roomId from URL
  const localVideoRef = useRef(null);
  const remoteVideoRef = useRef(null);
  const peerConnection = useRef(null);

  useEffect(() => {
    // join room
    socket.emit("join-room", { roomId });

    socket.on("ready", createOffer);
    socket.on("offer", handleOffer);
    socket.on("answer", handleAnswer);
    socket.on("ice-candidate", handleCandidate);

    return () => {
      socket.off("ready");
      socket.off("offer");
      socket.off("answer");
      socket.off("ice-candidate");
    };
  }, [roomId]);

  // Initialize peer + media
  const initPeer = async () => {
    // Hold the Possible Network Paths to Estabilish Connection
    peerConnection.current = new RTCPeerConnection({
      iceServers: [{ urls: "stun:stun.l.google.com:19302" }],
    });

    // handle ICE candidates of connection
    peerConnection.current.onicecandidate = (event) => {
      if (event.candidate) {
        socket.emit("ice-candidate", { candidate: event.candidate, roomId });
      }
    };

    peerConnection.current.ontrack = (event) => {
      if (remoteVideoRef.current) {
        remoteVideoRef.current.srcObject = event.streams[0];
      }
    };

    // get local media
    const stream = await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: true,
    });

    if (localVideoRef.current) {
      localVideoRef.current.srcObject = stream;
    }

    stream
      .getTracks()
      .forEach((track) => peerConnection.current.addTrack(track, stream));
  };

  const createOffer = async () => {
    // if Peer connection is not estabilished
    if (!peerConnection.current) await initPeer();

    // creates an offer to send to other user
    const offer = await peerConnection.current.createOffer();

    // Local desciptions tells its local browser that i am sharing this
    await peerConnection.current.setLocalDescription(offer);
    // Emit that offer
    socket.emit("offer", { offer, roomId });
  };

  const handleOffer = async (offer) => {
    // if Peer connection is not estabilished
    if (!peerConnection.current) await initPeer();

    // Remote description tells what is meant to be sent over this connection
    await peerConnection.current.setRemoteDescription(
      new RTCSessionDescription(offer)
    );

    // Create Answer for the Offer 
    const answer = await peerConnection.current.createAnswer();
    
    await peerConnection.current.setLocalDescription(answer);

    socket.emit("answer", { answer, roomId });
  };

  const handleAnswer = async (answer) => {
    // Set what all stream it will accept from the user
    await peerConnection.current.setRemoteDescription(
      new RTCSessionDescription(answer)
    );
  };

  const handleCandidate = async (candidate) => {
    try {
      await peerConnection.current.addIceCandidate(
        new RTCIceCandidate(candidate)
      );
    } catch (err) {
      console.error("Error adding ICE candidate", err);
    }
  };

  return (
    <div className="h-screen w-screen flex bg-gray-900 text-white">
      {/* Left Sidebar */}
      <div className="w-[20vw] bg-gray-800 border-r border-gray-700 flex flex-col p-2 space-y-2">
        <div className="bg-gray-700 rounded-lg p-2 text-sm">
          <p>
            Room ID: <span className="text-blue-400">{roomId}</span>
          </p>
        </div>

        {/* Video Feeds */}
        <div className="flex-1 overflow-y-auto space-y-2">
          <div className="bg-black rounded-lg h-48 flex items-center justify-center">
            <video
              ref={remoteVideoRef}
              className="bg-black rounded-lg h-48 w-full"
              autoPlay
              playsInline
            />
          </div>
          <div className="bg-black rounded-lg h-48 flex items-center justify-center">
            <video
              ref={localVideoRef}
              className="bg-black rounded-lg h-48 w-full"
              autoPlay
              playsInline
              muted
            />
          </div>
        </div>

        {/* Controls */}
        <div className="text-2xl">
          <button className="border-2 rounded-sm m-1 bg-blue-600">Audio</button>
          <button className="border-2 rounded-sm m-1 bg-blue-600">Video</button>
          <button className="border-2 rounded-sm m-1 bg-red-500">Leave</button>
        </div>
      </div>

      {/* Code Editor Area */}
      <div className="flex-1 flex text-[1.2rem] flex-col border-b border-gray-700">
        <div className="bg-gray-800 p-2 flex items-center justify-between border-b border-gray-700">
          <select className="bg-gray-700 px-2 py-1 rounded">
            <option>C++</option>
            <option>JavaScript</option>
            <option>Python</option>
          </select>
          <div className="space-x-2">
            <button className="px-3 py-1 bg-green-500 rounded">Run</button>
            <button className="px-3 py-1 bg-gray-700 rounded">Stop</button>
          </div>
        </div>

        <div className="flex-1 bg-gray-900 p-4">
          <div className="h-[75%] w-full bg-black/30 border border-gray-700 rounded-lg p-3">
            {/* Editor goes here */}
          </div>
          <div className="p-3 w-full">
            <label>Output</label>
          </div>
        </div>
      </div>

      {/* Right Sidebar - Chat */}
      <div className="w-[20vw] bg-gray-800 flex flex-col">
        <div className="bg-gray-700 p-3 border-b border-gray-600">
          <p className="font-semibold">Chat Room</p>
        </div>
        <div className="flex-1 p-3 space-y-2 overflow-y-auto"></div>
        <div className="p-3 border-t border-gray-700 flex">
          <input
            type="text"
            placeholder="Type your message..."
            className="flex-1 px-3 py-2 rounded-l-lg bg-gray-700 text-sm focus:outline-none"
          />
          <button className="px-4 bg-blue-600 rounded-r-lg">Send</button>
        </div>
      </div>
    </div>
  );
}

export default Meet;