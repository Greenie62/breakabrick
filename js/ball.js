
let click = new Audio("./assets/myclick.mp3")
let jump = new Audio('./assets/jump.mp3')

class Ball{
    constructor(x,y,r,color){
        this.x = x;
        this.y = y;
        this.r = r;
        this.color = color;
        this.vel={x:2.5,y:2.5}
    }


    draw(){
        context.beginPath();
        context.fillStyle = this.color
        context.arc(this.x,this.y,this.r, Math.PI * 2,false);
        context.fill()
    }

    update(paddle){
        this.x += this.vel.x;
        this.y += this.vel.y;

        if(this.y < 0){
            // jump.play()
            this.vel.y *= -1;
        }
        if(this.x < 0 || this.x > canvas.width-this.r){
            // jump.play()

            this.vel.x *= -1;
        }

        if(this.x > paddle.x && this.x < paddle.x+paddle.width && this.y === paddle.y){
            jump.play()

            this.vel.y *= -1;

        }
    }


    hit(brick){
        if(this.x > brick.x && this.x < brick.x + brick.width && this.y <= brick.y+brick.height){
            this.vel.y *= -1
            console.log("hit brick")
            click.play()
            return true;
        }
        // if(this.x > brick.x && this.x < brick.x + brick.width && this.y >= brick.y){
        //     this.vel.y *= -1
        //     return true;
        // }
        // if(this.y > brick.y && this.y < brick.y + brick.height && this.x > brick.x){
        //     this.vel.x *= -1
        //     return true;
        // }
        // if(this.y > brick.y && this.y < brick.y + brick.height && this.x < brick.x + brick.width){
        //     this.vel.x *= -1
        //     return true;
        // }
    }


}