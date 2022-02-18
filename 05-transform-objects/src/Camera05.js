import * as THREE from 'three'
import Camera from "./three.js-gist/Common/Camera.js";

export default class Camera05 extends Camera {
    setInstance() {
        super.setInstance()
        this.instance = new THREE.PerspectiveCamera(75, this.sizes.width / this.sizes.height)
        this.instance.position.z = 5
    }
    setOrbitControl() {
        super.setOrbitControl()
    }
}