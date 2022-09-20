import { useState, useRef, useEffect } from 'react'

const useActive = (time = 1000) => {
  const [active, setActive] = useState(false)
  const [tiempo] = useState(time)
  const timer = useRef()
  const events = ['keypress', 'mousemove', 'touchmove', 'click', 'scroll']
  useEffect(() => {
    const handleEvent = () => {
      setActive(true)
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
