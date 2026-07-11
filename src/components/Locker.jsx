import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const COLS = 2
const ROWS = 2
const DOOR_W = 1.4
const DOOR_H = 1.7
const DOOR_D = 0.1
const GAP = 0.1
const BODY_DEPTH = 0.9

const BODY_W = COLS * DOOR_W + (COLS + 1) * GAP
const BODY_H = ROWS * DOOR_H + (ROWS + 1) * GAP

const FRAME_COLOR = '#1f2937'
const CAVITY_COLOR = '#0a0e1a'
const DOOR_COLOR = '#f8fafc'
const HANDLE_COLOR = '#4b5563'
const BAG_BODY_COLOR = '#c19a6b'
const BAG_FOLD_COLOR = '#a37e50'
const BAG_HANDLE_COLOR = '#8b6f47'
const KEYPAD_PANEL_COLOR = '#0f172a'

const IDLE_COLOR = { r: 0.13, g: 0.83, b: 0.93 }       // 青色 — 待機/可用
const SUCCESS_COLOR = { r: 0.13, g: 0.77, b: 0.37 }    // 綠色 — 密碼正確/佔用中
const PIN_DIM = { r: 0.20, g: 0.25, b: 0.33 }          // 深灰 — PIN 未輸入

const ACTIVE_IDX = 0
const PIN_LENGTH = 6

// 時間設定（秒）
const IDLE_WAIT = 30           // 進站到 / 剛關完門到下次密碼開始
const PIN_DIGIT_INTERVAL = 1.4 // 每一位密碼之間間隔（6 位共約 8.4 秒 + 尾巴收尾約 10 秒）
const OCCUPIED_WAIT = 30       // 存物完成、等待取物的時間
const P1_ITEM_REST = 10        // Phase 1 物品放在櫃格底板停留時間

