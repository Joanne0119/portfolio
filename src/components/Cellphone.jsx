/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF, useTexture, useVideoTexture } from '@react-three/drei'
import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';
import { useMediaQuery } from 'react-responsive'

const Cellphone = (props) => {
  const phoneRef = useRef();

    useGSAP(() => {
      gsap.to(phoneRef.current.position, {
        y: phoneRef.current.position.y + 0.2,
        duration: 1.2,
        repeat: -1,
        yoyo: true,
      })
   });
   const isMobile = useMediaQuery({ maxWidth: 768 })
   let txt;
  
  if(!isMobile){
    txt = useVideoTexture(props.texture ? props.texture : 'https://raw.githubusercontent.com/Joanne0119/portfolio/main/public/projects/MarketDuckDemo.mp4', {
      loop: true,
      muted: true,
      start: true,
      crossOrigin: "Anonymous"
    });
  }else{
    txt = useTexture(props.texture? props.texture : 'https://raw.githubusercontent.com/Joanne0119/portfolio/main/public/projects/MarketDuckMobile.jpg')
  }
  
  const { nodes, materials } = useGLTF('/models/phone.glb')
  return (
    <group {...props} dispose={null} ref={phoneRef}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_13.geometry}
        material={materials.phone_body}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_8.geometry}
        material={materials.Screen}
      >
         <meshBasicMaterial map={txt} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_10.geometry}
        material={materials.Black}
      />
    </group>
  )
}

useGLTF.preload('/modles/phone.glb')
export default Cellphone