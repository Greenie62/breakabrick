

class Brick{
    constructor(x,y,width,height,color){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
        this.toDelete = false;
        this.damageCounter = 1;
    }


     draw(){
         context.beginPath();
         context.fillStyle=this.color;
         context.fillRect(this.x,this.y,this.width,this.height);
         context.fill()
     }


    //  hit(ball){
         
    //     if(ball.x > this.x && 
    //        ball.x < this.x + this.width &&
    //        ball.y <= this.y+this.height){
    //            this.damageCounter++;
    //            this.color='orange'
    //            ball.vel.y *= -1
    //            return true;
    //        }
     
    //         if(this.damageCounter === 2){
    //             this.color = 'white'
    //         }
    //         if(this.damageCounter === 3){
    //             this.toDelete = true;
    //         }
    //  }


     takeDamage(){
         this.damageCounter++;
        //  if(this.damageCounter === 2){
        //      this.color = Math.random() > .5 ? "red" : "orange"
        //  }
         if(this.damageCounter === 2){
            this.toDelete = Math.random() >  .5 ? true : false;
            this.color = Math.random() > .5 ? "white" : "gray"
        }

        if(this.damageCounter === 3){
            this.toDelete = true;
        }
         
     }

}

