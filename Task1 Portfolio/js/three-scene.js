
let scene, camera, renderer, particles, mainGeometryGroup;
let skillScene, skillCamera, skillRenderer, skillGroup, crystalCore, shieldMesh, cubeGroup;
let mouseX = 0, mouseY = 0;
let targetX = 0, targetY = 0;

const windowHalfX = window.innerWidth / 2;
const windowHalfY = window.innerHeight / 2;

// Initialize Background 3D Scene
function initMain3DScene() {
    const canvasContainer = document.getElementById('webgl-canvas');
    if (!canvasContainer || typeof THREE === 'undefined') return;

    // Scene
    scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x070913, 0.0015);

    // Camera
    camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 2000);
    camera.position.z = 400;

    // Renderer
    renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    canvasContainer.appendChild(renderer.domElement);

    // Group for objects
    mainGeometryGroup = new THREE.Group();
    scene.add(mainGeometryGroup);

    // 1. Particle Cloud (Starfield)
    const particleCount = 1800;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const cyanColor = new THREE.Color(0x00f3ff);
    const violetColor = new THREE.Color(0x9d4edd);
    const pinkColor = new THREE.Color(0xff2a85);

    for (let i = 0; i < particleCount; i++) {
        positions[i * 3] = (Math.random() - 0.5) * 1600;
        positions[i * 3 + 1] = (Math.random() - 0.5) * 1600;
        positions[i * 3 + 2] = (Math.random() - 0.5) * 1600;

        // Randomize particle colors
        const mixRatio = Math.random();
        let particleColor;
        if (mixRatio < 0.5) {
            particleColor = cyanColor.clone().lerp(violetColor, Math.random());
        } else {
            particleColor = violetColor.clone().lerp(pinkColor, Math.random());
        }

        colors[i * 3] = particleColor.r;
        colors[i * 3 + 1] = particleColor.g;
        colors[i * 3 + 2] = particleColor.b;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    // Custom Particle Texture
    const particleMaterial = new THREE.PointsMaterial({
        size: 3.5,
        vertexColors: true,
        transparent: true,
        opacity: 0.85,
        blending: THREE.AdditiveBlending
    });

    particles = new THREE.Points(geometry, particleMaterial);
    scene.add(particles);

    // 2. Wireframe Torus Knot (3D Center Piece)
    const torusGeo = new THREE.TorusKnotGeometry(60, 18, 120, 16);
    const torusMat = new THREE.MeshStandardMaterial({
        color: 0x00f3ff,
        wireframe: true,
        emissive: 0x00f3ff,
        emissiveIntensity: 0.3,
        roughness: 0.2,
        metalness: 0.8
    });
    const torusKnot = new THREE.Mesh(torusGeo, torusMat);
    torusKnot.position.set(220, 40, -100);
    mainGeometryGroup.add(torusKnot);

    // 3. Icosahedron Ring
    const icoGeo = new THREE.IcosahedronGeometry(45, 1);
    const icoMat = new THREE.MeshStandardMaterial({
        color: 0x9d4edd,
        wireframe: true,
        emissive: 0x9d4edd,
        emissiveIntensity: 0.4
    });
    const icosahedron = new THREE.Mesh(icoGeo, icoMat);
    icosahedron.position.set(-250, -80, -50);
    mainGeometryGroup.add(icosahedron);

    // 4. Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0x00f3ff, 2.5, 800);
    pointLight1.position.set(200, 200, 300);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0x9d4edd, 2.5, 800);
    pointLight2.position.set(-200, -200, 300);
    scene.add(pointLight2);

    // Event listeners
    document.addEventListener('mousemove', onDocumentMouseMove, false);
    window.addEventListener('resize', onWindowResize, false);

    animateMainScene();
}

function updateThreeSceneTheme(theme) {
    if (!scene || !scene.fog) return;
    if (theme === 'light') {
        scene.fog.color.setHex(0xf0f4f9);
    } else {
        scene.fog.color.setHex(0x070913);
    }
}

function onDocumentMouseMove(event) {
    mouseX = (event.clientX - windowHalfX) * 0.1;
    mouseY = (event.clientY - windowHalfY) * 0.1;
}

