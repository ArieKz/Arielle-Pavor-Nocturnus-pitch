window.addEventListener("DOMContentLoaded", () => {
// setcanvas postion
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    const CANVAS_WIDTH = canvas.width =800;
    const CANVAS_HEIGHT = canvas.height =700;
    let gameSpeed = 4;
// add background layer
const backgroundLayer =new Image();
backgroundLayer.src = 'Images/FinalBackground.jpg';

let x = 0;
// set second image for loop/ to remove black space
let x2 = 2169;

function animate(){
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    ctx.drawImage(backgroundLayer, x, 0);
 //second image for loop-x2
    ctx.drawImage(backgroundLayer, x2, 0);   
// change size of background
    if (x < -2170) x =2170 + x2 - gameSpeed;
        else x -= gameSpeed;
    if (x2 < -2170) x2 =2170 + x - gameSpeed;
    else x2 -= gameSpeed;    
    requestAnimationFrame(animate);
};

animate();
    
// detect end of screen so image loops


//create player

//create AI  enemies
//make enemies detect obsticles 

//set up   player and enemie collison recognition
//set up platforms and obsticles
//make enemies dissapear when defeated
//add scorekeeping
//add game over/restart

})
