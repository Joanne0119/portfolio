import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

const Award = (props) => {
  const { scene } = useGLTF('/models/Award.glb')
  const awardRef = useRef()

  useGSAP(() => {
    if (!awardRef.current) return
    gsap.to(awardRef.current.rotation, {
      y: `+=${Math.PI * 2}`,
      duration: 6,
      repeat: -1,
      ease: 'none',
    })
    gsap.to(awardRef.current.position, {
      y: awardRef.current.position.y + 0.3,
      duration: 1.6,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    })
  })

  return (
    <group {...props} dispose={null} ref={awardRef}>
      <primitive object={scene} />
    </group>
  )
}

useGLTF.preload('/models/Award.glb')

export default Award
