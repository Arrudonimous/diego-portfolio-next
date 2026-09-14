'use client'

import { useEffect, useRef, useState } from 'react'
import { useReducedMotion } from 'framer-motion'

interface CodeLine {
  text: string;
}

const LINES: CodeLine[] = [
  { text: 'const diego = {' },
  { text: "  role: 'Front-End Developer'," },
  { text: "  stack: ['React', 'Next.js', 'TypeScript']," },
  { text: "  focus: 'performance, UI/UX'," },
  { text: '  openToRemote: true,' },
  { text: '};' },
]

function highlight(text: string) {
  const parts = text.split(/('.*?'|\btrue\b|\bconst\b)/g)
  return parts.map((part, i) => {
    if (part.startsWith("'")) {
      return <span key={i} className="text-accent">{part}</span>
    }
    if (part === 'true') {
      return <span key={i} className="text-accent">{part}</span>
    }
    if (part === 'const') {
      return <span key={i} className="text-primary">{part}</span>
    }
    return <span key={i}>{part}</span>
  })
}

export default function CodeEditorPanel() {
  const shouldReduceMotion = useReducedMotion()
  const [visibleLines, setVisibleLines] = useState(shouldReduceMotion ? LINES.length : 0)
  const hasRun = useRef(false)

  useEffect(() => {
    if (hasRun.current || shouldReduceMotion) return
    hasRun.current = true

    let line = 0
    const interval = setInterval(() => {
      line += 1
      setVisibleLines(line)
      if (line >= LINES.length) clearInterval(interval)
    }, 260)

    return () => clearInterval(interval)
  }, [shouldReduceMotion])

  return (
    <div className="w-full max-w-md rounded-xl border border-primary-soft bg-surface shadow-lg overflow-hidden">
      <div className="flex items-center gap-2 border-b border-primary-soft px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-[#F76767]" />
        <span className="h-3 w-3 rounded-full bg-accent" />
        <span className="h-3 w-3 rounded-full bg-[#5FD37A]" />
        <span className="ml-2 font-mono text-xs text-text-secondary">diego.ts</span>
      </div>
      <div className="p-5 font-mono text-sm leading-7 text-text-secondary">
        {LINES.slice(0, visibleLines).map((line, idx) => (
          <div key={idx}>{highlight(line.text)}</div>
        ))}
      </div>
    </div>
  )
}
