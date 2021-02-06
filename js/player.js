


class Player{
    constructor(x,y,width,height,color){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
        this.dx = 0;
    }

    draw(){
        context.beginPath();
        context.fillStyle=this.color;
        context.fillRect(this.x,this.y,this.width,this.height)
        context.fill();
    }


    update(){
        this.x += this.dx;

        if(this.x < 0){
            this.x += 2
        }
        if(this.x + this.width > canvas.width){
            this.x -= 2
        }
    }

    move(dir){
        this.dx = dir;
    }
}