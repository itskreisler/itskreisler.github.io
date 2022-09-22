import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useTitle } from 'react-use'
import { useCurrentPath } from '../hooks/use-current-path'
import { useRouter } from '../hooks/use-router'
import { appPages } from '../pages/urls'

const Menu = () => {
  const { location, pathname, push } = useRouter()

  const temp = appPages.find(
    ({ url, title }) => useCurrentPath(url, location) && { title }
  )
  useTitle(`Le jaim | ${temp?.title}`)
  useEffect(() => {
    !temp && push('/')
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
