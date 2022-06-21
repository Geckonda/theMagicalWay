//Canvas
var ctx = canv.getContext('2d');
    canv.width = 800;
    canv.height = 600;

//Map        !-------------------!
var pointOnMap = 0
//BackGround        !-------------------!
var BackGroundCenter = new Image();
var BackGroundLeft = new Image();
var BackGroundRight = new Image();
BackGroundCenter.src = "../TMW/images/background/thesec.png";
BackGroundLeft.src = "../TMW/images/background/thesec.png";
BackGroundRight.src = "../TMW/images/background/thesec.png";

var BGCStartPoint = 0;
var BGRStartPoint = 800;
var BGLStartPoint = -800;
//DrawingBackGround
function DrawAllBackGrounds(){
    ctx.drawImage(BackGroundCenter, BGCStartPoint, 0, canv.width, canv.height);
    ctx.drawImage(BackGroundRight, BGRStartPoint, 0, canv.width, canv.height);
    ctx.drawImage(BackGroundLeft, BGLStartPoint, 0, canv.width, canv.height);
}

//Player        !-------------------!
const playerSprite = new Image();
playerSprite.src = '../TMW/images/characters/The2.png'
////HP
var hpPlayer = document.getElementById('HP');
var hpPlayerWidth = 200;
////MP
var mpPlayer = document.getElementById('MP');
var mpPlayerWidth = 200;
//DrawingPlayer
function DrawPlayerSprite(){
    ctx.drawImage(playerSprite, player.width * player.frameX,player.height * player.frameY,
        player.width,player.height,player.x,player.y,player.width+20,player.height+30);
}
//MOBS          !---------------------!
////WaterSpirit
const WaterSpiritSprite = new Image();
WaterSpiritSprite.src = '../TMW/images/characters/ElementWater.png'
//DrawWaterSpirit
function DrawWaterSpiritSprite(){
    ctx.drawImage(WaterSpiritSprite,WaterSpirit.width * WaterSpirit.frameX,
         WaterSpirit.height * WaterSpirit.frameY, WaterSpirit.width, 
         WaterSpirit.height,WaterSpirit.x,WaterSpirit.y,
         WaterSpirit.width+50,WaterSpirit.height+80);
}
//abilities         !-------------------!
////fireball
const fireballSprite = new Image();
fireballSprite.src = '../TMW/images/abilities/fireball.png';
//drawFireBall
function drawfireballSprite(img, sX,sY,sW,sH,dX,dY,dW,dH){
    ctx.drawImage(fireballSprite, fireball.width * fireball.frameX,
        fireball.height * fireball.frameY,
        fireball.width,fireball.height,fireball.x,
        fireball.y,fireball.width-20,fireball.height-20);
}
