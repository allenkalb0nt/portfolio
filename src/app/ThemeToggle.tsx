'use client'

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"


const ThemeToggle = () => {
  const {theme, setTheme} = useTheme()
  // to prevent hydration mismatch, wait until the component is mounted before rendering the theme toggle button
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div>
        {/* to prevent hydration mismatch, render a placeholder button until the component is mounted */}
        <button className="cursor-pointer w-5 h-5 sm:w-6 sm:h-6" />
      </div>
    )
  }

  return (
    <div>
      <button 
        className="cursor-pointer hover:scale-110 transition-transform duration-200 p-1" 
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        aria-label="Toggle theme"
      >
        {
          theme === "dark" ? <Sun className="w-5 h-5 sm:w-6 sm:h-6" /> : <Moon className="w-5 h-5 sm:w-6 sm:h-6" />
        }
      </button>
    </div>
  )
}

export default ThemeToggle
