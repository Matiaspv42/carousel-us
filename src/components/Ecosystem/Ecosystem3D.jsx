import { Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three';
import { Environment, OrbitControls, PerspectiveCamera } from '@react-three/drei'

import Model from './Model'
import { useRef } from 'react';
import { useEffect } from 'react';

function Dolly() {
    useFrame((state) => {
    //   state.camera.position.z = 50 + Math.sin(state.clock.getElapsedTime()) * 300
      state.camera.lookAt(new THREE.Vector3(0,0,0))
      state.camera.updateProjectionMatrix()
    })
    return null
  }

export default function Ecosystem3D() {

    
  return (
    <div className="h-[80vh] max-w-96 z-0">
      <Canvas>
        <Suspense fallback={null}>
            <Model />
            {/* <OrbitControls 
            autoRotate
            autoRotateSpeed={0.3}
            maxPolarAngle={Math.PI / 2.3}
            minPolarAngle={Math.PI / 2.3}
            /> */}
            <ambientLight intensity={0.4} />
            <pointLight position={[120, 50, 40]}  castShadow/>
            <pointLight position={[-50, -50, -5]} castShadow/>
          {/* <Environment preset="sunset" background /> */}
        </Suspense>
        <PerspectiveCamera makeDefault fov={65} position={[120, 50, 40]}
        >
        {/* <spotLight position={[100, 100, 5]} angle={0.15} penumbra={1} intensity={10} castShadow shadow-mapSize={[2048, 2048]} /> */}
      </PerspectiveCamera>
      <Dolly />
      </Canvas>
    </div>
  )
}
