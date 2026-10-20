import React, { useEffect, useRef, useState } from 'react'
import { Canvas } from '@react-three/fiber'

// Every <Canvas> owns a WebGL context and browsers cap how many can be alive at
// once (mobile Safari is the strictest), so only keep canvases near the viewport
// mounted. Models are preloaded with useGLTF.preload, so remounting is cheap.
const LazyCanvas = ({ className, rootMargin = '50% 0px', children, ...canvasProps }) => {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { rootMargin }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [rootMargin])

  return (
    <div ref={ref} className={className}>
      {visible && <Canvas {...canvasProps}>{children}</Canvas>}
    </div>
  )
}

export default LazyCanvas
