import * as THREE from 'three'
import CameraBase from "./three.js-gist/Common/CameraBase";

export default class Camera05 extends CameraBase {
    setInstance() {
        super.setInstance()
        this.instance = new THREE.PerspectiveCamera(75, this.sizes.width / this.sizes.height)
        this.instance.position.z = 5
    }
    setOrbitControl() {
        super.setOrbitControl()
    }
}