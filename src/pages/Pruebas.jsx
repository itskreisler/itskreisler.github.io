import React, { useEffect, useState } from 'react'
import { useActive } from '../hooks/use-active'
import { useNewDate } from '../hooks/use-new-date'
import Canvas from './Canvas'

const Pruebas = () => {
  const [active, time] = useActive(5000)
  const [locale] = useNewDate()
  return (
    <>
      <div className="grid">
        <div>
          Estas {!active && 'in'}activo {time}
          <p>
<input type="text" />
          </p>
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
