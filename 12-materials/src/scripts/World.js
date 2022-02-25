import * as THREE from 'three'
import WorldBase from "../three.js-gist/World/WorldBase"

export default class World extends WorldBase {
    constructor(experience) {
        super(experience)
        this.time = this.experience.time
        this.ready = false
        this.debug = this.experience.debug
        this.items = this.resources.items

        this.resources.on('ready', () => {
            // const material = new THREE.MeshBasicMaterial()
            // material.map = this.resources.items.doorColorTexture
            // material.color = new THREE.Color(0xff0000)
            // material.wireframe = true
            // material.opacity = 0.5
            // material.transparent = true
            // material.alphaMap = this.resources.items.doorAlphaTexture
            // material.side = THREE.DoubleSide

            // const material = new THREE.MeshNormalMaterial()
            // material.flatShading = true

            // const material = new THREE.MeshMatcapMaterial()
            // material.matcap = this.resources.items.matcapTexture

            // const material = new THREE.MeshDepthMaterial()

            // const material = new THREE.MeshLambertMaterial()

            // const material = new THREE.MeshPhongMaterial()
            // material.shininess = 1000
            // material.specular = new THREE.Color(0xff0000)

            // const material = new THREE.MeshToonMaterial()
            // material.gradientMap = this.resources.items.gradientTexture

            // const material = new THREE.MeshStandardMaterial()
            // material.metalness = 0
            // material.roughness = 0
            // material.map = this.items.doorColorTexture
            // material.aoMap = this.items.doorAmbientOcclusionTexture
            // material.aoMapIntensity = 1
            // material.displacementMap = this.items.doorHeightTexture
            // material.displacementScale = 0.05
            // material.metalnessMap = this.items.doorMetalnessTexture
            // material.roughnessMap = this.items.doorRoughnessTexture
            // material.normalMap = this.items.doorNormalTexture
            // material.normalScale.set(0.5, 0.5)
            // material.alphaMap = this.items.doorAlphaTexture
            // material.transparent = true
            // material.wireframe = true

            const material = new THREE.MeshStandardMaterial()
            material.metalness = 0.7
            material.roughness = 0.2
            material.envMap = this.resources.items.environemntMapTexture

            this.sphere = new THREE.Mesh(
                new THREE.SphereBufferGeometry(0.5, 64, 64),
                material
            )
            this.sphere.position.x = -1.5

            this.sphere.geometry.setAttribute('uv2', new THREE.BufferAttribute(
                this.sphere.geometry.attributes.uv.array, 2)
            )

            this.plane = new THREE.Mesh(
                new THREE.PlaneBufferGeometry(1, 1, 128, 128),
                material
            )

            this.plane.geometry.setAttribute('uv2', new THREE.BufferAttribute(
                this.plane.geometry.attributes.uv.array, 2)
            )

            this.torus = new THREE.Mesh(
                new THREE.TorusBufferGeometry(0.3, 0.2, 64, 128),
                material
            )
            this.torus.position.x = 1.5

            this.torus.geometry.setAttribute('uv2', new THREE.BufferAttribute(
                this.torus.geometry.attributes.uv.array, 2)
            )

            this.scene.add(this.sphere, this.plane, this.torus)

            /**
            * Lights
            */
            const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
            const pointLight = new THREE.PointLight(0xffffff, 0.5)
            pointLight.position.x = 2
            pointLight.position.y = 3
            pointLight.position.z = 4
            this.scene.add(ambientLight, pointLight)

            this.ready = true

            if (this.debug.active) {
                this.debugFolder = this.debug.ui.addFolder('Material')
                /**
                * Objects
                */
                this.debugFolder.add(material, 'metalness').min(0).max(1).step(0.001)
                this.debugFolder.add(material, 'roughness').min(0).max(1).step(0.001)
                this.debugFolder.add(material, 'aoMapIntensity').min(0).max(10).step(0.001)
                this.debugFolder.add(material, 'displacementScale').min(0).max(1).step(0.001)
            }
        })

    }
    update() {
        if (this.ready) {
            this.sphere.rotation.y = 0.001 * this.time.elapsed
            this.plane.rotation.y = 0.001 * this.time.elapsed
            this.torus.rotation.y = 0.001 * this.time.elapsed

            this.sphere.rotation.x = 0.001 * this.time.elapsed
            this.plane.rotation.x = 0.001 * this.time.elapsed
            this.torus.rotation.x = 0.001 * this.time.elapsed
        }
    }
}