const Locker = (props) => {
  const doorRefs = useRef([])
  const itemRef = useRef()
  const ledRefs = useRef([])
  const pinDotRefs = useRef([])

  useFrame((state) => {
    const t = state.clock.elapsedTime
    ledRefs.current.forEach((ref, idx) => {
      if (!ref?.material) return
      const pulse = 0.5 + 0.3 * Math.sin(t * 2 + idx * 0.5)
      ref.material.emissiveIntensity = pulse
    })
  })

  useGSAP(() => {
    const door = doorRefs.current[ACTIVE_IDX]
    const item = itemRef.current
    const led = ledRefs.current[ACTIVE_IDX]
    const pins = pinDotRefs.current
    if (!door || !item || !led || !pins[0]) return

    const restX = item.position.x
    const restZ = item.position.z
    const midY = item.position.y
    const floorY = midY - 0.4
    const enterX = restX + 1.4
    const enterZ = 0.55
    const openRot = -1.2

    const master = gsap.timeline({ repeat: -1, delay: 2 })

    // 密碼輸入序列：PIN_LENGTH 顆 PIN 燈依序亮青色 → 全部同時閃綠 → 回到暗
    // 依 PIN_DIGIT_INTERVAL 控制輸入節奏
    const addPinInput = () => {
      for (let i = 0; i < PIN_LENGTH; i++) {
        master.to(
          [pins[i].material.color, pins[i].material.emissive],
          { r: IDLE_COLOR.r, g: IDLE_COLOR.g, b: IDLE_COLOR.b, duration: 0.12 },
          i === 0 ? '>' : `<+=${PIN_DIGIT_INTERVAL}`
        )
        master.to(
          pins[i].material,
          { emissiveIntensity: 1.0, duration: 0.12 },
          '<'
        )
      }
      // 停頓一下
      master.to({}, { duration: 0.4 })

      // 全部同時閃綠（密碼正確）
      pins.forEach((pin) => {
        master.to(
          [pin.material.color, pin.material.emissive],
          { r: SUCCESS_COLOR.r, g: SUCCESS_COLOR.g, b: SUCCESS_COLOR.b, duration: 0.35 },
          '<'
        )
        master.to(pin.material, { emissiveIntensity: 1.6, duration: 0.35 }, '<')
      })

      // 綠色維持一下再變暗
      master.to({}, { duration: 0.6 })
      pins.forEach((pin) => {
        master.to(
          [pin.material.color, pin.material.emissive],
          { r: PIN_DIM.r, g: PIN_DIM.g, b: PIN_DIM.b, duration: 0.4 },
          '<'
        )
        master.to(pin.material, { emissiveIntensity: 0.15, duration: 0.4 }, '<')
      })
    }

    // === 初始：全部門關著，等待第一次操作 ===
    master.to({}, { duration: IDLE_WAIT })

    // === Phase 1: 放入 ===
    addPinInput()
    master
      .to(door.rotation, { y: openRot, duration: 0.8, ease: 'power2.out' }, '-=0.3')
      .to({}, { duration: 0.3 })
      .set(item.position, { x: enterX, y: midY, z: enterZ })
      .set(item.scale, { x: 1, y: 1, z: 1 })
      .to(item.position, {
        x: restX,
        z: restZ,
        duration: 1.5,
        ease: 'power2.inOut',
      })
      .to(item.position, {
        y: floorY,
        duration: 0.6,
        ease: 'bounce.out',
      })
      .to({}, { duration: P1_ITEM_REST })
      .to(door.rotation, { y: 0, duration: 0.8, ease: 'power2.in' })
      // 門的 LED 從青色轉綠色（佔用中）
      .to(
        [led.material.color, led.material.emissive],
        { r: SUCCESS_COLOR.r, g: SUCCESS_COLOR.g, b: SUCCESS_COLOR.b, duration: 0.5 },
        '-=0.3'
      )

    // === 佔用中：等待取物 ===
    master.to({}, { duration: OCCUPIED_WAIT })

    // === Phase 2: 取出 ===
    addPinInput()
    master
      .to(door.rotation, { y: openRot, duration: 0.8, ease: 'power2.out' }, '-=0.3')
      .to({}, { duration: 1.0 })
      .to(item.position, {
        y: midY,
        duration: 0.5,
        ease: 'power2.out',
      })
      .to(item.position, {
        x: enterX,
        z: enterZ,
        duration: 2.0,
        ease: 'power2.inOut',
      })
      .to(item.scale, { x: 0, y: 0, z: 0, duration: 0.4, ease: 'power2.in' }, '-=0.2')
      .to({}, { duration: 1.5 })
      .to(door.rotation, { y: 0, duration: 0.8, ease: 'power2.in' })
      // LED 回到青色（可用）
      .to(
        [led.material.color, led.material.emissive],
        { r: IDLE_COLOR.r, g: IDLE_COLOR.g, b: IDLE_COLOR.b, duration: 0.5 },
        '-=0.3'
      )
      .set(item.position, { x: restX, y: midY, z: restZ })
  }, [])

  const cells = []
  for (let row = 0; row < ROWS; row++) {
    for (let col = 0; col < COLS; col++) {
      const idx = row * COLS + col
      const hingeX = -BODY_W / 2 + GAP + col * (DOOR_W + GAP)
      const centerY = BODY_H / 2 - GAP - DOOR_H / 2 - row * (DOOR_H + GAP)
      cells.push({ idx, hingeX, centerY })
    }
  }

  const activeCell = cells[ACTIVE_IDX]
  const activeCellX = activeCell.hingeX + DOOR_W / 2
  const idleCss = `rgb(${Math.round(IDLE_COLOR.r * 255)}, ${Math.round(IDLE_COLOR.g * 255)}, ${Math.round(IDLE_COLOR.b * 255)})`
  const pinDimCss = `rgb(${Math.round(PIN_DIM.r * 255)}, ${Math.round(PIN_DIM.g * 255)}, ${Math.round(PIN_DIM.b * 255)})`

  const wallZ = -BODY_DEPTH / 2
  const walls = [
    { pos: [0, BODY_H / 2 - GAP / 2, wallZ], size: [BODY_W, GAP, BODY_DEPTH] },
    { pos: [0, -BODY_H / 2 + GAP / 2, wallZ], size: [BODY_W, GAP, BODY_DEPTH] },
    { pos: [-BODY_W / 2 + GAP / 2, 0, wallZ], size: [GAP, BODY_H, BODY_DEPTH] },
    { pos: [BODY_W / 2 - GAP / 2, 0, wallZ], size: [GAP, BODY_H, BODY_DEPTH] },
    { pos: [0, 0, wallZ], size: [GAP, BODY_H, BODY_DEPTH] },
    { pos: [0, 0, wallZ], size: [BODY_W, GAP, BODY_DEPTH] },
  ]

  // PIN 燈 X 座標（PIN_LENGTH 顆等距排列）
  const pinSpacing = 0.14
  const pinXs = Array.from({ length: PIN_LENGTH }, (_, i) => (i - (PIN_LENGTH - 1) / 2) * pinSpacing)
  const keypadY = BODY_H / 2 + 0.14
  const keypadZ = DOOR_D / 2 + 0.02

  return (
    <group {...props} dispose={null}>
      {/* 櫃體外框（4 面外框 + 十字分隔）*/}
      {walls.map((w, i) => (
        <mesh key={`wall-${i}`} position={w.pos} castShadow receiveShadow>
          <boxGeometry args={w.size} />
          <meshStandardMaterial color={FRAME_COLOR} roughness={0.65} metalness={0.15} />
        </mesh>
      ))}

      {/* 背板 */}
      <mesh position={[0, 0, -BODY_DEPTH + 0.04]} receiveShadow>
        <boxGeometry args={[BODY_W, BODY_H, 0.06]} />
        <meshStandardMaterial color={CAVITY_COLOR} roughness={1} />
      </mesh>

      {/* 紙袋 */}
      <group
        position={[activeCellX, activeCell.centerY - 0.15, -0.4]}
        scale={0}
        ref={itemRef}
      >
        <mesh castShadow>
          <boxGeometry args={[0.55, 0.6, 0.38]} />
          <meshStandardMaterial color={BAG_BODY_COLOR} roughness={0.9} />
        </mesh>
        <mesh position={[0, 0.32, 0]} castShadow>
          <boxGeometry args={[0.57, 0.05, 0.4]} />
          <meshStandardMaterial color={BAG_FOLD_COLOR} roughness={0.85} />
        </mesh>
        <mesh position={[0, 0.32, 0.14]} castShadow>
          <torusGeometry args={[0.16, 0.014, 6, 18, Math.PI]} />
          <meshStandardMaterial color={BAG_HANDLE_COLOR} roughness={0.7} />
        </mesh>
        <mesh position={[0, 0.32, -0.14]} castShadow>
          <torusGeometry args={[0.16, 0.014, 6, 18, Math.PI]} />
          <meshStandardMaterial color={BAG_HANDLE_COLOR} roughness={0.7} />
        </mesh>
      </group>

      {/* 櫃門 */}
      {cells.map(({ idx, hingeX, centerY }) => (
        <group
          key={`door-${idx}`}
          position={[hingeX, centerY, 0]}
          ref={(el) => (doorRefs.current[idx] = el)}
        >
          <mesh position={[DOOR_W / 2, 0, DOOR_D / 2]} castShadow receiveShadow>
            <boxGeometry args={[DOOR_W, DOOR_H, DOOR_D]} />
            <meshStandardMaterial color={DOOR_COLOR} roughness={0.4} metalness={0.05} />
          </mesh>
          <mesh position={[DOOR_W - 0.16, 0, DOOR_D + 0.02]} castShadow>
            <sphereGeometry args={[0.06, 16, 16]} />
            <meshStandardMaterial color={HANDLE_COLOR} roughness={0.3} metalness={0.6} />
          </mesh>
          <mesh
            position={[0.22, DOOR_H / 2 - 0.18, DOOR_D + 0.015]}
            ref={(el) => (ledRefs.current[idx] = el)}
          >
            <sphereGeometry args={[0.05, 16, 16]} />
            <meshStandardMaterial
              color={idleCss}
              emissive={idleCss}
              emissiveIntensity={0.8}
              roughness={0.2}
            />
          </mesh>
        </group>
      ))}

      {/* 頂部密碼面板 */}
      <mesh position={[0, keypadY, DOOR_D / 2]} castShadow>
        <boxGeometry args={[BODY_W * 0.55, 0.2, 0.06]} />
        <meshStandardMaterial color={KEYPAD_PANEL_COLOR} roughness={0.6} metalness={0.2} />
      </mesh>

      {/* 4 顆 PIN 燈 */}
      {pinXs.map((x, i) => (
        <mesh
          key={`pin-${i}`}
          position={[x, keypadY, keypadZ]}
          ref={(el) => (pinDotRefs.current[i] = el)}
        >
          <sphereGeometry args={[0.035, 12, 12]} />
          <meshStandardMaterial
            color={pinDimCss}
            emissive={pinDimCss}
            emissiveIntensity={0.15}
            roughness={0.3}
          />
        </mesh>
      ))}
    </group>
  )
}

export default Locker
