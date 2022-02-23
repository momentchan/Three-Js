import * as THREE from 'three'
import { BufferAttribute } from 'three'
import WorldBase from "../three.js-gist/World/WorldBase"

export default class World extends WorldBase {
    constructor(experience) {
        super(experience)

        this.time = this.experience.time
        this.geometry = new THREE.BufferGeometry()
        this.triCount = 100
        const vericesCount = this.triCount * 3
        const positionArray = new Float32Array(vericesCount * 3)
        this.size = 2

        for (let tri = 0; tri < this.triCount; tri++) {
            let radius = this.size / this.triCount * tri

            for (let vertice = 0; vertice < 3; vertice++) {
                let angle = Math.PI * 2 / 3 * vertice + Math.PI / 2
                let idx = tri * 3 * 3 + vertice * 3
                positionArray[idx] = Math.cos(angle) * radius
                positionArray[idx + 1] = Math.sin(angle) * radius
                positionArray[idx + 2] = 0
            }
        }

        const positionAttribute = new BufferAttribute(positionArray, 3)
        this.geometry.setAttribute('position', positionAttribute)
        const material = new THREE.MeshBasicMaterial({ wireframe: true })
        const mesh = new THREE.Mesh(this.geometry, material)
        this.scene.add(mesh)
    }
    update() {
        for (let tri = 0; tri < this.triCount; tri++) {
            let ratio = tri / this.triCount
            let radius = this.size * ratio

            for (let vertice = 0; vertice < 3; vertice++) {
                let angle = Math.PI * 2 / 3 * vertice + Math.PI / 2 
                let amplitude = Math.pow(ratio, 0.1)
                let speed = 1e-3
                let offset = Math.PI * ratio * 2
                angle += Math.cos(this.time.elapsed * speed + offset) * amplitude
                let idx = tri * 3 * 3 + vertice * 3

                this.geometry.attributes.position.array[idx] = Math.cos(angle) * radius
                this.geometry.attributes.position.array[idx + 1] = Math.sin(angle) * radius
                this.geometry.attributes.position.array[idx + 2] = 0
            }
        }
        this.geometry.attributes.position.needsUpdate = true
    }
}