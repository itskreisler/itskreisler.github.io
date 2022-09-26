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
/**
 * @param {Date} uno
 * @param {Date} dos
 * @return {number}
 */
const useDiffDate = (uno = new Date('2022-09-22'), dos = new Date('2022-09-12')) => Math.ceil(Math.abs(uno - dos) / 86400000)
export { useClock, useDiffDate, useDate }
