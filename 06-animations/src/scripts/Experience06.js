import * as THREE from 'three'
import Experience from "../three.js-gist/Common/Experience"
import Renderer06 from "./Renderer06"
import Camera06 from "./Camera06";
import World06 from "./World06";

export default class Experience06 extends Experience {
    constructor(canvas, sources) {
        super(canvas, sources)

        this.world = new World06(this)
        this.camera = new Camera06(this)
        this.renderer = new Renderer06(this)
    }
    resize() {
        super.resize()
        this.camera.resize()
        this.renderer.resize()
    }

    update() {
        super.update()
        this.world.update()
        this.camera.update()
        this.renderer.update()
    }

    destroy() {
        super.destroy()
        this.camera.controls.dispose()
        this.renderer.instance.dispose()
    }
}