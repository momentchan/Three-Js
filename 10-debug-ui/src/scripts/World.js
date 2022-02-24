import * as THREE from 'three'
import WorldBase from "../three.js-gist/World/WorldBase"
import gsap from 'gsap'

export default class World extends WorldBase {
    constructor(experience) {
        super(experience)
        const parameters = {
            color: 0xff0000,
            spin: () => {
                gsap.to(mesh.rotation, { duration: 1, y: mesh.rotation.y + 10 })
            }
        }

        /**
         * Object
        */
        const geometry = new THREE.BoxGeometry(1, 1, 1)
        const material = new THREE.MeshBasicMaterial({ color: parameters.color })
        const mesh = new THREE.Mesh(geometry, material)
        this.scene.add(mesh)

        this.debug = this.experience.debug

        if (this.debug.active) {
            // Debug
            if (this.debug.active) {
                this.debugFolder = this.debug.ui.addFolder('Box')
                this.debugFolder.addColor(parameters, 'color').onChange(() => {
                    material.color.set(parameters.color)
                })
                this.debugFolder.add(parameters, 'spin')

                this.debugFolder.add(mesh.position, 'y', -3, 3, 0.01)
                    .name('elevation')

                this.debugFolder.add(mesh, 'visible')
                this.debugFolder.add(material, 'wireframe')
            }
        }
    }
}