import { Suspense, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'

import CanvasLoader from "../Loader";

const Keyboard = ({isMobile}: any) => {

    const keyboard = useGLTF("./stylized_keyboard/scene.gltf")

  return (
    <mesh>
        <hemisphereLight 
            intensity={0.25} 
            groundColor="black" 
        />
        <pointLight intensity={0.2}/>
        <spotLight 
            position={[-20, 50, 10]} 
            angle={0.0} 
            penumbra={1} 
            intensity={1} 
            castShadow
            shadow-mapSize={1024}
        />
        <primitive 
            object={keyboard.scene} 
            scale={isMobile ? 0.7 : 0.8}
            position={isMobile ? [0, -1, -0.5] : [0, -1.55, -1]} 
            rotation={[1.3, 0.2, 5.5]}
        />
    </mesh>
  )
}

const KeyboardCanvas = () => {

    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 500px)')

        setIsMobile(mediaQuery.matches)

        const handleMediaQueryChange = (event: any) => {
            setIsMobile(event.matches)
        }

        mediaQuery.addEventListener('change', handleMediaQueryChange)

        return () =>{
            mediaQuery.removeEventListener('change', handleMediaQueryChange)
        }
    }, [])

    return(
        <Canvas 
            frameloop='demand' 
            shadows 
            camera={{position: [20, 3, 5], fov: 25}} 
            gl={{preserveDrawingBuffer: true}}
        >
            <Suspense fallback={<CanvasLoader />}>
                <OrbitControls 
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2} 
                    minPolarAngle={Math.PI / 2}
                 />
                <Keyboard isMobile={isMobile}/>
            </Suspense>
            <Preload all />
        </Canvas>
    )

}

export default KeyboardCanvas