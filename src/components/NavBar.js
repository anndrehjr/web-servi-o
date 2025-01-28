import React, { useState, useEffect } from "react"
import { Home, Info, Briefcase, PhoneCall, Sun, Moon } from "lucide-react"

export function NavBar() {
  const [theme, setTheme] = useState("dark")

  const navItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "sobre", label: "Sobre", icon: Info },
    { id: "servicos", label: "Serviços", icon: Briefcase },
    { id: "contatos", label: "Contatos", icon: PhoneCall },
  ]

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark"
    setTheme(savedTheme)
    document.documentElement.classList.toggle("dark", savedTheme === "dark")
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark"
    setTheme(newTheme)
    document.documentElement.classList.toggle("dark", newTheme === "dark")
    localStorage.setItem("theme", newTheme)
  }

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <nav className="fixed top-0 w-full z-50 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-600 bg-clip-text text-transparent">
            ASA Personalizados
          </span>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <item.icon className="w-5 h-5" />
                <span>{item.label}</span>
              </button>
            ))}
          </div>

          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "light" ? (
              <Moon className="w-5 h-5 text-blue-600" />
            ) : (
              <Sun className="w-5 h-5 text-yellow-500" />
            )}
          </button>
        </div>
      </div>
    </nav>
  )
}

