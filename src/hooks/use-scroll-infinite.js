import { useState } from 'react'
import { useOn } from './use-on'
const useScrollInfinite = () => {
  const [scroll, setScroll] = useState(false)
  useOn('scroll', window, () => {
    const { scrollHeight, clientHeight, scrollTop } = document.documentElement
    setScroll(clientHeight + scrollTop >= scrollHeight)
  })
  return [scroll]
}
export { useScrollInfinite }
