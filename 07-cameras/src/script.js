import './style.css'
import Experience07 from './scripts/Experience07'

const experience = new Experience07(document.querySelector('canvas.webgl'))

// // Animate
// const clock = new THREE.Clock()

// const tick = () => {
//     const elapsedTime = clock.getElapsedTime()

//     // Update objects
//     // mesh.rotation.y = elapsedTime;
//     // camera.position.z = Math.cos(cursor.x * Math.PI * 2) * 3
//     // camera.position.x = Math.sin(cursor.x * Math.PI * 2) * 3
//     // camera.position.y = cursor.y * 5
//     // camera.lookAt(mesh.position)

//     // Call tick again on the next frame
//     window.requestAnimationFrame(tick)
// }

// tick()