//Переменные для работы с картой
var positionOnTheMap = 0;
var endOfTheMap = 1200;

//Переменная направления
var direction
//Движение player'a
window.addEventListener("keydown", function(e){
    if(e.keyCode == 39){
        player.moving = true;
        direction = "right";
    }
    if(e.keyCode == 37){
        player.moving = true;
        direction = "left";
    }
    if(e.keyCode == 49 && fireball.recharging == false){
        fireball.moving = true;
        fireball.recharging = true;
        fireball.x = player.x;
        RechargingAbilities(fireball);
    }
})
window.addEventListener("keyup", function(e){
    if(e.keyCode == 39 && direction == "right"){
        player.frameY = 0;
        player.frameX = 0;
        player.moving = false;
    }
    if(e.keyCode == 37 && direction == "left"){
        player.frameY = 0;
        player.frameX = 0;
        player.moving = false;
    }
})
function MovePlayer(direction){
    if((direction == "right") && (player.moving) && (positionOnTheMap < endOfTheMap)){
        if (player.x <= (canv.width - player.width) / 2) {//Если персонаж не дошел до середины (на экране) карты
            player.x += player.speed;
            player.frameY = 2;
            handlePlayerFrame();
        }
        else{//Если дошел
            player.frameY = 2;
            handlePlayerFrame();
            MoveMap(direction);
        }
    }
    if((direction == "left") && (player.x > 0) && (player.moving)){
        if(player.x >= 50){
            player.x -= player.speed;
            player.frameY = 1;
            handlePlayerFrame();
        }
        else{
            player.frameY = 1;
            handlePlayerFrame();
            MoveMap(direction);
        }
    }
}
//Движение FireBall'a
function MoveFireBall(){
    if(fireball.moving == true){
        fireball.x += fireball.speed;
        handleFireballFrame();
        drawfireballSprite();
    }
}
function handleFireballFrame(){
    if(fireball.frameX < 3)
        fireball.frameX++;
    else
        fireball.frameX = 0;
}
//Анимация персонажа
function handlePlayerFrame(){
    if(player.frameX < 3 && player.moving)
        player.frameX++;
    else 
        player.frameX = 0;

    if(player.moving == false) {
        player.frameY = 0;
        player.frameX = 0;
    }
}
//Движение карты
function MoveMap(direction){
    if(direction == "right" && player.moving){
        if(BGCStartPoint > -800){
            BGCStartPoint -= player.speed;
            BGRStartPoint -= player.speed;
            BGLStartPoint -= player.speed;
            positionOnTheMap += player.speed;
        }
        else{
            BGCStartPoint = 0;
            BGRStartPoint = 800;
            BGLStartPoint = -800;
        }
    }
    if(direction == "left" && player.moving){
        if(BGCStartPoint < 800){
            BGCStartPoint += player.speed;
            BGRStartPoint += player.speed;
            BGLStartPoint += player.speed;
            positionOnTheMap -= player.speed;
        }
        else{
            BGCStartPoint = 0;
            BGRStartPoint = 800;
            BGLStartPoint = -800;
        }
    }
}
//Перезарядка способностей
function RechargingAbilities(ability){
    setTimeout(()=>{
        ability.recharging = false;
    }, ability.cooldown);
}