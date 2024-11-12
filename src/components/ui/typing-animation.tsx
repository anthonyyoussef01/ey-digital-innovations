'use client'

import { useEffect, useState, useRef } from 'react'
import { ny } from '@/lib/utils'

interface TypingAnimationProps {
   text: string
   duration?: number
   className?: string
}

export default function TypingAnimation({
   text,
   duration = 200,
   className,
}: TypingAnimationProps) {
   const [displayedText, setDisplayedText] = useState<string>('')
   const [i, setI] = useState<number>(0)
   const ref = useRef<HTMLHeadingElement>(null)
   const [isVisible, setIsVisible] = useState(false)

   useEffect(() => {
      const observer = new IntersectionObserver((entries) => {
         if (entries[0].isIntersecting) {
            setIsVisible(true)
         }
      })

      if (ref.current) {
         observer.observe(ref.current)
      }

      return () => {
         if (ref.current) {
            observer.unobserve(ref.current)
         }
      }
   }, [])

   useEffect(() => {
      let typingEffect: NodeJS.Timeout
      if (isVisible) {
         typingEffect = setInterval(() => {
            if (i < text.length) {
               setDisplayedText(text.substring(0, i + 1))
               setI(i + 1)
            } else {
               clearInterval(typingEffect)
            }
         }, duration)
      }

      return () => {
         clearInterval(typingEffect)
      }
   }, [duration, i, isVisible])

   return (
      <h1
         ref={ref}
         className={ny(
            'font-display text-center text-4xl font-bold leading-[5rem] tracking-[-0.02em] drop-shadow-sm',
            className,
         )}
         style={{ minHeight: '5rem' }} // Set a minimum height to prevent layout shift
      >
         {displayedText || text}
      </h1>
   )
}
