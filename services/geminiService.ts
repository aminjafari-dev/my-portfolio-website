import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";
import { SYSTEM_INSTRUCTION } from '../constants';

let chatSession: Chat | null = null;

// Initialize the AI client
const getAiClient = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    console.error("API_KEY is missing from environment variables.");
    return null;
  }
  return new GoogleGenAI({ apiKey });
};

// Initialize or retrieve the existing chat session
export const getChatSession = (): Chat | null => {
  if (chatSession) return chatSession;

  const ai = getAiClient();
  if (!ai) return null;

  try {
    chatSession = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });
    return chatSession;
  } catch (error) {
    console.error("Failed to create chat session:", error);
    return null;
  }
};

// Send a message and get a stream of responses
export const sendMessageStream = async function* (message: string) {
  const chat = getChatSession();
  if (!chat) {
    yield "I'm sorry, I cannot connect to the AI service right now. Please verify the API Key.";
    return;
  }

  try {
    const resultStream = await chat.sendMessageStream({ message });
    
    for await (const chunk of resultStream) {
      const c = chunk as GenerateContentResponse;
      if (c.text) {
        yield c.text;
      }
    }
  } catch (error) {
    console.error("Error sending message:", error);
    yield "Sorry, something went wrong while processing your request.";
  }
};
