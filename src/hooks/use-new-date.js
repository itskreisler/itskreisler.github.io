import { useState, useEffect } from 'react'
const useNewDate = () => {
  const [hora, setHora] = useState(new Date())
  useEffect(() => {
    setInterval(() => {
      setHora(new Date())
    }, 1000)
  }, [])
  return [hora]
}

export { useNewDate }
