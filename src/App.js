import React, { useState, useRef, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const navItems = [
  { id: 'header', label: 'Home' },
  { id: 'sobre', label: 'Sobre' },
  { id: 'servicos', label: 'Serviços' },
  { id: 'footer', label: 'Contatos' },
];

const services = [
  {
    title: 'Desenvolvimento Web',
    description: 'Desenvolvimento de sites, blogs, lojas virtuais e sistemas web.',
    imgSrc: '/imagens/desenvolvedor-web.jpg',
    whatsappUrl: 'https://wa.me/5518996791377',
  },
  {
    title: 'Design Gráfico',
    description: 'Criação de logotipos, banners, cartões de visita e identidade visual.',
    imgSrc: '/imagens/Design Gráfico.png',
    whatsappUrl: 'https://wa.me/5518996791377',
  },
];

export default function App() {
  const [theme, setTheme] = useState('light');
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);

  const sectionRefs = {
    header: useRef(null),
    sobre: useRef(null),
    servicos: useRef(null),
    footer: useRef(null),
  };

  useEffect(() => {
    document.body.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  const toggleTheme = () => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));

  const scrollToSection = (id) => {
    sectionRefs[id]?.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="font-sans bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      {isHeaderVisible && (
        <header id="header" className="fixed top-0 w-full bg-white dark:bg-gray-800 shadow-md z-50">
          <nav className="container mx-auto p-4 flex justify-between items-center">
            <h1 className="text-xl font-bold">ASA Personalizados</h1>
            <ul className="flex gap-4">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="text-gray-800 dark:text-gray-200 hover:underline"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
            <button onClick={toggleTheme} className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full">
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </nav>
        </header>
      )}

      <main className="mt-20">
        {/* Carrossel com Bootstrap */}
        <section ref={sectionRefs.header} className="p-8">
          <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="/imagens/imagde.png" className="d-block w-100 rounded-lg shadow-md" alt="Primeiro Slide" />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Primeiro Slide</h5>
                  <p>Descrição do primeiro slide.</p>
                </div>
              </div>
              <div className="carousel-item">
                <img src="/imagens/image.png" className="d-block w-100 rounded-lg shadow-md" alt="Segundo Slide" />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Segundo Slide</h5>
                  <p>Descrição do segundo slide.</p>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleAutoplaying"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleAutoplaying"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </section>

        {/* Seção Sobre */}
        <section ref={sectionRefs.sobre} className="p-8 text-center">
          <h1 className="text-3xl font-bold mb-4">ASA Personalizados</h1>
          <h2 className="text-xl">Transformando Ideias em Realidade</h2>
        </section>

        {/* Seção Serviços */}
        <section ref={sectionRefs.servicos} className="p-8 bg-gray-100 dark:bg-gray-800">
          <h1 className="text-3xl font-bold text-center mb-8">Serviços</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="card border p-4 rounded-lg bg-white dark:bg-gray-700 shadow-md">
                <img src={service.imgSrc} alt={service.title} className="w-full h-48 object-cover rounded-md mb-4" />
                <h2 className="text-xl font-bold mb-2">{service.title}</h2>
                <p className="mb-4">{service.description}</p>
                <a
                  href={service.whatsappUrl}
                  className="text-blue-500 hover:underline"
                >
                  Enviar WhatsApp
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Rodapé */}
        <footer ref={sectionRefs.footer} className="p-8 bg-gray-200 dark:bg-gray-900">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h1 className="text-2xl font-bold mb-4">ASA Personalizados</h1>
              <p>
                Telefone: <a href="https://wa.me/5518996791377" className="text-blue-500">(18) 99679-1377</a>
              </p>
              <p>
                Telefone: <a href="https://wa.me/5518996798352" className="text-blue-500">(18) 99679-8352</a>
              </p>
              <p>
                Email: <a href="mailto:anndreh01@gmail.com" className="text-blue-500">anndreh01@gmail.com</a>
              </p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
