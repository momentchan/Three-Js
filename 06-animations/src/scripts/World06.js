import * as THREE from 'three'
import World from "../three.js-gist/World/World"
import gsap from 'gsap'

export default class WorldTemplate extends World {
    constructor(experience) {
        super(experience)

        // Object
        const geometry = new THREE.BoxGeometry(1, 1, 1)
        const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
        const mesh = new THREE.Mesh(geometry, material)
        this.scene.add(mesh)

        gsap.to(mesh.position, { duration: 1, delay: 1, x: 2 })
        gsap.to(mesh.position, { duration: 1, delay: 2, x: 0 })
    }
}