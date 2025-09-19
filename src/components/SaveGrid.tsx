import SaveCard from './SaveCard'
import type { Save } from '../types'

interface SaveGridProps {
  saves: Save[]
}

export default function SaveGrid({ saves }: SaveGridProps) {
  if (saves.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-gray-400 text-lg mb-4">
          Nenhum save encontrado
        </div>
        <p className="text-gray-500">
          Tente ajustar os filtros ou fazer upload de um novo save
        </p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {saves.map((save) => (
        <SaveCard key={save.id} save={save} />
      ))}
    </div>
  )
}
