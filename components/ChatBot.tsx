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
      text: "Hi there! I'm Amin's AI assistant. Ask me anything about his skills, experience, or projects.",
      timestamp: new Date(),
    },
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
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const responseStream = sendMessageStream(userMessage.text);
      let fullResponse = '';

      const modelMessageId = (Date.now() + 1).toString();

      setMessages((prev) => [
        ...prev,
        {
          id: modelMessageId,
          role: 'model',
          text: '',
          timestamp: new Date(),
          isStreaming: true,
        },
      ]);

      for await (const chunk of responseStream) {
        fullResponse += chunk;
        setMessages((prev) =>
          prev.map((msg) =>
            msg.id === modelMessageId ? { ...msg, text: fullResponse } : msg
          )
        );
      }

      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === modelMessageId ? { ...msg, isStreaming: false } : msg
        )
      );
    } catch (error) {
      console.error(error);
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now().toString(),
          role: 'model',
          text: 'I encountered an error. Please try again later.',
          timestamp: new Date(),
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-[60] w-14 h-14 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 grid place-items-center bg-ink text-paper ring-1 ring-paper/15 ${
          isOpen ? 'scale-0 opacity-0' : 'scale-100 opacity-100'
        }`}
        aria-label="Open chat"
      >
        <MessageSquare className="w-5 h-5" />
      </button>

      <div
        className={`fixed bottom-6 right-6 w-[92vw] md:w-[400px] h-[520px] bg-ink text-paper border border-paper/15 rounded-2xl shadow-2xl flex flex-col overflow-hidden z-[60] transition-all duration-500 origin-bottom-right ${
          isOpen
            ? 'scale-100 opacity-100'
            : 'scale-0 opacity-0 pointer-events-none'
        }`}
      >
        <div className="p-4 border-b border-paper/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-md bg-paper text-ink grid place-items-center">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-semibold text-paper text-sm uppercase tracking-[0.18em]">
                AI Assistant
              </h3>
              <p className="text-[11px] text-paper/60 flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                Online
              </p>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-paper/60 hover:text-paper transition-colors"
            aria-label="Close chat"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div
          className="flex-1 overflow-y-auto p-4 space-y-4"
          data-lenis-prevent
        >
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex items-start gap-3 ${
                msg.role === 'user' ? 'flex-row-reverse' : ''
              }`}
            >
              <div
                className={`w-8 h-8 rounded-full grid place-items-center flex-shrink-0 ${
                  msg.role === 'user'
                    ? 'bg-paper text-ink'
                    : 'bg-paper/10 text-paper'
                }`}
              >
                {msg.role === 'user' ? (
                  <User className="w-4 h-4" />
                ) : (
                  <Bot className="w-4 h-4" />
                )}
              </div>
              <div
                className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                  msg.role === 'user'
                    ? 'bg-paper text-ink rounded-tr-none'
                    : 'bg-paper/[0.06] border border-paper/10 text-paper rounded-tl-none'
                }`}
              >
                {msg.text}
                {msg.isStreaming && (
                  <span className="inline-block w-1.5 h-4 ml-1 align-middle bg-paper/60 animate-pulse" />
                )}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex items-center gap-2 text-xs text-paper/60 mt-2">
              <Bot className="w-3 h-3" />
              <span className="flex items-center gap-1">
                writing
                <span className="flex gap-0.5">
                  <span className="w-1 h-1 rounded-full bg-paper/60 animate-bounce [animation-delay:-0.2s]" />
                  <span className="w-1 h-1 rounded-full bg-paper/60 animate-bounce [animation-delay:0s]" />
                  <span className="w-1 h-1 rounded-full bg-paper/60 animate-bounce [animation-delay:0.2s]" />
                </span>
              </span>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <div className="p-4 border-t border-paper/10">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="flex items-center gap-2"
          >
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about my projects..."
              className="flex-1 bg-paper/[0.05] border border-paper/15 rounded-full px-4 py-2.5 text-sm text-paper focus:outline-none focus:border-paper/40 placeholder:text-paper/40"
            />
            <button
              type="submit"
              disabled={!input.trim() || isLoading}
              className="w-10 h-10 rounded-full bg-paper text-ink grid place-items-center disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              aria-label="Send"
            >
              {isLoading ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <Send className="w-4 h-4" />
              )}
            </button>
          </form>
          <p className="text-[10px] text-center text-paper/40 mt-2 uppercase tracking-[0.2em]">
            Powered by Gemini · AI can make mistakes
          </p>
        </div>
      </div>
    </>
  );
};

export default ChatBot;
