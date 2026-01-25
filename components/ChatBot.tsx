import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Sparkles, User, Bot, Loader2 } from 'lucide-react';
import { ChatMessage } from '../types';
import { sendMessageStream } from '../services/geminiService';

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '0',
      role: 'model',
      text: "Hi there! I'm Alex's AI assistant. Ask me anything about his skills, experience, or projects.",
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const responseStream = sendMessageStream(userMessage.text);
      let fullResponse = '';
      
      const modelMessageId = (Date.now() + 1).toString();
      
      // Add placeholder message
      setMessages(prev => [...prev, {
        id: modelMessageId,
        role: 'model',
        text: '',
        timestamp: new Date(),
        isStreaming: true
      }]);

      for await (const chunk of responseStream) {
        fullResponse += chunk;
        setMessages(prev => prev.map(msg => 
          msg.id === modelMessageId 
            ? { ...msg, text: fullResponse }
            : msg
        ));
      }
      
      setMessages(prev => prev.map(msg => 
        msg.id === modelMessageId 
          ? { ...msg, isStreaming: false }
          : msg
      ));

    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, {
        id: Date.now().toString(),
        role: 'model',
        text: "I encountered an error. Please try again later.",
        timestamp: new Date()
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-40 p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 ${isOpen ? 'scale-0 opacity-0' : 'scale-100 opacity-100'} bg-gradient-to-r from-primary to-secondary text-white`}
      >
        <MessageSquare className="w-6 h-6" />
      </button>

      {/* Chat Window */}
      <div 
        className={`fixed bottom-6 right-6 w-[90vw] md:w-[400px] h-[500px] bg-card border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden z-50 transition-all duration-500 origin-bottom-right ${isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0 pointer-events-none'}`}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-primary/20 to-secondary/20 p-4 border-b border-white/5 flex items-center justify-between backdrop-blur-sm">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-primary/20 rounded-full">
              <Sparkles className="w-4 h-4 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-white text-sm">AI Assistant</h3>
              <p className="text-xs text-green-400 flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                Online
              </p>
            </div>
          </div>
          <button 
            onClick={() => setIsOpen(false)}
            className="text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-dark/50">
          {messages.map((msg) => (
            <div 
              key={msg.id} 
              className={`flex items-start gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
            >
              <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${msg.role === 'user' ? 'bg-slate-700' : 'bg-primary/20'}`}>
                {msg.role === 'user' ? <User className="w-4 h-4 text-slate-300" /> : <Bot className="w-4 h-4 text-primary" />}
              </div>
              <div 
                className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                  msg.role === 'user' 
                    ? 'bg-primary text-white rounded-tr-none' 
                    : 'bg-card border border-white/5 text-slate-200 rounded-tl-none'
                }`}
              >
                {msg.text}
                {msg.isStreaming && (
                  <span className="inline-block w-1.5 h-4 ml-1 align-middle bg-primary/50 animate-pulse" />
                )}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-4 bg-card border-t border-white/5">
          <form 
            onSubmit={(e) => { e.preventDefault(); handleSend(); }}
            className="flex items-center gap-2"
          >
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about my projects..."
              className="flex-1 bg-dark/50 border border-white/10 rounded-full px-4 py-2 text-sm text-white focus:outline-none focus:border-primary/50 placeholder:text-slate-500"
            />
            <button 
              type="submit"
              disabled={!input.trim() || isLoading}
              className="p-2 bg-primary text-white rounded-full hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-4 h-4" />}
            </button>
          </form>
          <p className="text-[10px] text-center text-slate-600 mt-2">
            Powered by Gemini 3 Flash. AI can make mistakes.
          </p>
        </div>
      </div>
    </>
  );
};

export default ChatBot;