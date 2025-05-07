import React, { useState } from "react";
import { SendOutlined } from "@ant-design/icons";
import MessageBubble from "./MessageBubble";
import {
  FaEdit,
  FaMapMarkerAlt,
  FaRegCommentDots,
  FaRobot,
  FaUser,
} from "react-icons/fa";
import Profile from "../../assets/images/mac.png";
import { GrSend } from "react-icons/gr";

const ChatContainer = () => {
  const [editMessage, setEditMessage] = useState(false);
  const chat =
    "Create a chatbot gpt using python language what will be step for that";
  return (
    <div className="flex-1 flex flex-col justify-between overflow-y-auto pt-14">
      <div className="min-h-screen p-6 flex justify-center items-center relative">
        <div className="w-10/12 mx-auto mt-6 space-y-1.5">
          {/* Question Prompt */}
          <div className="text-sm text-gray-900 flex items-center justify-between gap-2 mb-3">
            <div className="flex items-start gap-2 w-full">
              <img
                src="https://i.pravatar.cc/40"
                className="w-6 h-6 rounded-full mt-1"
                alt="User"
              />

              {editMessage ? (
                <div className="rounded-xl w-full max-w-4xl">
                  <div className="bg-[#3f3f3f] p-4 rounded-xl flex items-start justify-between gap-4 relative">
                    <textarea
                      className="bg-transparent w-full text-white placeholder:text-gray-400 resize-none focus:outline-none"
                      rows="2"
                      defaultValue={chat}
                      placeholder="Type your message..."
                    />
                    <div className="flex gap-2 absolute bottom-4 right-4">
                      <button
                        className="bg-[#1f1f1f] text-white px-4 py-1.5 rounded-full text-sm hover:bg-gray-700"
                        onClick={() => setEditMessage(false)}
                      >
                        Cancel
                      </button>
                      <button
                        className="bg-white text-black px-4 py-1.5 rounded-full text-sm hover:bg-gray-200"
                        onClick={() => setEditMessage(false)}
                      >
                        Send
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <p className=" text-black px-4 py-2 rounded-xl max-w-4xl">
                  {chat}
                </p>
              )}
            </div>
            {/* Edit Button */}
            {editMessage == false && (
              <span
                onClick={() => setEditMessage(true)}
                className="cursor-pointer text-gray-700 hover:text-black"
              >
                <FaEdit className="text-lg" />
              </span>
            )}
          </div>
          <span className="text-blue-600 text-base italic !mt-4">
            CHAT A.I+
          </span>

          {/* AI Response */}
          <div className="flex items-start space-x-3">
            <div className="p-4 rounded-lg text-sm space-y-2 w-full">
              <p className="font-semibold text-gray-800">
                Sure, I can help you get started with creating a chatbot using
                GPT in Python. Here are the basic steps you'll need to follow:
              </p>
              <ol className="list-decimal list-inside space-y-5 text-gray-900">
                <li>
                  <strong>Install the required libraries:</strong> You'll need
                  to install the transformers library from Hugging Face to use
                  GPT. You can install it using pip.
                </li>
                <li>
                  <strong>Load the pre-trained model:</strong> GPT comes in Load
                  in several sizes and versions, so you'll need to choose the
                  one that fits your needs. You can load a pre-trained GPT
                  model. This loads the 1.38 parameter version of GPT-Neo, which
                  is a powerful and relatively recent model..
                </li>
                <li>
                  <strong>Create a chatbot loop:</strong>
                  You'll need to create a loop that takes user input, generates
                  a response using the GPT model, and outputs it to the user.
                  Here's an example loop that uses the input() function to get
                  user input and the gpt() function to generate a response, This
                  loop will keep running until the user exits the program or the
                  loop is interrupted.
                </li>
                <li>
                  <strong>Add some personality to the chatbot:</strong> While 4.
                  While GPT can generate text, it doesn't have any inherent
                  personality or style. You can make your chatbot more
                  interesting by adding custom prompts or responses that reflect
                  your desired personality. You can then modify the chatbot loop
                  to use these prompts and responses when appropriate. This will
                  make the chatbot seem more human-like and engaging.
                </li>
              </ol>
              <p className="text-gray-900 font-semibold">
                These are just the basic steps to get started with a GPT chatbot
                in Python. Depending on your requirements, you may need to add
                more features or complexity to the chatbot. Good luck!
              </p>
            </div>
          </div>

          {/* User Follow-up Question */}
          <div className="flex items-start space-x-3">
            <div className=" p-4 rounded-lg text-sm text-gray-800 w-full">
              What is use of that chatbot ?
            </div>
          </div>

          {/* AI Follow-up Answer */}
          <div className="flex items-start space-x-3">
            <div className=" p-4 rounded-lg text-sm space-y-4 w-full">
              <p className="font-semibold text-gray-900">
                Chatbots can be used for a wide range of purposes, including:
              </p>
              <ul className="list-disc list-inside text-gray-900 space-y-1">
                <li>
                  Customer service chatbots can handle frequently asked
                  questions, provide basic support, and help customers navigate
                  a website.
                </li>
                <li>
                  They can act as virtual assistants to recommend products, take
                  bookings, or provide updates.
                </li>
                <li>
                  Educational bots can explain topics, quiz students, or
                  simulate conversations for language learning.
                </li>
              </ul>
            </div>
          </div>

          {/* Input Bar */}
          <div className="flex items-center w-full border rounded-full p-1 px-4 shadow-inner bg-white absolute sticky bottom-6">
            <input
              type="text"
              placeholder="What's in your mind?..."
              className="flex-grow outline-none text-sm text-gray-700"
            />
            <button className="ml-2 bg-blue-500 text-white px-3 py-3 mx-auto rounded-full hover:bg-blue-600 transition">
              <GrSend />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatContainer;
