import { useState } from 'react'
import { Menu, X } from 'lucide-react'

interface SidebarProps {
  currentPage: string
  onPageChange: (page: string) => void
}

export default function Sidebar({ currentPage, onPageChange }: SidebarProps) {
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  const navigationItems = [
    {
      id: 'landing',
      label: 'Início',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" fill="currentColor"></path>
        </svg>
      )
    },
    {
      id: 'dashboard',
      label: 'Dashboard',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 13H11V3H3V13ZM3 21H11V15H3V21ZM13 21H21V11H13V21ZM13 3V9H21V3H13Z" fill="currentColor"></path>
        </svg>
      )
    },
    {
      id: 'library',
      label: 'Biblioteca',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19ZM17 12H15V7H17V12ZM13 12H11V7H13V12ZM9 12H7V7H9V12Z" fill="currentColor"></path>
        </svg>
      )
    },
    {
      id: 'games',
      label: 'Jogos',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z" fill="currentColor"></path>
        </svg>
      )
    },
    {
      id: 'saves',
      label: 'Saves',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14 3H4V21H20V9L14 3ZM12 19H8V15H12V19ZM14 10H6V5H14V10Z" fill="currentColor"></path>
        </svg>
      )
    },
    {
      id: 'achievements',
      label: 'Conquistas',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z" fill="currentColor"></path>
        </svg>
      )
    },
    {
      id: 'firebase-test',
      label: 'Firebase Test',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill="currentColor"></path>
        </svg>
      )
    },
    {
      id: 'settings',
      label: 'Configurações',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19.14,12.94C19.18,12.64 19.20,12.33 19.20,12C19.20,11.67 19.18,11.36 19.14,11.06L21.16,9.48C21.34,9.34 21.39,9.07 21.28,8.87L19.36,5.44C19.24,5.21 18.99,5.12 18.77,5.17L16.38,5.86C15.88,5.41 15.35,5.05 14.76,4.78L14.40,2.32C14.36,2.07 14.16,1.88 13.91,1.88H10.09C9.84,1.88 9.64,2.07 9.60,2.32L9.24,4.78C8.65,5.05 8.12,5.41 7.62,5.86L5.23,5.17C5.01,5.12 4.76,5.21 4.64,5.44L2.72,8.87C2.61,9.07 2.66,9.34 2.84,9.48L4.86,11.06C4.82,11.36 4.80,11.69 4.80,12C4.80,12.31 4.82,12.64 4.86,12.94L2.84,14.52C2.66,14.66 2.61,14.93 2.72,15.13L4.64,18.56C4.76,18.79 5.01,18.88 5.23,18.83L7.62,18.14C8.12,18.59 8.65,18.95 9.24,19.22L9.60,21.68C9.64,21.93 9.84,22.12 10.09,22.12H13.91C14.16,22.12 14.36,21.93 14.40,21.68L14.76,19.22C15.35,18.95 15.88,18.59 16.38,18.14L18.77,18.83C18.99,18.88 19.24,18.79 19.36,18.56L21.28,15.13C21.39,14.93 21.34,14.66 21.16,14.52L19.14,12.94ZM12,15.6C10.02,15.6 8.4,13.98 8.4,12C8.4,10.02 10.02,8.4 12,8.4C13.98,8.4 15.6,10.02 15.6,12C15.6,13.98 13.98,15.6 12,15.6Z" fill="currentColor"></path>
        </svg>
      )
    }
  ]

  const handlePageChange = (page: string) => {
    onPageChange(page)
    setIsMobileOpen(false)
  }

  return (
    <>
      {/* Mobile Header */}
      <header className="md:hidden bg-gray-800 border-b border-gray-700 flex items-center justify-between p-4 sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <img 
            src="./logoimagetransp.png" 
            alt="RetroVault Logo" 
            className="w-12 h-12 object-contain"
          />
        </div>
        <button
          onClick={() => setIsMobileOpen(true)}
          className="text-white p-2 rounded-lg hover:bg-gray-700 transition-colors"
        >
          <Menu size={24} />
        </button>
      </header>

      {/* Mobile Overlay */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      {/* Mobile Sidebar */}
      <aside
        className={`fixed top-0 left-0 w-full h-full bg-gray-900 z-50 transform transition-transform duration-300 md:hidden ${
          isMobileOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-6">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <img 
                src="./logoimagetransp.png" 
                alt="RetroVault Logo" 
                className="w-16 h-16 object-contain"
              />
            </div>
            <button
              onClick={() => setIsMobileOpen(false)}
              className="text-white p-2 rounded-lg hover:bg-gray-700 transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          <nav className="space-y-2">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handlePageChange(item.id)}
                className={`w-full flex items-center gap-3 px-3 py-3 rounded-lg transition-colors text-left ${
                  currentPage === item.id
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                }`}
              >
                <div className="w-5 h-5 flex items-center justify-center">
                  {item.icon}
                </div>
                <span>{item.label}</span>
              </button>
            ))}
          </nav>

          <div className="mt-8 pt-6 border-t border-gray-700">
            <div className="flex items-center gap-3 px-3 py-3 rounded-lg text-gray-300">
              <div className="w-7 h-7 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                JD
              </div>
              <div>
                <div className="text-white font-medium text-sm">João Dev</div>
                <div className="text-gray-400 text-xs">Retro Gamer</div>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Desktop Sidebar */}
      <aside className="hidden md:flex flex-col w-20 hover:w-64 transition-all duration-300 bg-gray-800 border-r border-gray-700 h-screen sticky top-0 group">
        <div className="p-4">
          <div className="flex items-center justify-center group-hover:justify-start">
            <img 
              src="./logoimagetransp.png" 
              alt="RetroVault Logo" 
              className="w-10 h-10 object-contain flex-shrink-0 group-hover:w-12 group-hover:h-12 transition-all duration-300"
            />
          </div>
        </div>

        <nav className="flex-1 px-4 space-y-2">
          {navigationItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handlePageChange(item.id)}
              className={`w-full flex items-center gap-3 px-3 py-3 rounded-lg transition-all duration-200 text-left group-hover:justify-start ${
                currentPage === item.id
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-300 hover:bg-gray-700 hover:text-white'
              }`}
            >
              <div className="w-5 h-5 flex items-center justify-center flex-shrink-0">
                {item.icon}
              </div>
              <span className="whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {item.label}
              </span>
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-gray-700">
          <div className="flex items-center gap-3 px-3 py-3 rounded-lg text-gray-300 group-hover:bg-gray-700 transition-colors">
            <div className="w-7 h-7 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold text-sm flex-shrink-0">
              JD
            </div>
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="text-white font-medium text-sm">João Dev</div>
              <div className="text-gray-400 text-xs">Retro Gamer</div>
            </div>
          </div>
        </div>
      </aside>
    </>
  )
}
