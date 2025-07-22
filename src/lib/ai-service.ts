import { GoogleGenerativeAI } from "@google/generative-ai";
import { chatbotScript, ChatBranch } from "./chatbot-data";

// Initialize the Google Generative AI client
const apiKey = import.meta.env.GEMINI_API_KEY;

const genAI = new GoogleGenerativeAI(apiKey);

// Role and instructions for the AI model
const SYSTEM_PROMPT = `
Role: You are "Veena," a female insurance agent for "ValuEnable Life Insurance". 
Follow the conversation flow strictly to remind and convince customers to pay their premiums. 
If no questions are asked, ask simple questions to understand and resolve concerns, always ending with a question. 
If the user speaks in Hindi, respond in Hindi. For English queries, respond in English.
Be concise and friendly in both languages. Keep responses under 35 words.
`;

export async function getAIResponse(userInput: string): Promise<string> {
  try {
    // First try to match with predefined FAQ responses
    const faqResponse = matchFAQ(userInput);
    if (faqResponse) {
      return faqResponse;
    }

    // If no FAQ match, use the AI model for conversation
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    
    const result = await model.generateContent([
      SYSTEM_PROMPT,
      userInput
    ]);
    
    const response = result.response.text();
    return response;
  } catch (error) {
    console.error("Error getting AI response:", error);
    return "I apologize, but I'm having trouble processing your request right now. Please try again later or contact our customer service at 1800 209 7272.";
  }
}

// Function to match user input with FAQ trigger phrases
function matchFAQ(userInput: string): string | null {
  const normalizedInput = userInput.toLowerCase().trim();
  
  for (const faq of chatbotScript.faqs) {
    for (const phrase of faq.trigger_phrases) {
      if (normalizedInput.includes(phrase.toLowerCase())) {
        return faq.response;
      }
    }
  }
  
  return null;
}

// Speech synthesis function
export function speakText(text: string) {
  if ('speechSynthesis' in window) {
    const utterance = new SpeechSynthesisUtterance(text);
    
    // Get available voices and select a female voice if available
    const voices = window.speechSynthesis.getVoices();
    const femaleVoice = voices.find(voice => voice.name.includes('female') || voice.name.includes('Female'));
    
    if (femaleVoice) {
      utterance.voice = femaleVoice;
    }
    
    utterance.rate = 0.9; // Slightly slower rate for better understanding
    utterance.pitch = 1.1; // Slightly higher pitch for female voice
    
    window.speechSynthesis.speak(utterance);
    
    return true;
  }
  
  return false;
}

// Speech recognition setup
export function setupSpeechRecognition(
  onResult: (transcript: string) => void,
  onEnd: () => void
): { start: () => void; stop: () => void } {
  // Check if the browser supports the Web Speech API
  if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
    console.error('Speech recognition not supported');
    return {
      start: () => console.error('Speech recognition not supported'),
      stop: () => console.error('Speech recognition not supported')
    };
  }

  try {
    // Create the recognition object
    // @ts-ignore - TypeScript doesn't recognize SpeechRecognition by default
    const SpeechRecognitionAPI: any = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognitionAPI();

    recognition.continuous = true; // Changed to true to keep listening
    recognition.interimResults = true;
    recognition.lang = 'auto'; // Auto-detect language to support Hindi

    // Set a longer timeout to prevent premature ending
    let recognitionTimeout: number | null = null;

    recognition.onstart = () => {
      console.log("Speech recognition started");
      // Clear any existing timeout
      if (recognitionTimeout) {
        clearTimeout(recognitionTimeout);
        recognitionTimeout = null;
      }
    };

    recognition.onresult = (event) => {
      const transcript = Array.from(event.results)
        .map(result => result[0])
        .map(result => result.transcript)
        .join('');
      
      onResult(transcript);
      
      // Reset timeout on result
      if (recognitionTimeout) {
        clearTimeout(recognitionTimeout);
      }
    };

    recognition.onerror = (event: any) => {
      console.error("Speech recognition error:", event.error);
    };

    recognition.onend = () => {
      console.log("Speech recognition ended");
      onEnd();
    };

    return {
      start: () => {
        try {
          recognition.start();
        } catch (e) {
          console.error("Error starting speech recognition:", e);
        }
      },
      stop: () => {
        if (recognitionTimeout) {
          clearTimeout(recognitionTimeout);
          recognitionTimeout = null;
        }
        try {
          recognition.stop();
        } catch (e) {
          console.error("Error stopping speech recognition:", e);
        }
      }
    };
  } catch (error) {
    console.error("Error setting up speech recognition:", error);
    return {
      start: () => console.error('Speech recognition failed to initialize'),
      stop: () => console.error('Speech recognition failed to initialize')
    };
  }
}