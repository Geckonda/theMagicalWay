let fps, fpsInterval, startTime, now, then, elapsed;
const fpsnumber = 25;


function StartAnimating(fps){
    fpsInterval = 1000/fps;
    then = Date.now();
    startTime = then;
    Animate()
}
function Animate(){
    requestAnimationFrame(Animate);
    now = Date.now();
    elapsed= now - then;
    if(elapsed > fpsInterval){
        then = now - (elapsed % fpsInterval);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        //Вызовы функций
        DrawAllBackGrounds();
        DrawPlayerSprite();
        DrawWaterSpiritSprite();
        MovePlayer(direction);
        MoveFireBall();
        console.log(positionOnTheMap);
    }
}


StartAnimating(fpsnumber);