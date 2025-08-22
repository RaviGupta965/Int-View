import React from "react";

function Meet() {
  return (
    <div className="h-screen w-screen flex bg-gray-900 text-white">
      {/* Left Sidebar - Video Feeds */}
      <div className="w-[20vw] bg-gray-800 border-r border-gray-700 flex flex-col p-2 space-y-2">
        {/* Room Info & Controls */}
        <div className="bg-gray-700 rounded-lg p-2 text-sm">
          <p>
            Room ID: <span className="text-blue-400">abc123xyz</span>
            <span className="bg-blue-600 p-2 rounded-md">  Copy</span>
          </p>
        </div>

        {/* Video Windows */}
        <div className="flex-1 overflow-y-auto space-y-2">
          <div className="bg-black rounded-lg h-48 flex items-center justify-center">
            Peer
          </div>
          <div className="bg-black rounded-lg h-48 flex items-center justify-center">
            You
          </div>
        </div>

        {/* Video Controlls */}
        <div className="text-2xl">
            <button className="border-2 rounded-sm m-1 bg-blue-600">
                Audio
            </button>
            <button className="border-2 rounded-sm m-1 bg-blue-600">
                Video
            </button>
            <button className="border-2 rounded-sm m-1 bg-red-500">
                Leave
            </button>
        </div>
      </div>

      {/* Center - Code Editor */}
      <div className="flex-1 flex text-[1.2rem] flex-col border-b border-gray-700">
        {/* Toolbar */}
        <div className="bg-gray-800  p-2 flex items-center justify-between border-b border-gray-700">
          <select className="bg-gray-700 px-2 py-1 rounded">
            <option>C++</option>
            <option>JavaScript</option>
            <option>Python</option>
          </select>
          <div className="space-x-2">
            <button className="px-3 py-1 bg-gray-700 bg-green-500 rounded">
              Run
            </button>
            <button className="px-3 py-1 bg-gray-700 rounded">Stop</button>
          </div>
        </div>

        {/* Code Editor Area */}
        <div className="flex-1 bg-gray-900 p-4">
          <div className="h-[75%] w-full bg-black/30 border border-gray-700 rounded-lg p-3">
            {/* Monaco/CodeMirror Editor goes here */}
          </div>
          <div className="p-3 w-full ">
            <label htmlFor="">Output</label>
            {/* Output window will Come here */}
          </div>
        </div>
      </div>

      {/* Right Sidebar - Chat */}
      <div className="w-[20vw] bg-gray-800 flex flex-col">
        <div className="bg-gray-700 p-3 border-b border-gray-600">
          <p className="font-semibold">Chat Room</p>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 p-3 space-y-2 overflow-y-auto"></div>

        {/* Chat Input */}
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
