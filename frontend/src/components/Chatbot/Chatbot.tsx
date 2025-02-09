import React, { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { Widget, addResponseMessage } from "react-chat-widget";
import "react-chat-widget/lib/styles.css";

const ChatbotUi = () => {
  const [genAI] = useState(() => new GoogleGenerativeAI("Use your key here"));

  const handleNewUserMessage = async (newMessage: string) => {

    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const prompt = `${newMessage}`;
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = await response.text();
    addResponseMessage(text);
  };

  return (
    <div className="App">
      <Widget
        handleNewUserMessage={handleNewUserMessage}
        title="Healthcare Chatbot"
        subtitle="Ask me anything about healthcare!"
      />
    </div>
  );
};

export default ChatbotUi;
