import { Sun, Moon, Cloud } from 'lucide-react'

export default function TimeIcon({ time }) {
  if (time >= 6 && time < 10) return <Sun size={24} />
  if (time >= 10 && time < 16) return <Sun size={24} />
  if (time >= 16 && time < 20) return <Cloud size={24} />
  return <Moon size={24} />
}