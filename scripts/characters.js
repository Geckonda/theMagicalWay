const player = {
    x:0,	//Позиции персонажа по X&Y 
    y:480,
    width: 32,	// Ширина персонажа
    height: 48, // Высота персонажа 
    frameX:0, //Позиция спрайта на png по оси Х
    frameY:0, //Позиция спрайта на png по оси У
    speed:10, //Скороть игрока
    health:100,
    moving: false
};

const WaterSpirit = {
    x: 600,
    y:430,
    width: 32,
    height: 48,
    frameX: 0,
    frameY: 1,
    speed: 10,
    moving: false
};