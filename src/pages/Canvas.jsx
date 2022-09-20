import React, { useEffect, useRef } from 'react'

const Canvas = (props) => {
  const canvasRef = useRef(null)
  const draw = (ctx) => {
    ctx.fillStyle = '#000000'
    ctx.beginPath()
    ctx.arc(50, 100, 20, 0, 2 * Math.PI)
    ctx.fill()
  }
  /**
   *
   * @param {*} ctx - canvas context
   * @param {*} xS - x position start
   * @param {*} yS - y position start
   * @param {*} xE - x position end
   * @param {*} yE - y position end
   */
  const moverA = (ctx, xS = 0, yS = 0, xE = 50, yE = 50) => {
    ctx.beginPath()
    ctx.moveTo(xS, yS)

    ctx.lineTo(xE, yE)

    ctx.stroke()
  }
  /**
   *
   * @param {*} ctx - Canvas
   * @param {*} xS - X position start
   * @param {*} yS - Y position start
   * @param {*} ratio - ratio
   * @param {*} t
   * @param {*} round - Round
   */
  const circle = (
    ctx,
    xS = 100,
    yS = 70,
    ratio = 50,
    t = 0,
    round = 2 * Math.PI
  ) => {
    ctx.beginPath()
    ctx.arc(xS, yS, ratio, t, round)
    ctx.stroke()
  }
  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    context.fillRect(0, 0, 100, 100)
    context.fillStyle = 'white'
    context.lineWidth = 2
    context.lineCap = 'round'
    context.strokeStyle = '#ff0000'
    // Our draw come here
    // draw(context)
    // head
    circle(context, 60, 20 + 10, 10);

    // table
    [
      [10, 10, 10, 90],
      [10, 10, 60, 10],
      [60, 10, 60, 20],
      [60, 60, 60, 40],
      [60, 40, 40, 60],
      [60, 40, 80, 60],
      [40, 90, 60, 60],
      [80, 90, 60, 60],
      [10, 90, 90, 90]
    ].forEach(([xS, yS, xE, yE]) => {
      moverA(context, xS, yS, xE, yE)
    })

    // moverA(context, 10, 10, 10, 90)
    // moverA(context, 10, 10, 60, 10)
    // moverA(context, 60, 10, 60, 20)

    // body
    // moverA(context, 60, 60, 60, 40)

    // brazos
    // moverA(context, 60, 40, 40, 60)
    // moverA(context, 60, 40, 80, 60)

    // piernas
    // moverA(context, 40, 90, 60, 60)
    // moverA(context, 80, 90, 60, 60)
  }, [moverA, circle])

  return <canvas ref={canvasRef} {...props} />
}

export default Canvas
