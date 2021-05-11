import React, { useEffect, useState, useRef } from 'react'
import { Engine, Render, Runner, World, Bodies, Body } from 'matter-js'

const STATIC_DENSITY = 15
const PARTICLE_SIZE = 6
const PARTICLE_BOUNCYNESS = 0.9

export const MatterStepThree = () => {
  const boxRef = useRef(null)
  const canvasRef = useRef(null)
  const [constraints, setContraints] = useState()
  const [scene, setScene] = useState()
  const [someStateValue, setSomeStateValue] = useState(false)
  const handleResize = () => {
    setContraints(boxRef.current.getBoundingClientRect())
  }
  const handleClick = () => {
    setSomeStateValue(!someStateValue)
  }
  useEffect(() => {
    const engine = Engine.create({})
    const render = Render.create({
      element: boxRef.current,
      engine,
      canvas: canvasRef.current,
      options: {
        background: 'transparent',
        wireframes: false,
      },
    })
    const floor = Bodies.rectangle(0, 0, 0, STATIC_DENSITY, {
      isStatic: true,
      render: {
        fillStyle: 'blue',
      },
    })
    World.add(engine.world, [floor])
    Engine.run(engine)
    Render.run(render)
    setContraints(boxRef.current.getBoundingClientRect())
    setScene(render)
  }, [])

  useEffect(() => {
    // Add a new "ball" everytime `someStateValue` changes
    if (scene) {
      let { width } = constraints
      let randomX = Math.floor(Math.random() * -width) + width
      World.add(
        scene.engine.world,
        Bodies.circle(randomX, -PARTICLE_SIZE, PARTICLE_SIZE, {
          restitution: PARTICLE_BOUNCYNESS,
        }),
      )
    }
  }, [someStateValue])
  return (
    <div>
      <button
        onClick={() => handleClick()}
      >
        Checkout
      </button>
      <div
        ref={boxRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
        }}
      >
        <canvas ref={canvasRef} />
      </div>
    </div>
  )
}

export default MatterStepThree