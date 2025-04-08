import React, { useState, useEffect, useRef } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { Widget, addResponseMessage, dropMessages, renderCustomComponent } from "react-chat-widget";
import "react-chat-widget/lib/styles.css";

// Custom response component (only needed if you want to show typing indicators)
const BotResponse: React.FC<{ text: string }> = ({ text }) => {
  return <div className="rcw-response">{text}</div>;
};

const ChatbotUi: React.FC = () => {
  const genAIRef = useRef<GoogleGenerativeAI | null>(null);
  const [isInitialized, setIsInitialized] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  useEffect(() => {
    // Initialize the API on component mount
    try {
      const apiKey = process.env.REACT_APP_GEMINI_API_KEY;
      if (!apiKey) {
        throw new Error("REACT_APP_GEMINI_API_KEY is not defined");
      }
      genAIRef.current = new GoogleGenerativeAI(apiKey);
      setIsInitialized(true);
      
      // Add welcome message
      addResponseMessage("Hello! I'm your healthcare assistant. How can I help you today?");
    } catch (err) {
      setError((err as Error).message);
      addResponseMessage("⚠️ There was an error initializing the chatbot. Please check your API key.");
    }
    
    // Clean up function to reset messages when component unmounts
    return () => {
      dropMessages();
    };
  }, []);

  const handleNewUserMessage = async (newMessage: string) => {
    if (!isInitialized || !genAIRef.current) {
      addResponseMessage("⚠️ Chatbot not initialized properly. Please refresh the page.");
      return;
    }

    // Prevent multiple simultaneous requests
    if (isGenerating) {
      return;
    }

    setIsGenerating(true);
    
    try {
      const model = genAIRef.current.getGenerativeModel({ model: "gemini-2.0-flash" });
      
      // Instead of trying to modify an existing message, we'll just add a new one
      // with the response directly
      
      const generationConfig = {
        temperature: 0.3,
        topK: 40,
        topP: 0.9,
        maxOutputTokens: 2500,
      };

      // Show typing indicator instead of "Thinking..." message
      // This is optional but gives a better user experience
      renderCustomComponent(BotResponse, { text: "..." });

      const result = await model.generateContent({
        contents: [{ role: "user", parts: [{ text: newMessage }] }],
        generationConfig,
      });

      const response = result.response;
      const text = response.text();
      
      // Add the real response as a new message
      if (text) {
        // Add the real response
        addResponseMessage(text);
      } else {
        // If no text was generated, show an error
        addResponseMessage("No response generated. Please try a different question.");
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Unknown error";
      console.error("Error generating response:", errorMessage);
      
      // Add the error as a new message
      addResponseMessage(`⚠️ Error: ${errorMessage}. Please try again.`);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="App">
      {error && <div className="error-banner">Error: {error}</div>}
      <Widget
        handleNewUserMessage={handleNewUserMessage}
        title="Healthcare Chatbot"
        subtitle="Ask me anything about healthcare!"
        emojis={true}
      />
    </div>
  );
};

export default ChatbotUi;