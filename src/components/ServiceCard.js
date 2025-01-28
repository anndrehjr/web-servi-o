import React from 'react'
import { Check } from 'lucide-react'

// Componente ServiceCard: Card individual para cada serviço
// - Mostra imagem, título, descrição
// - Lista recursos com ícones de check
// - Botão de orçamento que redireciona para WhatsApp
export function ServiceCard({ title, description, imgSrc, features, whatsappUrl, isPrimary }) {
  return (
    <div className={`bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden h-full transition-all duration-300 hover:scale-[1.02] ${
      isPrimary ? "ring-2 ring-blue-500 dark:ring-blue-400" : ""
    }`}>
      <img src={imgSrc || "/placeholder.svg"} alt={title} className="w-full h-56 object-cover" />
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-6">{description}</p>
        <ul className="mb-8 space-y-3">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-center">
              <Check className="w-5 h-5 mr-2 text-blue-600 dark:text-blue-400 flex-shrink-0" />
              <span className="text-gray-700 dark:text-gray-300">{feature}</span>
            </li>
          ))}
        </ul>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block w-full text-center bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold transition duration-300"
        >
          Solicitar Orçamento
        </a>
      </div>
    </div>
  )
}
