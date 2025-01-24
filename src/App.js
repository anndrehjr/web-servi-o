import React, { useState, useRef, useEffect } from "react";
import {
  Sun,
  Moon,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";
import { Button } from "./components/Button";
import { Card } from "./components/Card";
import LoadingAnimation from "./components/LoadingAnimation";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const navItems = [
  { id: "header", label: "Home" },
  { id: "sobre", label: "Sobre" },
  { id: "servicos", label: "Serviços" },
  { id: "footer", label: "Contatos" },
];

const services = [
  {
    title: "Desenvolvimento Web",
    description:
      "Sites responsivos e otimizados para SEO, garantindo uma presença online eficaz.",
    imgSrc: "/imagens/desenvolvedor-web.jpg",
    features: [
      "Sites Responsivos",
      "E-commerce",
      "Otimização SEO",
      "Manutenção",
    ],
    whatsappUrl:
      "https://wa.me/5518996791377?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20seus%20serviços%20de%20Desenvolvimento%20Web",
  },
  {
    title: "Design Gráfico",
    description:
      "Criação de identidade visual completa, desde logotipos até materiais promocionais.",
    imgSrc: "/imagens/Design Gráfico.png",
    features: ["Logotipos", "Branding", "Material Impresso", "Mídias Sociais"],
    whatsappUrl:
      "https://wa.me/5518996791377?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20seus%20serviços%20de%20Design%20Gráfico",
  },
  {
    title: "Marketing Digital",
    description:
      "Estratégias personalizadas para aumentar sua visibilidade online e atrair clientes.",
    imgSrc: "/imagens/MD.jpeg",
    features: [
      "SEO",
      "Gestão de Mídias Sociais",
      "Email Marketing",
      "Google Ads",
    ],
    whatsappUrl:
      "https://wa.me/5518996791377?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20seus%20serviços%20de%20Marketing%20Digital",
  },
];

export default function App() {
  const [theme, setTheme] = useState("light");
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [loading, setLoading] = useState(true);

  const sectionRefs = {
    header: useRef(null),
    sobre: useRef(null),
    servicos: useRef(null),
    footer: useRef(null),
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (!savedTheme) {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setTheme(prefersDark ? "dark" : "light");
    }
  }, []);

  useEffect(() => {
    document.body.classList.toggle("dark", theme === "dark");
  }, [theme]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 seconds loading time

    return () => clearTimeout(timer);
  }, []);

  const toggleTheme = () =>
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));

  const scrollToSection = (id) => {
    sectionRefs[id]?.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {loading && <LoadingAnimation />}
      <div className="font-sans bg-gray-100 dark:bg-gray-950 text-gray-800 dark:text-gray-100">
        <section ref={sectionRefs.header} className="relative">
          <div
            id="carouselExampleAutoplaying"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src="/imagens/imagde.png"
                  className="d-block w-full h-screen object-cover"
                  alt="Serviços de Desenvolvimento Web"
                />
                <div className="carousel-caption d-none d-md-block bg-black bg-opacity-70 rounded p-4">
                  <h5 className="text-2xl font-bold">Desenvolvimento Web</h5>
                  <p className="text-lg">
                    Soluções web personalizadas para seu negócio
                  </p>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  src="/imagens/image.png"
                  className="d-block w-full h-screen object-cover"
                  alt="Serviços de Design"
                />
                <div className="carousel-caption d-none d-md-block bg-black bg-opacity-70 rounded p-4">
                  <h5 className="text-2xl font-bold">Design Gráfico</h5>
                  <p className="text-lg">
                    Identidade visual que destaca sua marca
                  </p>
                </div>
              </div>
            </div>
            <Button
              className="carousel-control-prev"
              data-bs-target="#carouselExampleAutoplaying"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Anterior</span>
            </Button>
            <Button
              className="carousel-control-next"
              data-bs-target="#carouselExampleAutoplaying"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Próximo</span>
            </Button>
          </div>
        </section>

        {isHeaderVisible && (
          <header className="fixed top-0 w-full z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md">
            <nav className="container mx-auto p-4 flex justify-between items-center">
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                ASA Personalizados
              </h1>
              <ul className="hidden md:flex gap-6">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <Button
                      onClick={() => scrollToSection(item.id)}
                      className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      {item.label}
                    </Button>
                  </li>
                ))}
              </ul>
              <Button
                onClick={toggleTheme}
                className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full transition-colors"
              >
                {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
              </Button>
            </nav>
          </header>
        )}

        <main>
          <section
            ref={sectionRefs.sobre}
            className="py-20 bg-white dark:bg-gray-900"
          >
            <div className="container mx-auto px-4">
              <h1 className="text-5xl font-bold mb-8 text-center text-black dark:text-black">
                ASA Personalizados
              </h1>
              <h2 className="text-3xl text-gray-600 dark:text-black mb-10 text-center">
                Transformando Ideias em Realidade
              </h2>
              <p className="text-xl text-center max-w-3xl mx-auto leading-relaxed text-gray-700 dark:text-black">
                Somos especialistas em criar soluções digitais personalizadas
                que impulsionam o sucesso do seu negócio. Com uma equipe
                apaixonada e criativa, oferecemos serviços de desenvolvimento
                web, design gráfico e marketing digital que transformam sua
                visão em resultados tangíveis.
              </p>
            </div>
          </section>

          <section
            ref={sectionRefs.servicos}
            className="py-20 bg-gray-100 dark:bg-gray-800"
          >
            <div className="container mx-auto px-4">
              <h1 className="text-5xl font-bold text-center mb-16">
                Nossos Serviços
              </h1>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {services.map((service, index) => (
                  <Card
                    key={index}
                    className="bg-white dark:bg-black rounded-xl overflow-hidden shadow-lg dark:shadow-xl hover:shadow-2xl transition-shadow duration-300"
                    >
                    <img
                      src={service.imgSrc || "/placeholder.svg"}
                      alt={service.title}
                      className="w-full h-56 object-cover"
                    />
                    <div className="p-6">
                      <h2 className="text-2xl font-bold mb-4 text-gray-600 dark:text-gray-900">
                        {service.title}
                      </h2>
                      <p className="text-gray-600 dark:text-gray-900 mb-6">
                        {service.description}
                      </p>
                      <ul className="mb-8">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center mb-2">
                            <svg
                              className="w-5 h-5 mr-2 text-blue-500"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M5 13l4 4L19 7"
                              ></path>
                            </svg>
                            <span className="text-gray-700 dark:text-gray-900">
                              {feature}
                            </span>
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
            </div>
          </section>

          <footer
            ref={sectionRefs.footer}
            className="bg-gray-900 text-white py-16"
          >
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                <div>
                  <h3 className="text-3xl font-bold mb-6">
                    ASA Personalizados
                  </h3>
                  <p className="mb-6 text-gray-300">
                    Transformando ideias em soluções digitais inovadoras desde
                    2010.
                  </p>
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="text-white hover:text-blue-400 transition-colors"
                    >
                      <Facebook size={24} />
                    </a>
                    <a
                      href="#"
                      className="text-white hover:text-pink-400 transition-colors"
                    >
                      <Instagram size={24} />
                    </a>
                    <a
                      href="#"
                      className="text-white hover:text-blue-600 transition-colors"
                    >
                      <Linkedin size={24} />
                    </a>
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-6">Serviços</h4>
                  <ul className="space-y-3">
                    <li>
                      <a
                        href="#"
                        className="text-gray-300 hover:text-white transition-colors"
                      >
                        Desenvolvimento Web
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-gray-300 hover:text-white transition-colors"
                      >
                        Design Gráfico
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-gray-300 hover:text-white transition-colors"
                      >
                        Marketing Digital
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-gray-300 hover:text-white transition-colors"
                      >
                        Consultoria em TI
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-6">Links Úteis</h4>
                  <ul className="space-y-3">
                    <li>
                      <a
                        href="#"
                        className="text-gray-300 hover:text-white transition-colors"
                      >
                        Sobre Nós
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-gray-300 hover:text-white transition-colors"
                      >
                        Projetos
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-gray-300 hover:text-white transition-colors"
                      >
                        Blog
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-gray-300 hover:text-white transition-colors"
                      >
                        Política de Privacidade
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-6">Contato</h4>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <Phone size={18} className="mr-2 text-blue-400" />
                      <a
                        href="https://wa.me/5518996791377"
                        className="text-gray-300 hover:text-white transition-colors"
                      >
                        (18) 99679-1377
                      </a>
                    </li>
                    <li className="flex items-center">
                      <Phone size={18} className="mr-2 text-blue-400" />
                      <a
                        href="https://wa.me/5518996798352"
                        className="text-gray-300 hover:text-white transition-colors"
                      >
                        (18) 99679-8352
                      </a>
                    </li>
                    <li className="flex items-center">
                      <Mail size={18} className="mr-2 text-blue-400" />
                      <a
                        href="mailto:anndreh01@gmail.com"
                        className="text-gray-300 hover:text-white transition-colors"
                      >
                        anndreh01@gmail.com
                      </a>
                    </li>
                    <li className="flex items-center">
                      <MapPin size={18} className="mr-2 text-blue-400" />
                      <span className="text-gray-300">
                        Presidente Prudente, SP
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="border-t border-gray-800 mt-12 pt-8 text-center">
                <p className="text-gray-400">
                  &copy; 2023 ASA Personalizados. Todos os direitos reservados.
                </p>
              </div>
            </div>
          </footer>
        </main>
      </div>
    </>
  );
}
