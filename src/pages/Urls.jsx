import React from 'react'
import Home from '@/pages/Home.jsx'
import Proyectos from '@/pages/Proyectos'
const pathTitle = ([path, title]) => { return { path, title } }
export const PATHS = {
  URL_DEFAULT: pathTitle(['/', 'Inicio']),
  URL_H: pathTitle(['/proyectos', 'Proyectos'])
}
export const appPages = [
  {
    title: PATHS.URL_DEFAULT.title,
    url: PATHS.URL_DEFAULT.path,
    Component: () => <Home/>
  },
  {
    title: PATHS.URL_H.title,
    url: PATHS.URL_H.path,
    Component: () => <Proyectos/>
  }]
