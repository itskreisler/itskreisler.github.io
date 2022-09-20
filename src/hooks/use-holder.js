import { useEffect, useRef } from 'react'
import { useScript } from '../hooks/use-script'

/**
 *
 * @param {String} dimensions - demensions
 * @param {String} theme - El tema a usar para el marcador de posición. Example: holder.js/300x200?theme=sky
 * @param {String} random - Use un tema aleatorio. Example: holder.js/300x200?random=yes
 * @param {String} bg - Color de fondo. Example: holder.js/300x200?bg=2a2025
 * @param {String} fg - Color de primer plano (texto). Example: holder.js/300x200?fg=ffffff
 * @param {String} text -Texto personalizado. Example: holder.js/300x200?text=Hello
 * @param {String} size - Tamaño de texto personalizado. El valor predeterminado a las unidades PT. Example: holder.js/300x200?size=50
 * @param {String} font - Fuente de texto personalizado. Example: holder.js/300x200?font=Helvetica
 * @param {String} align - Alineación de texto personalizado (izquierda, derecha). Example: holder.js/300x200?align=left
 * @param {String} outline - Dibuje el esquema y las diagonales para el marcador de posición. Example: holder.js/300x200?outline=yes
 * @param {String} lineWrap - Relación de longitud de línea máxima a ancho de imagen. Example: holder.js/300x200?lineWrap=0.5
 * @returns
 */
const useHolder = ({ dimensions, ...props }) => {
  // const { dimensions } = options
  const keys = Object.keys(props)
  const values = Object.values(props)
  const query = keys.map((key, index) => `${key}=${values[index]}`).join('&')
  const status = useScript('./holder.min.js')
  const placeholder = `holder.js/${dimensions}?${query}`
  const myImage = useRef()
  useEffect(() => {
    status === 'ready' &&
        (() => {
          !(typeof Holder === 'undefined') &&
            // TODO: Holder no funciona con npm
            // eslint-disable-next-line no-undef
            myImage.current && Holder.run({
            images: myImage.current
          })
        })()
  }, [status])
  return [placeholder, myImage, status]
}

export { useHolder }
