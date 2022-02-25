import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import Experience from './scripts/Experience'
import sources from './scripts/sources'

const experience = new Experience(document.querySelector('canvas.webgl'), sources)