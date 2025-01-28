import React from 'react'
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react'

// Componente Footer: Rodapé do site
// - Mostra informações de contato
// - Links para redes sociais
// - Seção "Sobre Nós"
export function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Sobre Nós</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Transformando ideias em realidade digital com soluções inovadoras e personalizadas para o seu negócio.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Contato</h3>
            <div className="space-y-3">
              <a href="tel:+5518996791377" className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                <Phone className="w-5 h-5 mr-2" />
                (18) 99679-1377
              </a>
              <a href="mailto:contato@asadev.com" className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                <Mail className="w-5 h-5 mr-2" />
                contato@asadev.com
              </a>
              <div className="flex items-center text-gray-600 dark:text-gray-300">
                <MapPin className="w-5 h-5 mr-2" />
                Presidente Prudente, SP
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Redes Sociais</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800 text-center text-gray-600 dark:text-gray-300">
          <p>&copy; {new Date().getFullYear()} ASA Dev. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
