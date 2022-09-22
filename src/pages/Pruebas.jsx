import React from 'react'
import { useActive } from '../hooks/use-active'
import { useClock, useDiffDate } from '../hooks/use-new-date'
import Canvas from './Canvas'

const Pruebas = () => {
  const [active, time] = useActive(5000)
  const [locale] = useClock()

  const handleEnviar = () => {
    (async () => {

    })()
  }
  return (
    <>
      <div className="grid">
        <div>
          Estas {!active && 'in'}activo.
          <p>{time}</p>
          <p>
            <button onClick={handleEnviar}>Enviar</button>
          </p>
          {useDiffDate(new Date('2022-09-22'), new Date('2022-09-12'))}
          <pre>
            {JSON.stringify(
              {
                fecha: locale.toLocaleDateString(),
                hora: locale.toLocaleTimeString(),
                fecha_hora: locale.toLocaleString()
              },
              null,
              2
            )}
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
