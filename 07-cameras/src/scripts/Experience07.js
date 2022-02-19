import * as THREE from 'three'
import ExperienceBase from "../three.js-gist/Common/ExperienceBase"
import Renderer07 from "./Renderer07"
import Camera07 from "./Camera07";
import World07 from "./World07";

export default class Experience07 extends ExperienceBase {
    constructor(canvas, sources) {
        super(canvas, sources)

        this.world = new World07(this)
        this.camera = new Camera07(this)
        this.renderer = new Renderer07(this)
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