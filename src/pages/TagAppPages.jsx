import React from 'react'
import {

  Route

} from 'react-router-dom'
import Home from '@/pages/Home.jsx'
import Proyectos from '@/pages/Proyectos'
import Pruebas from '@/pages/Pruebas'
import PageTest from './PageTest'
export const pathTitle = ([path, title]) => { return { path, title } }
export const PATHS = {
  URL_DEFAULT: pathTitle(['/', 'Inicio']),
  URL_H: pathTitle(['/proyectos', 'Proyectos']),
  URL_P: pathTitle(['/pruebas', 'Pruebas']),
  URL_P_TEST: pathTitle(['/page-test', 'Pagina Test'])
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
  },
  {
    title: PATHS.URL_P.title,
    url: PATHS.URL_P.path,
    Component: () => <Pruebas/>
  },
  {
    title: PATHS.URL_P_TEST.title,
    url: PATHS.URL_P_TEST.path,
    Component: () => <PageTest/>
  }
]

const tagAppPages = () => {
  return appPages.map(({ url, Component }, index) => (
    <Route key={index} path={url} exact={true} element={<Component />} />
  ))
}

export default tagAppPages
