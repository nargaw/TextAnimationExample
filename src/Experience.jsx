import { ShaderMaterial } from "three"
import { useFrame } from "@react-three/fiber"
import vertex from './shaders/vertexShader.glsl'
import fragment from './shaders/fragmentShader.glsl'
import fnt from './font/Inter-Medium-msdf.json'
import png from './font/Inter-Medium.png'
import { MSDFTextGeometry, MSDFTextMaterial } from "three-msdf-text-utils";
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
import * as THREE from 'three';
import { useRef } from "react"
import { useEffect } from "react"

import { useThree } from "@react-three/fiber"

export default function Experience()
{
    const geometry = useRef()
    const material = useRef()
    const mesh = useRef()

    let scene

    useThree((state) => {
        scene = state.scene
    })

    console.log(scene)

    const loader = new THREE.TextureLoader()
    useEffect(() => {
        const atlas = loader.load(png)
        geometry.current = new MSDFTextGeometry({
            text: "hello",
            font: fnt,
        });

        material.current = new MSDFTextMaterial();
        material.current.uniforms.uMap.value = atlas;


        const mesh = new THREE.Mesh(geometry.current, material.current)
        scene.add(mesh)
        mesh.name = 'text'
        mesh.scale.set(0.01, 0.01, 0.01)

        if(mesh.current)
        {
            mesh.current.scale.set(0.01, 0.01, 0.01)
        }

    }, [geometry, material])

    return <>
        
        {/* <mesh ref={mesh}
            geometry={geometry.current}
            material={material.current}
        /> */}
    </>
}