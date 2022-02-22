import * as THREE from 'three'
import CameraBase from "../three.js-gist/Common/CameraBase"

export default class Camera extends CameraBase {
    setInstance() {
        super.setInstance()
        this.instance = new THREE.PerspectiveCamera(75, this.sizes.width / this.sizes.height, 0.1, 100)
        this.instance.position.z = 3
    }
    setOrbitControl() {
        super.setOrbitControl()
    }
}