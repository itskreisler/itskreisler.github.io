import { useState, useRef, useEffect } from 'react'

/**
 * @param {Integer} time - tiempo en milisegundos
 * @return {Array<boolean,int>}
 */
const useActive = (time = 1000) => {
  const [active, setActive] = useState(false)
  const [tiempo, setTiempo] = useState(time)
  const timer = useRef()
  const countDown = useRef()
  const events = ['keypress', 'mousemove', 'touchmove', 'click', 'scroll']
  useEffect(() => {
    countDown.current && window.clearInterval(countDown.current)
    countDown.current = window.setInterval(() => {
      tiempo > 0 && setTiempo(tiempo - 1000)
    }, 1000)
  }, [tiempo, active])
  useEffect(() => {
    const handleEvent = () => {
      setActive(true)
      setTiempo(time)
      timer.current && window.clearTimeout(timer.current)
      timer.current = window.setTimeout(() => {
        setActive(false)
      }, time)
    }

    events.forEach((event) => document.addEventListener(event, handleEvent))
    return () => {
      events.forEach((event) =>
        document.removeEventListener(event, handleEvent)
      )
    }
  }, [timer])

  return [active, tiempo]
}

export { useActive }
