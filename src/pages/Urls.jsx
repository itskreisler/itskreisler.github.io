import React from 'react'
const pathTitle = ([path, title]) => { return { path, title } }
const PATHS = {
  URL_DEFAULT: pathTitle(['/', 'Inicio']),
  URL_H: pathTitle(['/home', 'Hogar'])
}
const appPages = [
  {
    title: PATHS.URL_DEFAULT.title,
    url: PATHS.URL_DEFAULT.path,
    Component: () => {
      return <>Inicio</>
    }
  },
  {
    title: PATHS.URL_H.title,
    url: PATHS.URL_H.path,
    Component: () => {
      return <>HOGAR</>
    }
  }]
export { PATHS, appPages }
