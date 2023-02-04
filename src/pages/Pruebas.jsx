import React from 'react'
import { useAppContext } from '../context/AppContext'

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

        </div>
      </div>
    </>
  )
}

export default Pruebas
