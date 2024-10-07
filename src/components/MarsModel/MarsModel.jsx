import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"; // Importar los controles orbit
import "./mars-model.css";


const MarsModel = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 0, 150); // Alejar la cámara para ver Marte completamente

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true }); // Habilitar el canal alpha para transparencia
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setClearColor(0x000000, 0); // Fondo transparente

    const mountNode = mountRef.current;
    mountNode.appendChild(renderer.domElement);

    // Añadir los controles de órbita para explorar la escena
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableZoom = false; // Deshabilitar el zoom

    const loader = new GLTFLoader();
    loader.load(
      "/3d/mars.glb", 
      (gltf) => {
        const marsModel = gltf.scene;
        console.log("Modelo GLTF cargado:", marsModel);

        // Calcular el centro del modelo usando Box3
        const box = new THREE.Box3().setFromObject(marsModel);
        const boxCenter = box.getCenter(new THREE.Vector3());

        // Mover el modelo para que su centro esté en el origen
        marsModel.position.sub(boxCenter);

        marsModel.scale.set(0.1, 0.1, 0.1); // Escala del modelo

        scene.add(marsModel);

        // Añadir el Bounding Box Helper para visualizar el tamaño del modelo

        console.log("Modelo centrado y agregado a la escena con Bounding Box");
      },
      undefined,
      (error) => {
        console.error("Error cargando el modelo 3D:", error);
      }
    );

    // Añadir luces
    const ambientLight = new THREE.AmbientLight(0xffffff, 1);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(1, 1, 1).normalize();
    scene.add(directionalLight);

    const animate = () => {
      requestAnimationFrame(animate);
      controls.update(); // Actualizar los controles de órbita
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      mountNode.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className="mars-container" />;
};

export default MarsModel;
