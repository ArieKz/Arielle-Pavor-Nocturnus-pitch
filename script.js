window.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    const CANVAS_WIDTH = canvas.width =800;
    const CANVAS_HEIGHT = canvas.height =700;
    let gameSpeed = 5;

const backgroundLayer =new Image();
backgroundLayer.src = 'Images/FinalBackground.jpg';

let x = 0;

function animate(){
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    ctx.drawImage(backgroundLayer, x, 0);
    x -= gameSpeed;
    requestAnimationFrame(animate);
};

animate();
    


})
