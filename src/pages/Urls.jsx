import React from 'react'
import Home from '@/pages/Home.jsx'
import Proyectos from '@/pages/Proyectos'
import Pruebas from '@/pages/Pruebas'
const pathTitle = ([path, title]) => { return { path, title } }
const PATHS = {
  URL_DEFAULT: pathTitle(['/', 'Inicio']),
  URL_H: pathTitle(['/proyectos', 'Proyectos']),
  URL_P: pathTitle(['/pruebas', 'Pruebas'])
}
const appPages = [
  {
    title: PATHS.URL_DEFAULT.title,
    url: PATHS.URL_DEFAULT.path,
    Component: () => <Home/>
  },
  {
    title: PATHS.URL_H.title,
    url: PATHS.URL_H.path,
    Component: () => <Proyectos/>
  },
  {
    title: PATHS.URL_P.title,
    url: PATHS.URL_P.path,
    Component: () => <Pruebas/>
  }
]
export { appPages, PATHS }
