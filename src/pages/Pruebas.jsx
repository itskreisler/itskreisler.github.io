import React from 'react'
import { useAppContext } from '../context/AppContext'
import Canvas from './Canvas'

const Pruebas = () => {
  const { lang, locales, setLoadLocales } = useAppContext()

  return (
    <>
      <div className="grid">
        <div>
          <p>
            <select value={lang} onChange={({ target }) => setLoadLocales(target.value) }>
              <option value="es">Español</option>
              <option value="en">Ingles</option>
            </select>
          </p>
          <pre>{JSON.stringify(locales, null, 2)}</pre>
          <pre>

          </pre>
        </div>
      </div>
      <div className="grid">
        <div>
          <Canvas
            style={{
              border: '1px solid #d3d3d3'
            }}
            width="100"
            height="100"
          />
        </div>
      </div>
    </>
  )
}

export default Pruebas
