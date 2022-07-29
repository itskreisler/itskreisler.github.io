import React from 'react'
import Home from './Home'
const pathTitle = ([path, title]) => { return { path, title } }
const PATHS = {
  URL_DEFAULT: pathTitle(['/', 'Inicio']),
  URL_H: pathTitle(['/skllis', 'Skllis'])
}
const appPages = [
  {
    title: PATHS.URL_DEFAULT.title,
    url: PATHS.URL_DEFAULT.path,
    Component: <Home/>
  },
  {
    title: PATHS.URL_H.title,
    url: PATHS.URL_H.path,
    Component: () => {
      return <>Habilidades</>
    }
  }]
export { PATHS, appPages }
