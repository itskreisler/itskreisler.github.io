import { useState, useEffect } from 'react'
const useClock = () => {
  const [hora, setHora] = useState(new Date())
  useEffect(() => {
    setInterval(() => {
      setHora(new Date())
    }, 1000)
  }, [])
  return [hora]
}
const useDate = (date) => new Date(date)
const useDiffDate = (uno, dos) => Math.ceil(Math.abs(uno - dos) / 86400000)
export { useClock, useDiffDate, useDate }
