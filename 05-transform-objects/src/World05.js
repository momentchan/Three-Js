import * as THREE from 'three'
import WorldBase from "./three.js-gist/World/WorldBase";

export default class World05 extends WorldBase {
    constructor(experience) {
        super(experience)

        const group = new THREE.Group()
        this.scene.add(group)

        const cube1 = new THREE.Mesh(
            new THREE.BoxGeometry(1, 1, 1),
            new THREE.MeshBasicMaterial({ color: 0xff0000 })
        )
        group.add(cube1)

        const cube2 = new THREE.Mesh(
            new THREE.BoxGeometry(1, 1, 1),
            new THREE.MeshBasicMaterial({ color: 0x00ff00 })
        )
        cube2.position.x = -2
        group.add(cube2)

        const cube3 = new THREE.Mesh(
            new THREE.BoxGeometry(1, 1, 1),
            new THREE.MeshBasicMaterial({ color: 0x0000ff })
        )
        cube3.position.x = 2
        group.add(cube3)

        this.axesHelper = new THREE.AxesHelper()
        this.scene.add(this.axesHelper)
    }
}