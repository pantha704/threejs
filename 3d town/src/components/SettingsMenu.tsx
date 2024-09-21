import { useState } from 'react'
import { Settings } from 'lucide-react'

export default function SettingsMenu({ showNPCs, setShowNPCs, showCars, setShowCars, time, setTime, showShootingStars, setShowShootingStars }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed bottom-4 right-4">
      <button
        className={`bg-gray-800 text-white rounded-full p-3 shadow-lg transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <Settings size={24} />
      </button>
      {isOpen && (
        <div className="absolute bottom-16 right-0 bg-white rounded-lg shadow-xl p-4 w-64">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span>Show NPCs</span>
              <input type="checkbox" checked={showNPCs} onChange={() => setShowNPCs(!showNPCs)} />
            </div>
            <div className="flex items-center justify-between">
              <span>Show Cars</span>
              <input type="checkbox" checked={showCars} onChange={() => setShowCars(!showCars)} />
            </div>
            <div className="flex items-center justify-between">
              <span>Show Shooting Stars</span>
              <input type="checkbox" checked={showShootingStars} onChange={() => setShowShootingStars(!showShootingStars)} />
            </div>
            <div>
              <span>Time of Day</span>
              <input
                type="range"
                min="0"
                max="24"
                step="0.1"
                value={time}
                onChange={(e) => setTime(parseFloat(e.target.value))}
                className="w-full"
              />
              <span>{Math.floor(time)}:{Math.floor((time % 1) * 60).toString().padStart(2, '0')}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}