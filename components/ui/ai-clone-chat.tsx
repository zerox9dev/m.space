'use client'

import React, { useState, useRef, useEffect, ReactNode } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { FaXmark, FaPaperPlane, FaRobot, FaUser, FaCopy, FaCheck } from 'react-icons/fa6'
import { MorphingDialog, MorphingDialogTrigger, MorphingDialogContent, MorphingDialogClose, MorphingDialogContainer } from './morphing-dialog'
import { ResponseStream } from './response-stream'
import { Message, MessageAvatar, MessageContent, MessageActions, MessageAction } from './message'
import { useTranslations } from 'next-intl'

interface MessageType {
  content: string
  isUser: boolean
  timestamp: Date
  isComplete?: boolean
  id: string
}

interface AiCloneChatProps {
  customTrigger?: ReactNode;
  floatingButton?: boolean;
}

export function AiCloneChat({ customTrigger, floatingButton = false }: AiCloneChatProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<MessageType[]>([])
  const [inputValue, setInputValue] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [copiedMessageId, setCopiedMessageId] = useState<string | null>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const t = useTranslations();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleCopy = (content: string, id: string) => {
    navigator.clipboard.writeText(content)
    setCopiedMessageId(id)
    setTimeout(() => setCopiedMessageId(null), 2000)
  }

  // Generate a unique ID for messages
  const generateId = () => {
    return Math.random().toString(36).substring(2, 9);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!inputValue.trim() || isLoading) return

    // Add user message
    const userMessage: MessageType = {
      content: inputValue,
      isUser: true,
      timestamp: new Date(),
      isComplete: true,
      id: generateId()
    }
    setMessages(prevMessages => [...prevMessages, userMessage])
    setInputValue('')
    setIsLoading(true)

    try {
      // Add temporary AI message that will be animated
      const tempAiMessage: MessageType = {
        content: '', // Start with empty content
        isUser: false,
        timestamp: new Date(),
        isComplete: false,
        id: generateId()
      }
      
      const messageIndex = messages.length;
      setMessages(prevMessages => [...prevMessages, tempAiMessage])
      
      // Call the API
      const response = await fetch('/api/ai-clone', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: inputValue }),
      })

      const data = await response.json()
      
      // Update the message with actual content
      const aiMessage: MessageType = {
        content: data.response || "Sorry, I couldn't process that request.",
        isUser: false,
        timestamp: new Date(),
        isComplete: false,
        id: tempAiMessage.id
      }
      
      setMessages(prevMessages => 
        prevMessages.map((msg, idx) => 
          idx === messageIndex ? aiMessage : msg
        )
      )
      
      // Mark message as complete after animation finishes
      setTimeout(() => {
        setMessages(prevMessages => 
          prevMessages.map((msg) => 
            msg.id === aiMessage.id ? { ...msg, isComplete: true } : msg
          )
        )
      }, calculateReadTime(data.response))
      
    } catch (error) {
      console.error('Error communicating with AI:', error)
      
      // Get specific error message if available
      let errorContent = "Sorry, I'm having trouble connecting. Please try again later.";
      
      if (error instanceof Error) {
        console.error('Error details:', error.message);
      }
      
      // Try to extract error message from the API response
      try {
        if (error instanceof Response || (error as any).json) {
          const errorData = await (error as Response).json();
          if (errorData && errorData.error) {
            errorContent = errorData.error;
          }
        }
      } catch (e) {
        // If we can't parse the error, use the default message
      }
      
      const errorMessage: MessageType = {
        content: errorContent,
        isUser: false,
        timestamp: new Date(),
        isComplete: true,
        id: generateId()
      }
      setMessages(prevMessages => [...prevMessages, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }
  
  // Calculate read time based on content length (roughly 50ms per character with minimum 1500ms)
  const calculateReadTime = (content: string): number => {
    return Math.max(1500, content.length * 50);
  }

  // Default floating button trigger
  const defaultTrigger = (
    <motion.div 
      className={cn(
        "flex h-11 w-11 cursor-pointer items-center justify-center bg-white text-black shadow-lg hover:bg-gray-100 dark:bg-zinc-800 dark:hover:bg-zinc-700 rounded-md",
        floatingButton && "fixed bottom-6 right-6"
      )}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <FaRobot className="h-5 w-5" />
    </motion.div>
  );

  return (
    <MorphingDialog
      transition={{
        type: 'spring',
        bounce: 0,
        duration: 0.3,
      }}
    >
      <MorphingDialogTrigger>
        {customTrigger || defaultTrigger}
      </MorphingDialogTrigger>
      <MorphingDialogContainer>
        <MorphingDialogContent className="relative h-[500px] w-[350px] bg-white border-[#F4F4F5] border-3 rounded-md dark:bg-zinc-900 sm:w-[400px]">
          <div className="flex h-full flex-col">
            {/* Header with title */}
            <div className="p-4 border-b border-[#F4F4F5] dark:border-zinc-800 relative">
              <div className="absolute -top-4 left-4 bg-white dark:bg-zinc-900 px-2 py-1 text-sm">
                <span>{t('aiChat.title')}</span>
              </div>
              <div className="flex items-center gap-2">
                <FaRobot className="h-5 w-5 text-green-500 dark:text-green-400" />
                <h3 className="text-md font-medium text-black dark:text-white">{t('aiChat.assistant')}</h3>
              </div>
            </div>
            
            {/* Messages area */}
            <div className="flex-1 overflow-auto p-4 bg-gray-50 dark:bg-zinc-800/20">
              {messages.length === 0 ? (
                <div className="flex h-full flex-col items-center justify-center text-center text-zinc-500 dark:text-zinc-400">
                  <FaRobot className="mb-3 h-10 w-10 text-green-500" />
                  <p className="text-sm font-medium text-zinc-700 dark:text-zinc-300">{t('aiChat.welcome')}</p>
                  <p className="mt-2 text-sm">{t('aiChat.description')}</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {messages.map((message, index) => (
                    <Message 
                      key={index} 
                      className={cn(
                        message.isUser ? "justify-end" : "justify-start"
                      )}
                    >
                      {!message.isUser && (
                        <MessageAvatar 
                          src="/chat/ai-avatar.png" 
                          alt="AI Assistant"
                          fallback="AI"
                        />
                      )}
                      <div className="flex flex-col gap-1 max-w-[75%]">
                        {message.isUser || message.isComplete ? (
                          <MessageContent 
                            className={cn(
                              "p-3 rounded-md shadow-sm text-sm",
                              message.isUser 
                                ? "bg-green-500 text-white dark:bg-green-600" 
                                : "bg-white dark:bg-zinc-800 dark:text-white border border-[#F4F4F5] dark:border-zinc-700"
                            )}
                            markdown={!message.isUser}
                          >
                            {String(message.content)}
                          </MessageContent>
                        ) : (
                          <div className={cn(
                            "p-3 rounded-md shadow-sm text-sm",
                            "bg-white dark:bg-zinc-800 dark:text-white border border-[#F4F4F5] dark:border-zinc-700"
                          )}>
                            <ResponseStream
                              textStream={message.content}
                              mode="typewriter"
                              speed={30}
                            />
                          </div>
                        )}
                        <div className="flex justify-between items-center px-1 text-xs text-zinc-500 dark:text-zinc-400">
                          <span>
                            {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                          </span>
                          {!message.isUser && message.isComplete && (
                            <MessageActions>
                              <MessageAction 
                                tooltip={copiedMessageId === message.id ? t('Common.copied') : t('Common.copy')}
                              >
                                <button 
                                  onClick={() => handleCopy(message.content, message.id)}
                                  className="p-1 rounded hover:bg-gray-200 dark:hover:bg-zinc-700"
                                >
                                  {copiedMessageId === message.id ? (
                                    <FaCheck className="h-3 w-3" />
                                  ) : (
                                    <FaCopy className="h-3 w-3" />
                                  )}
                                </button>
                              </MessageAction>
                            </MessageActions>
                          )}
                        </div>
                      </div>
                      {message.isUser && (
                        <MessageAvatar 
                          src=""
                          alt="You"
                          fallback="You"
                        />
                      )}
                    </Message>
                  ))}
                  {isLoading && !messages.some(msg => !msg.isComplete && !msg.isUser) && (
                    <div className="mr-auto flex max-w-[80%] rounded-md bg-white border border-[#F4F4F5] p-3 dark:bg-zinc-800 dark:border-zinc-700">
                      <div className="flex space-x-1">
                        <div className="h-2 w-2 animate-bounce rounded-full bg-zinc-500 dark:bg-zinc-400" style={{ animationDelay: '0ms' }}></div>
                        <div className="h-2 w-2 animate-bounce rounded-full bg-zinc-500 dark:bg-zinc-400" style={{ animationDelay: '150ms' }}></div>
                        <div className="h-2 w-2 animate-bounce rounded-full bg-zinc-500 dark:bg-zinc-400" style={{ animationDelay: '300ms' }}></div>
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>
              )}
            </div>
            
            {/* Input area */}
            <form onSubmit={handleSubmit} className="border-t border-[#F4F4F5] p-4 dark:border-zinc-800 bg-white dark:bg-zinc-900">
              <div className="flex items-center gap-2">
                <input 
                  type="text" 
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder={t('aiChat.placeholder')}
                  className="flex-1 border border-[#F4F4F5] bg-transparent px-3 py-1.5 text-sm outline-none focus:border-green-500 dark:border-zinc-700 dark:text-zinc-100 rounded-md"
                  disabled={isLoading}
                />
                <button 
                  type="submit" 
                  className={cn(
                    "px-3 py-1.5 bg-green-500 text-white text-sm rounded-md transition-colors",
                    isLoading || !inputValue.trim() ? "cursor-not-allowed opacity-50" : "hover:bg-green-600"
                  )}
                  disabled={isLoading || !inputValue.trim()}
                >
                  {t('aiChat.send')}
                </button>
              </div>
            </form>
          </div>
        </MorphingDialogContent>
        <MorphingDialogClose
          className="absolute top-4 right-4 h-fit w-fit bg-white p-1.5 shadow-sm dark:bg-zinc-800 rounded-md"
          variants={{
            initial: { opacity: 0 },
            animate: {
              opacity: 1,
              transition: { delay: 0.3, duration: 0.1 },
            },
            exit: { opacity: 0, transition: { duration: 0 } },
          }}
        >
          <FaXmark className="h-4 w-4 text-zinc-500 dark:text-zinc-400" />
        </MorphingDialogClose>
      </MorphingDialogContainer>
    </MorphingDialog>
  )
} 