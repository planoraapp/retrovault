import { ReactNode } from 'react'
import Sidebar from './Sidebar'

interface LayoutProps {
  children: ReactNode
  currentPage: string
  onPageChange: (page: string) => void
}

export default function Layout({ children, currentPage, onPageChange }: LayoutProps) {
  return (
    <div className="min-h-screen dashboard-background text-gray-100 flex">
      <Sidebar currentPage={currentPage} onPageChange={onPageChange} />
      
      <main className="flex-1 flex flex-col md:ml-0">
        <div className="flex-1 p-6">
          {children}
        </div>
      </main>
    </div>
  )
}
