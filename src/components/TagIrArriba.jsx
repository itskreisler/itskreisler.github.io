import React, { useEffect, useState } from 'react'
import { useOn } from '../hooks/use-on'
import $ from 'jquery'
import './tagirarriba.scss'

const TagIrArriba = () => {
  const [visible, setVisible] = useState(false)
  const toggleVisible = () => {
    const { scrollTop } = document.documentElement
    setVisible(scrollTop > 10)
  }
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
  useOn('scroll', window, toggleVisible)
  useEffect(() => {
    visible ? $('.ir-arriba').slideDown(600) : $('.ir-arriba').slideUp(600)
    /* $('.ir-arriba').on({
      click: () => {
        $('body,html').animate({ scrollTop: '0px' }, 1000)
      }
    }) */

    /* $(window).on({
      scroll: () => {
        if ($(this).scrollTop() > 0) {
          console.log($('body').scrollTop())
          $('.ir-arriba').slideDown(600)
        } else {
          $('.ir-arriba').slideUp(600)
        }
      }

    }) */
  }, [visible])
  return (
    <a className="ir-arriba" title="Volver arriba" onClick={scrollToTop}>
      <span className="material-symbols-outlined rounded">expand_less</span>
    </a>
  )
}

export default TagIrArriba
