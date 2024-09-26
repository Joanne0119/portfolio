/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';

const Star = (props)  => {
    const starRef = useRef();

    useGSAP(() => {
        gsap.to(starRef.current.position, {
          y: starRef.current.position.y + 1,
          duration: 1.2,
          repeat: -1,
          yoyo: true,
        })
        gsap.to(starRef.current.rotation, {
            z: `${- Math.PI / 8}`,
            duration: 1.2,
            repeat: -1,
            yoyo: true,
        })
    });

  const { nodes, materials } = useGLTF('../public/models/Star.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        ref={starRef}
        castShadow
        receiveShadow
        geometry={nodes.Star.geometry}
        material={materials.star}
        rotation={[Math.PI / 2 - 0.1, 0, 0.6]}
        scale={[2.5, 2.5, 2.5]}
      />
    </group>
  )
}

useGLTF.preload('../public/models/Star.glb')

export default Star;