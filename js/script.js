

var canvas = document.querySelector("#gamecanvas");
var context = canvas.getContext('2d');

context.fillStyle='black'
context.fillRect(0,0,canvas.width,canvas.height);

let player = new Player(canvas.width/2-35,canvas.height-20,80,20,'red')
let bricks = [];

let ball = new Ball(player.x-50,player.y-100,10,'white')
let gameInterval;

let score = 0;
let level = 1;
let bricksCount = 8;
let bricksBroken=0;
let hasPowerUp=false;


function gameLoop(){
    gameInterval = requestAnimationFrame(gameLoop)
    context.fillStyle='black'
    context.fillRect(0,0,canvas.width,canvas.height);


    player.draw();
    player.update();


    ball.draw();
    ball.update(player);


    bricks.forEach((brick,idx)=>{
        brick.draw();
        if(ball.hit(brick)){
            brick.takeDamage()
            score+=25
            click.play()
        }
        if(brick.toDelete){
            bricks.splice(idx,1)
            bricksBroken++
            score+=100
        }
      
    })

    if(!bricks.length){
        context.font='25px Arial'
        context.fillText(`Game Over!, Score:${score}`, 10, canvas.height-30);
        level++;
        bricksCount+=3;
        createBricks();
        powerUpBtn.style.display='block'
        return;
    }


    if(ball.y > canvas.height + 20){
        cancelAnimationFrame(gameInterval);
        console.log("Game over!!")
    }


    context.font = "30px Arial";
    context.fillText(`Score:${score}`, 10, canvas.height-30);

    context.font = "20px Arial";
    context.fillText(`Level:${level}`, 10, canvas.height-70);


}


   createBricks()
   gameLoop()









onkeydown=(e)=>{
    if(e.key === "ArrowLeft"){
        player.move(-2)
    }
    if(e.key === "ArrowRight"){
        player.move(2)
    }
}


onkeyup=()=>{
    player.dx = 0;
}


function createBricks(){
    let brickX = 0,
        brickY = 0;
    for(let i=0;i<bricksCount;i++){
        bricks.push(new Brick(brickX+5,brickY + 10, 75,25,`hsl(${Math.random() * 100},100%,50%)`));
        brickX += 105;

        if(brickX > canvas.width){
            brickX = 0;
            brickY += 35
        }
    }
}



let leftArrowBtn = document.querySelector(".arrowLeftBtn");
let rightArrowBtn = document.querySelector(".arrowRightBtn");
let powerUpBtn = document.querySelector(".powerUpBtn");
    //powerUpBtn.style.display='none'


leftArrowBtn.onclick=()=>{
        player.move(-2)
}

rightArrowBtn.onclick=()=>{
    player.move(2)
}


powerUpBtn.onclick=()=>{
    powerUpBtn.style.display='none'
    
    bricks.forEach(b=>{
        if(Math.random() > .3){
            b.toDelete = true;
        }
    })
}