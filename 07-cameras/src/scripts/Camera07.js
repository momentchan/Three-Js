import * as THREE from 'three'
import CameraBase from "../three.js-gist/Common/CameraBase"

export default class Camera07 extends CameraBase {
    setInstance() {
        super.setInstance()

        this.instance = new THREE.PerspectiveCamera(75, this.sizes.width / this.sizes.height, 0.1, 100)
        // this.aspectRatio = this.sizes.width / this.sizes.height
        // this.instance = new THREE.OrthographicCamera(
        //     -1 * this.aspectRatio, 
        //     1 * this.aspectRatio, 
        //     1, 
        //     -1, 
        //     0.1, 
        //     100
        // )
        // this.instance.position.x = 2
        // this.instance.position.y = 2

        /*
        ** Cursor
        */
        this.cursor = { x: 0, y: 0 }

        window.addEventListener('mousemove', (event) => {
            this.cursor.x = event.clientX / this.sizes.width - 0.5
            this.cursor.y = -(event.clientY / this.sizes.height - 0.5)
        })

        this.mesh = this.experience.world.mesh
        this.instance.position.z = 2
        this.instance.lookAt(this.mesh.position)
        this.scene.add(this.instance)
    }

    setOrbitControl() {
        super.setOrbitControl()
        // this.controls.enabled = false
    }

    update() {
        super.update()
        // this.instance.position.z = Math.cos(this.cursor.x * Math.PI * 2) * 3
        // this.instance.position.x = Math.sin(this.cursor.x * Math.PI * 2) * 3
        // this.instance.position.y = this.cursor.y * 5
        // this.instance.lookAt(this.mesh.position)
    }
}