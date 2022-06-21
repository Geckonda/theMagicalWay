var canv = document.getElementById('canvas');
//Подготовка к началу игры ( Старт )
var startTheGame = document.getElementById('start');//Кнопка
var ahead = document.getElementById('Letsplay');//Это section
var nextStep = document.getElementById('go');//Кнопка
var logo = document.getElementById('logo');//Это section
var gameHistory = document.getElementById('history');//Это section
var gameTask = document.getElementById('task');//Это section
var gameControling = document.getElementById('control');//Это section
var interface = document.getElementById('interface');

var stepMarker = 0;
var begin = false;

//Пауза
var ESC = false;
var pauseInfo = document.getElementById('pause');
//Конец игры
////Поражение
var gameOver = false;
var gameOverInfo = document.getElementById('gameover') ;
////Победа
var victoryInfo = document.getElementById('finish');

function LetsStart(){
    canv.style.visibility = 'visible';
    interface.style.visibility = 'visible';
    startTheGame.style.visibility = 'hidden';
    begin = true;
    console.log("Ok");
}
function NextStep(){
    stepMarker++;
    if(stepMarker == 1){
        nextStep.style.color = '#CCCCCC';
        logo.style.visibility = 'hidden';
        gameHistory.style.visibility = 'visible'
    }
    if(stepMarker == 2){
        gameHistory.style.visibility = 'hidden';
        gameTask.style.visibility = 'visible';
    }
    if(stepMarker == 3){
        gameTask.style.visibility = 'hidden';
        gameControling.style.visibility = 'visible';
    }
    if(stepMarker == 4){
        gameControling.style.visibility = 'hidden';
        ahead.style.visibility = 'hidden';
        startTheGame.style.visibility = 'visible';
    }
}