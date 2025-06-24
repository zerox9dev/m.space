'use client'

import React, { useState, useRef, useEffect, ReactNode } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { FaXmark, FaPaperPlane, FaRobot } from 'react-icons/fa6'
import { MorphingDialog, MorphingDialogTrigger, MorphingDialogContent, MorphingDialogClose, MorphingDialogContainer } from './morphing-dialog'
import ReactMarkdown from 'react-markdown'
import { useTranslations } from 'next-intl'

interface Message {
  content: string
  isUser: boolean
  timestamp: Date
}

interface AiCloneChatProps {
  customTrigger?: ReactNode;
  floatingButton?: boolean;
}

export function AiCloneChat({ customTrigger, floatingButton = true }: AiCloneChatProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [inputValue, setInputValue] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!inputValue.trim() || isLoading) return

    // Add user message
    const userMessage: Message = {
      content: inputValue,
      isUser: true,
      timestamp: new Date()
    }
    setMessages(prevMessages => [...prevMessages, userMessage])
    setInputValue('')
    setIsLoading(true)

    try {
      // Call the API
      const response = await fetch('/api/ai-clone', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: inputValue }),
      })

      const data = await response.json()

      // Add AI response
      const aiMessage: Message = {
        content: data.response || "Sorry, I couldn't process that request.",
        isUser: false,
        timestamp: new Date()
      }
      setMessages(prevMessages => [...prevMessages, aiMessage])
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
      
      const errorMessage: Message = {
        content: errorContent,
        isUser: false,
        timestamp: new Date()
      }
      setMessages(prevMessages => [...prevMessages, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  // Default floating button trigger
  const defaultTrigger = (
    <motion.div 
      className={cn(
        "flex h-14 w-14 cursor-pointer items-center justify-center rounded-full bg-white text-black shadow-lg hover:bg-zinc-800 dark:bg-zinc-800 dark:hover:bg-zinc-700",
        floatingButton && "fixed bottom-6 right-6"
      )}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <FaRobot className="h-6 w-6" />
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
        <MorphingDialogContent className="relative h-[500px] w-[350px] rounded-2xl bg-white p-0 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950 dark:ring-zinc-800/50 sm:w-[400px]">
          <div className="flex h-full flex-col">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-zinc-200 p-4 dark:border-zinc-700">
              <div className="flex items-center gap-2">
                <FaRobot className="h-5 w-5 text-zinc-700 dark:text-zinc-300" />
                <h3 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">{useTranslations()('aiChat.assistant')}</h3>
              </div>
            </div>
            
            {/* Messages area */}
            <div className="flex-1 overflow-auto p-4">
              {messages.length === 0 ? (
                <div className="flex h-full flex-col items-center justify-center text-center text-zinc-500 dark:text-zinc-400">
                  <FaRobot className="mb-3 h-10 w-10 text-[#0088cc]" />
                  <p className="text-sm font-medium text-zinc-700 dark:text-zinc-300">{useTranslations()('aiChat.welcome')}</p>
                  <p className="mt-2 text-sm">{useTranslations()('aiChat.description')}</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {messages.map((message, index) => (
                    <div 
                      key={index} 
                      className={cn(
                        "flex max-w-[80%] flex-col rounded-lg p-3",
                        message.isUser 
                          ? "ml-auto bg-[#0088cc] text-white" 
                          : "mr-auto bg-zinc-100 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-100"
                      )}
                    >
                      <div className="text-sm markdown">
                        <ReactMarkdown>{message.content}</ReactMarkdown>
                      </div>
                      <span className="mt-1 self-end text-xs opacity-70">
                        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </span>
                    </div>
                  ))}
                  {isLoading && (
                    <div className="mr-auto flex max-w-[80%] rounded-lg bg-zinc-100 p-3 dark:bg-zinc-800">
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
            <form onSubmit={handleSubmit} className="border-t border-zinc-200 p-4 dark:border-zinc-700">
              <div className="flex items-center gap-2">
                <input 
                  type="text" 
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder={useTranslations()('aiChat.placeholder')}
                  className="flex-1 rounded-full border border-zinc-300 bg-transparent px-4 py-2 text-sm outline-none focus:border-[#0088cc] dark:border-zinc-700 dark:text-zinc-100"
                  disabled={isLoading}
                />
                <button 
                  type="submit" 
                  className={cn(
                    "flex h-10 w-10 items-center justify-center rounded-full bg-[#0088cc] text-white",
                    isLoading || !inputValue.trim() ? "cursor-not-allowed opacity-50" : "hover:bg-[#0077b5]"
                  )}
                  disabled={isLoading || !inputValue.trim()}
                >
                  <FaPaperPlane className="h-4 w-4" />
                </button>
              </div>
            </form>
          </div>
        </MorphingDialogContent>
        <MorphingDialogClose
          className="fixed top-6 right-6 h-fit w-fit rounded-full bg-white p-1.5 shadow-sm dark:bg-zinc-800"
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