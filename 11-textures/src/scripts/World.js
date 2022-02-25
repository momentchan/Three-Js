import * as THREE from 'three'
import WorldBase from "../three.js-gist/World/WorldBase"

export default class World extends WorldBase {
    constructor(experience) {
        super(experience)

        this.resources.on('ready', () => {
            this.colorTexture = this.resources.items.colorTexture

            this.colorTexture.repeat.x = 3
            this.colorTexture.repeat.y = 2
            this.colorTexture.wrapS = THREE.RepeatWrapping
            this.colorTexture.wrapT = THREE.RepeatWrapping

            this.colorTexture.offset.x = 0.5
            this.colorTexture.offset.y = 0.5

            this.colorTexture.rotation = Math.PI * 0.25
            this.colorTexture.center.x = 0.5
            this.colorTexture.center.y = 0.5

            this.colorTexture.generateMipmaps = false // if usinsg minFilter, set generateMipmaps false
            this.colorTexture.minFilter = THREE.NearestFilter
            this.colorTexture.magFilter = THREE.NearestFilter

            /**
            * Object
            */
            const geometry = new THREE.BoxGeometry(1, 1, 1)
            const material = new THREE.MeshBasicMaterial({ map: this.colorTexture })
            const mesh = new THREE.Mesh(geometry, material)
            this.scene.add(mesh)
        })
    }
}