function onWindowResize() {
    if (!camera || !renderer) return;
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

function animateMainScene() {
    requestAnimationFrame(animateMainScene);

    targetX += (mouseX - targetX) * 0.05;
    targetY += (mouseY - targetY) * 0.05;

    if (mainGeometryGroup) {
        mainGeometryGroup.rotation.y += 0.003;
        mainGeometryGroup.rotation.x += 0.001;
    }

    if (particles) {
        particles.rotation.y += 0.0005;
        particles.rotation.x += 0.0003;
    }

    // Dynamic Camera Parallax
    if (camera) {
        camera.position.x += (targetX - camera.position.x) * 0.05;
        camera.position.y += (-targetY - camera.position.y) * 0.05;
        camera.lookAt(scene.position);
    }

    renderer.render(scene, camera);
}

// Initialize 3D Cyber Crystal & Holographic Matrix Visualizer
function initSkills3DVisualizer() {
    const container = document.getElementById('skills-3d-canvas');
    if (!container || typeof THREE === 'undefined') return;

    skillScene = new THREE.Scene();
    skillCamera = new THREE.PerspectiveCamera(50, container.clientWidth / container.clientHeight, 0.1, 1000);
    skillCamera.position.z = 180;

    skillRenderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    skillRenderer.setSize(container.clientWidth, container.clientHeight);
    skillRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(skillRenderer.domElement);

    skillGroup = new THREE.Group();
    skillScene.add(skillGroup);

    // 1. Inner Glowing Crystal Core (Octahedron)
    const coreGeo = new THREE.OctahedronGeometry(28, 0);
    const coreMat = new THREE.MeshStandardMaterial({
        color: 0x00f3ff,
        emissive: 0x00f3ff,
        emissiveIntensity: 0.6,
        roughness: 0.1,
        metalness: 0.9,
        wireframe: false
    });
    crystalCore = new THREE.Mesh(coreGeo, coreMat);
    skillGroup.add(crystalCore);

    // 2. Outer Holographic Wireframe Shield (Icosahedron)
    const shieldGeo = new THREE.IcosahedronGeometry(48, 1);
    const shieldMat = new THREE.MeshStandardMaterial({
        color: 0x9d4edd,
        emissive: 0x9d4edd,
        emissiveIntensity: 0.4,
        wireframe: true
    });
    shieldMesh = new THREE.Mesh(shieldGeo, shieldMat);
    skillGroup.add(shieldMesh);

    // 3. Orbiting Floating Tech Cubes
    cubeGroup = new THREE.Group();
    skillGroup.add(cubeGroup);

    const cubeColors = [0x00f3ff, 0x9d4edd, 0xff2a85, 0x10b981, 0xfbbf24];
    for (let i = 0; i < 12; i++) {
        const cubeGeo = new THREE.BoxGeometry(9, 9, 9);
        const cubeMat = new THREE.MeshStandardMaterial({
            color: cubeColors[i % cubeColors.length],
            emissive: cubeColors[i % cubeColors.length],
            emissiveIntensity: 0.5,
            wireframe: true
        });
        const miniCube = new THREE.Mesh(cubeGeo, cubeMat);

        const angle = (i / 12) * Math.PI * 2;
        const radius = 75;
        miniCube.position.set(
            Math.cos(angle) * radius,
            Math.sin(i * 2) * 25,
            Math.sin(angle) * radius
        );
        cubeGroup.add(miniCube);
    }

    // 4. Lighting
    const pLight1 = new THREE.PointLight(0x00f3ff, 2, 300);
    pLight1.position.set(100, 100, 100);
    skillScene.add(pLight1);

    const pLight2 = new THREE.PointLight(0x9d4edd, 2, 300);
    pLight2.position.set(-100, -100, 100);
    skillScene.add(pLight2);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    skillScene.add(ambientLight);

    function animateSkillScene() {
        requestAnimationFrame(animateSkillScene);
        if (skillGroup) {
            crystalCore.rotation.y += 0.015;
            crystalCore.rotation.x += 0.01;
            shieldMesh.rotation.y -= 0.008;
            shieldMesh.rotation.z += 0.005;
            cubeGroup.rotation.y += 0.01;
        }
        skillRenderer.render(skillScene, skillCamera);
    }

    animateSkillScene();

    window.addEventListener('resize', () => {
        if (!container || !skillCamera || !skillRenderer) return;
        skillCamera.aspect = container.clientWidth / container.clientHeight;
        skillCamera.updateProjectionMatrix();
        skillRenderer.setSize(container.clientWidth, container.clientHeight);
    });
}

// Export initialization functions
document.addEventListener('DOMContentLoaded', () => {
    // Wait slightly for Three.js script to be ready
    setTimeout(() => {
        initMain3DScene();
        initSkills3DVisualizer();
    }, 100);
});
