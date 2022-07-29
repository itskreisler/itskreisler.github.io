import React, { useEffect } from 'react'
import { useLocation, useNavigate, Link } from 'react-router-dom'
import { appPages } from '../pages/urls'

const Menu = () => {
  const { pathname } = useLocation()
  const navigateTo = useNavigate()
  const temp = appPages.find(({ url, title }) => url === pathname && { title })
  useEffect(() => {
    !temp && navigateTo('/')
    document.title = temp?.title
  }, [temp])
  return (
    <nav>
      <ul>
        <li>
          <strong>Kreisler</strong>
        </li>
      </ul>
      <ul>
        {appPages.map(({ url, title }, index) => {
          return (
            <li key={index}>

              <Link role={pathname === url ? 'button' : ''} to={url}>{title}</Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Menu
