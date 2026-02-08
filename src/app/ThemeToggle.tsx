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
        <button className="cursor-pointer w-6 h-6" />
      </div>
    )
  }

  return (
    <div>
      <button className="cursor-pointer" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
        {
          theme === "dark" ? <Sun/> : <Moon/>
        }
      </button>
    </div>
  )
}

export default ThemeToggle
