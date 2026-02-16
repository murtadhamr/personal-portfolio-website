import { useState, useEffect } from 'react'
import { FiSun, FiMoon } from 'react-icons/fi'
import './ThemeToggle.css'

export default function ThemeToggle() {
    const [dark, setDark] = useState(() => {
        const saved = localStorage.getItem('theme')
        if (saved) return saved === 'dark'
        return window.matchMedia('(prefers-color-scheme: dark)').matches
    })

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light')
        localStorage.setItem('theme', dark ? 'dark' : 'light')
    }, [dark])

    return (
        <button
            className="theme-toggle"
            onClick={() => setDark((d) => !d)}
            aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
        >
            {dark ? <FiSun /> : <FiMoon />}
        </button>
    )
}
