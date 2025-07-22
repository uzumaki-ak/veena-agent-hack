import React, { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageSquare, Mic, Send, X, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { getAIResponse, speakText, setupSpeechRecognition } from "@/lib/ai-service";
import { initialMessage } from "@/lib/chatbot-data";

type Message = {
  id: string;
  content: string;
  sender: "user" | "bot";
  timestamp: Date;
};

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      content: initialMessage,
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState<string>("");
  const [isVoiceMode, setIsVoiceMode] = useState<boolean>(false);
  const [isListening, setIsListening] = useState<boolean>(false);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const [recognition, setRecognition] = useState<{ start: () => void; stop: () => void } | null>(null);

  // Initialize speech recognition
  useEffect(() => {
    if (isVoiceMode) {
      try {
        const recognitionInstance = setupSpeechRecognition(
          (transcript) => {
            setInputValue(transcript);
          },
          () => {
            setIsListening(false);
          }
        );
        
        setRecognition(recognitionInstance);
      } catch (error) {
        console.error("Error setting up speech recognition:", error);
      }
    }
  }, [isVoiceMode]);

  // Scroll to bottom of chat when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Send initial bot message if chat is opened
  useEffect(() => {
    if (isOpen && messages.length === 1 && isVoiceMode) {
      speakText(messages[0].content);
    }
  }, [isOpen, isVoiceMode, messages]);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  const toggleVoiceMode = () => {
    setIsVoiceMode(!isVoiceMode);
    if (isListening) {
      recognition?.stop();
      setIsListening(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
  };

  const handleSendMessage = async () => {
    if (inputValue.trim() === "" || isProcessing) return;
    
    const userMessage: Message = {
      id: `user-${Date.now()}`,
      content: inputValue,
      sender: "user",
      timestamp: new Date(),
    };
    
    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsProcessing(true);
    
    try {
      const botResponse = await getAIResponse(inputValue);
      
      const botMessage: Message = {
        id: `bot-${Date.now()}`,
        content: botResponse,
        sender: "bot",
        timestamp: new Date(),
      };
      
      setMessages((prev) => [...prev, botMessage]);
      
      // If in voice mode, speak the response
      if (isVoiceMode) {
        speakText(botResponse);
      }
    } catch (error) {
      console.error("Error getting bot response:", error);
      
      const errorMessage: Message = {
        id: `error-${Date.now()}`,
        content: "I'm sorry, I couldn't process your request. Please try again.",
        sender: "bot",
        timestamp: new Date(),
      };
      
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsProcessing(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const toggleListening = () => {
    if (!recognition) {
      console.log("Speech recognition not available");
      return;
    }
    
    if (isListening) {
      recognition.stop();
      // Only send message if there's input text
      if (inputValue.trim() !== "") {
        handleSendMessage();
      }
    } else {
      setInputValue("");
      try {
        recognition.start();
        setIsListening(true); // Set listening state manually to ensure it stays active
      } catch (error) {
        console.error("Error starting speech recognition:", error);
        setIsListening(false);
      }
      return; // Return early to prevent the state toggle below
    }
    
    setIsListening(!isListening);
  };

  return (
    <>
      {/* Chat bubble button */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.05 }}
        className="fixed right-8 bottom-8 z-50"
      >
        <Button
          onClick={toggleChatbot}
          size="icon"
          className="w-14 h-14 rounded-full bg-gradient-primary shadow-glow"
          aria-label="Chat with Veena"
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <MessageCircle className="w-6 h-6" />
          )}
        </Button>
      </motion.div>

      {/* Chat window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed right-8 bottom-24 z-50 w-96 max-w-[calc(100vw-2rem)] h-[500px] max-h-[80vh] rounded-lg border border-border bg-card shadow-card overflow-hidden flex flex-col"
          >
            {/* Chat header */}
            <div className="p-3 bg-gradient-primary border-b border-border flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-background/20 flex items-center justify-center">
                  <MessageSquare className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-white">Veena</h3>
                  <p className="text-xs text-white/70">ValuEnable Insurance Agent</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-2">
                  <span className="text-xs text-white/70">Voice</span>
                  <Switch
                    checked={isVoiceMode}
                    onCheckedChange={toggleVoiceMode}
                    aria-label="Toggle voice mode"
                  />
                </div>
                <Button
                  size="icon"
                  variant="ghost"
                  onClick={toggleChatbot}
                  className="h-8 w-8 text-white/70 hover:text-white hover:bg-white/10"
                  aria-label="Close chat"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Chat messages */}
            <div
              ref={chatContainerRef}
              className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-secondary"
            >
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${
                    message.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[80%] rounded-lg px-4 py-2 ${
                      message.sender === "user"
                        ? "bg-primary text-primary-foreground"
                        : "bg-card text-card-foreground"
                    }`}
                  >
                    <p className="text-sm">{message.content}</p>
                    <span className="text-xs opacity-70 mt-1 block">
                      {message.timestamp.toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </span>
                  </div>
                </motion.div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Voice recording indicator */}
            {isVoiceMode && isListening && (
              <div className="px-4 py-2 bg-accent/20 border-t border-border flex items-center justify-center">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  <span className="text-sm">Listening...</span>
                </div>
              </div>
            )}

            {/* Chat input */}
            <div className="p-3 border-t border-border bg-card/90 backdrop-blur">
              {isVoiceMode ? (
                <div className="flex items-center space-x-2">
                  <Textarea
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder="Voice transcript will appear here..."
                    className="min-h-[60px] resize-none"
                    disabled={isListening}
                  />
                  <Button
                    onClick={toggleListening}
                    size="icon"
                    variant={isListening ? "destructive" : "default"}
                    className={`h-12 w-12 rounded-full ${
                      isListening ? "animate-pulse" : ""
                    }`}
                    disabled={isProcessing}
                    aria-label={isListening ? "Stop recording" : "Start recording"}
                  >
                    <Mic className="w-5 h-5" />
                  </Button>
                </div>
              ) : (
                <div className="flex items-center space-x-2">
                  <Input
                    value={inputValue}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown}
                    placeholder="Type your message here..."
                    className="flex-1"
                    disabled={isProcessing}
                  />
                  <Button
                    onClick={handleSendMessage}
                    size="icon"
                    disabled={inputValue.trim() === "" || isProcessing}
                    aria-label="Send message"
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatBot;