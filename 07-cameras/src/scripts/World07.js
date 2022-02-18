import * as THREE from 'three'
import World from "../three.js-gist/World/World"

export default class World07 extends World {
    constructor(experience) {
        super(experience)
        this.time = this.experience.time
        // Object
        this.mesh = new THREE.Mesh(
            new THREE.BoxGeometry(1, 1, 1, 5, 5, 5),
            new THREE.MeshBasicMaterial({ color: 0xff0000 })
        )
        this.scene.add(this.mesh)
    }
    update(){
        super.update()
        // this.mesh.rotation.y = this.time.elapsed
    }
}