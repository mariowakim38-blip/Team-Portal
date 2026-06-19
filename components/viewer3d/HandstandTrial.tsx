'use client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, Html } from '@react-three/drei'

function Capsule({
  position,
  rotation = [0, 0, 0],
  length,
  radius,
}: {
  position: [number, number, number]
  rotation?: [number, number, number]
  length: number
  radius: number
}) {
  return (
    <group position={position} rotation={rotation}>
      <mesh>
        <cylinderGeometry args={[radius, radius, length, 32]} />
        <meshStandardMaterial color="#dbeafe" roughness={0.45} metalness={0.05} />
      </mesh>
      <mesh position={[0, length / 2, 0]}>
        <sphereGeometry args={[radius, 24, 24]} />
        <meshStandardMaterial color="#dbeafe" roughness={0.45} metalness={0.05} />
      </mesh>
      <mesh position={[0, -length / 2, 0]}>
        <sphereGeometry args={[radius, 24, 24]} />
        <meshStandardMaterial color="#dbeafe" roughness={0.45} metalness={0.05} />
      </mesh>
    </group>
  )
}

function GymnastHandstand() {
  return (
    <group position={[0, 0.12, 0]}>
      {/* hands */}
      <mesh position={[-0.18, 0.05, 0]} rotation={[0, 0, -0.08]}>
        <boxGeometry args={[0.32, 0.06, 0.18]} />
        <meshStandardMaterial color="#eff6ff" />
      </mesh>
      <mesh position={[0.18, 0.05, 0]} rotation={[0, 0, 0.08]}>
        <boxGeometry args={[0.32, 0.06, 0.18]} />
        <meshStandardMaterial color="#eff6ff" />
      </mesh>

      {/* arms, shoulders, torso */}
      <Capsule position={[-0.18, 0.72, 0]} rotation={[0, 0, -0.03]} length={1.25} radius={0.06} />
      <Capsule position={[0.18, 0.72, 0]} rotation={[0, 0, 0.03]} length={1.25} radius={0.06} />
      <mesh position={[0, 1.36, 0]}>
        <boxGeometry args={[0.6, 0.12, 0.22]} />
        <meshStandardMaterial color="#38bdf8" roughness={0.35} />
      </mesh>
      <Capsule position={[0, 2.05, 0]} length={1.25} radius={0.16} />

      {/* hips and legs */}
      <mesh position={[0, 2.72, 0]}>
        <boxGeometry args={[0.48, 0.18, 0.22]} />
        <meshStandardMaterial color="#0b6bff" roughness={0.35} />
      </mesh>
      <Capsule position={[-0.13, 3.42, 0]} rotation={[0, 0, 0.035]} length={1.3} radius={0.075} />
      <Capsule position={[0.13, 3.42, 0]} rotation={[0, 0, -0.035]} length={1.3} radius={0.075} />
      <mesh position={[-0.14, 4.12, 0]} rotation={[0, 0, 0.03]}>
        <boxGeometry args={[0.12, 0.38, 0.12]} />
        <meshStandardMaterial color="#eff6ff" />
      </mesh>
      <mesh position={[0.14, 4.12, 0]} rotation={[0, 0, -0.03]}>
        <boxGeometry args={[0.12, 0.38, 0.12]} />
        <meshStandardMaterial color="#eff6ff" />
      </mesh>

      {/* head */}
      <mesh position={[0, 1.22, -0.02]}>
        <sphereGeometry args={[0.18, 32, 32]} />
        <meshStandardMaterial color="#f8fafc" roughness={0.5} />
      </mesh>
    </group>
  )
}

function Floor() {
  return (
    <group>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
        <planeGeometry args={[6, 6]} />
        <meshStandardMaterial color="#07111f" roughness={0.75} />
      </mesh>
      <gridHelper args={[6, 12, '#0b6bff', '#12345f']} position={[0, 0.004, 0]} />
    </group>
  )
}

export default function HandstandTrial() {
  return (
    <div className="viewer-shell">
      <Canvas camera={{ position: [0, 2.4, 6.2], fov: 45 }}>
        <ambientLight intensity={0.75} />
        <directionalLight position={[4, 7, 5]} intensity={1.4} />
        <pointLight position={[-4, 3, -3]} intensity={0.7} color="#00c2ff" />
        <Floor />
        <GymnastHandstand />
        <Html position={[0, 4.55, 0]} center>
          <div className="viewer-label">Handstand line trial</div>
        </Html>
        <OrbitControls enablePan enableZoom enableRotate minDistance={3} maxDistance={10} target={[0, 2, 0]} />
      </Canvas>
    </div>
  )
}
