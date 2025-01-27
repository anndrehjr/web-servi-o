import React, { useState, useEffect } from "react"
import { Sun, Moon, ArrowRight, Check } from "lucide-react"
import { Button } from "./components/Button"
import { Card } from "./components/Card"

// Sample video URL - replace with your actual video
const VIDEO_URL = "/public/video.mp4"

const services = [
  {
    title: "Desenvolvimento Web",
    description: "Sites responsivos e otimizados para SEO, garantindo uma presença online eficaz.",
    imgSrc: "/imagens/desenvolvedor-web.jpg",
    features: ["Sites Responsivos", "E-commerce", "Otimização SEO", "Manutenção"],
    whatsappUrl:
      "https://wa.me/5518996791377?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20seus%20serviços%20de%20Desenvolvimento%20Web",
    isPrimary: true,
  },
  {
    title: "Design Gráfico",
    description: "Criação de identidade visual completa, desde logotipos até materiais promocionais.",
    imgSrc: "/imagens/Design Gráfico.png",
    features: ["Logotipos", "Branding", "Material Impresso", "Mídias Sociais"],
    whatsappUrl:
      "https://wa.me/5518996791377?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20seus%20serviços%20de%20Design%20Gráfico",
  },
  {
    title: "Marketing Digital",
    description: "Estratégias personalizadas para aumentar sua visibilidade online e atrair clientes.",
    imgSrc: "/imagens/MD.jpeg",
    features: ["SEO", "Gestão de Mídias Sociais", "Email Marketing", "Google Ads"],
    whatsappUrl:
      "https://wa.me/5518996791377?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20seus%20serviços%20de%20Marketing%20Digital",
  },
]

function ServicesSection({ services }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {services.map((service, index) => (
        <Card
          key={index}
          className={`bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 ${
            service.isPrimary ? "ring-4 ring-blue-500 transform scale-105" : ""
          }`}
        >
          <img src={service.imgSrc || "/placeholder.svg"} alt={service.title} className="w-full h-56 object-cover" />
          <div className="p-6">
            <h3 className="text-2xl font-bold mb-4 text-white">{service.title}</h3>
            <p className="text-gray-300 mb-6">{service.description}</p>
            <ul className="mb-8">
              {service.features.map((feature, idx) => (
                <li key={idx} className="flex items-center mb-2">
                  <Check className="w-5 h-5 mr-2 text-blue-400" />
                  <span className="text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>
            <a
              href={service.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full text-center bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-semibold transition duration-300"
            >
              Solicitar Orçamento
            </a>
          </div>
        </Card>
      ))}
    </div>
  )
}

function App() {
  const [theme, setTheme] = useState("dark")

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark"
    setTheme(savedTheme)
    document.body.classList.toggle("dark", savedTheme === "dark")
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark"
    setTheme(newTheme)
    document.body.classList.toggle("dark", newTheme === "dark")
    localStorage.setItem("theme", newTheme)
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Modern Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-gray-800 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              ASA Dev
            </span>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-700 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5 text-yellow-400" />
              ) : (
                <Moon className="w-5 h-5 text-blue-400" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section with Video Background */}
      <div className="relative h-screen">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster="/placeholder.svg"
        >
          <source src={VIDEO_URL} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative h-full flex items-center justify-center text-center">
          <div className="max-w-3xl mx-auto px-4">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Transformando Ideias em Realidade Digital
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Desenvolvimento web profissional e soluções digitais personalizadas
            </p>
            <a
              href="#services"
              className="inline-flex items-center px-8 py-3 text-lg font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-full transition-colors"
            >
              Nossos Serviços
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section id="services" className="py-24 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-16 text-white">Nossos Serviços</h2>
          <ServicesSection services={services} />
        </div>
      </section>
    </div>
  )
}

export default App

