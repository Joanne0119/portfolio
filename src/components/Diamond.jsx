/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';

const Diamond = (props) => {
  const { nodes, materials } = useGLTF('../public/models/Diamond.glb')

  const diamondRef = useRef();

  useGSAP(() => {
    gsap.to(diamondRef.current.position, {
      y: diamondRef.current.position.y + 1,
      duration: 1.2,
      repeat: -1,
      yoyo: true,
    })
    gsap.to(diamondRef.current.rotation, {
        y: `${Math.PI}`,
        duration: 1.2,
        repeat: -1,
        yoyo: true,
    })
 });
  return (
    <group {...props} dispose={null}>
      <mesh ref={diamondRef} castShadow receiveShadow geometry={nodes.Diamond.geometry} material={materials.EXP} />
    </group>
  )
}

useGLTF.preload('../public/models/Diamond.glb')

export default Diamond