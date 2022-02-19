import * as THREE from 'three'
import CameraBase from "../three.js-gist/Common/CameraBase"

export default class Camera06 extends CameraBase {
    setInstance() {
        super.setInstance()
        // Camera
        this.instance = new THREE.PerspectiveCamera(75, this.sizes.width / this.sizes.height)
        this.instance.position.z = 3
        this.scene.add(this.instance)
    }
    setOrbitControl() {
        super.setOrbitControl()
    }
}