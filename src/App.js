import React from "react"
import { ArrowRight } from "lucide-react"
import { NavBar } from "./components/NavBar"
import { ServiceCard } from "./components/ServiceCard"
import { Footer } from "./components/Footer"

// Arquivo principal que monta toda a aplicação
// - Importa e organiza todos os componentes
// - Define os dados dos serviços
// - Estrutura o layout geral do site

// Dados dos serviços oferecidos
const services = [
  {
    title: "Desenvolvimento Web",
    description: "Sites responsivos e otimizados para SEO, garantindo uma presença online eficaz.",
    imgSrc: "/imagens/desenvolvedor-web.jpg",
    features: ["Sites Responsivos", "E-commerce", "Otimização SEO", "Manutenção"],
    whatsappUrl:
      "https://wa.me/5518996791377?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20seus%20serviços%20de%20Desenvolvimento%20Web",
  },
  {
    title: "Design Gráfico",
    description: "Criação de identidade visual completa, desde logotipos até materiais promocionais.",
    imgSrc: "/imagens/Design Gráfico.png",
    features: ["Logotipos", "Branding", "Material Impresso", "Mídias Sociais"],
    whatsappUrl:
      "https://wa.me/5518996791377?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20seus%20serviços%20de%20Design%20Gráfico",
    isPrimary: true, // Serviço em destaque
    link: "/servicos/desenvolvimento-web", // Link para a página de detalhes do serviço
  },
  {
    title: "Marketing Digital",
    description: "Estratégias personalizadas para aumentar sua visibilidade online e atrair clientes.",
    imgSrc: "/imagens/MD.jpeg",
    features: ["SEO", "Gestão de Mídias Sociais", "Email Marketing", "Google Ads"],
    whatsappUrl:
      "https://wa.me/5518996791377?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20seus%20serviços%20de%20Marketing%20Digital",
  },
  {
    title: "Artigos Personalizados",
    description: "Elaborando artigos, blog posts, e-books e documentos técnicos.",
    imgSrc: "/imagens/personalizados-03.webp",
    features: ["Artigos", "Blog Posts", "E-books", "Documentos Técnicos"],
    whatsappUrl:
      "https://wa.me/5518996798352?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20seus%20serviços%20de%20Artigos%20Personalizados",
  },
  {
    
    title: "Outros Serviços",
    description: "Consultoria em TI, suporte técnico, manutenção de computadores e notebooks.",
    imgSrc: "/imagens/manuteção.jpg",
    features: ["Consultoria e Suporte", "Suporte Técnico", "Manutenção de Computadores", "Manutenção de Notebook"],
    whatsappUrl:
      "https://wa.me/5518996791377?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20seus%20serviços%20de%20Consultoria%20e%20Suporte",
  },
  {
    title: "Outros Serviços",
    description: "Consultoria em TI, suporte técnico, manutenção de computadores e notebooks.",
    imgSrc: "/imagens/manutenção.jpg",
    features: ["Consultoria e Suporte", "Suporte Técnico", "Manutenção de Computadores", "Manutenção de Notebook"],
    whatsappUrl:
      "https://wa.me/5518996791377?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20seus%20serviços%20de%20Consultoria%20e%20Suporte",
  },
 
]

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <NavBar />

      {/* Seção Hero com Vídeo de Fundo */}
      <div id="home" className="relative h-screen">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster="/placeholder.svg"
        >
          <source src="/video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative h-full flex items-center justify-center text-center">
          <div className="max-w-3xl mx-auto px-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              Transformando ideias em realidade
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Desenvolvimento web profissional e soluções personalizadas para o seu negócio
            </p>
            <a
              href="#servicos"
              className="inline-flex items-center px-8 py-3 text-lg font-medium text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 rounded-full transition-colors"
            >
              Nossos Serviços
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Seção Sobre (adicionada) */}
      <section id="sobre" className="py-24 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900 dark:text-white">Sobre Nós</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto text-center">
            A ASA Personalizados é uma empresa especializada em soluções digitais, focada em transformar ideias em realidade. Nossa
            equipe de profissionais altamente qualificados está comprometida em fornecer serviços de alta qualidade em
            desenvolvimento web, design gráfico e marketing digital.
          </p>
        </div>
      </section>

      {/* Seção de Serviços */}
      <section id="servicos" className="py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900 dark:text-white">
            Nossos Serviços
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer (com id "contatos") */}
      <div id="contatos">
        <Footer />
      </div>
    </div>
  )
}

export default App

