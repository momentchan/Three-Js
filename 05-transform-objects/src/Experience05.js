import Camera05 from "./Camera05"
import Renderer05 from "./Renderer05"
import Experience from "./three.js-gist/Common/Experience"
import World05 from "./World05"

export default class Experience05 extends Experience {
    constructor(canvas, sources) {
        super(canvas, sources)

        this.world = new World05(this)
        this.camera = new Camera05(this, false)
        this.renderer = new Renderer05(this)
    }
    resize(){
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

    destroy(){
        super.destroy()
        this.camera.controls.dispose()
        this.renderer.instance.dispose()
    }
}