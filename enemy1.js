class Enemy1{
    constructor(x,y){
        var options = {
            'restitution' : 0.8,
            'friction' : 1.0,
            'density' : 1.0
        }
        this.body = Bodies.rectangle(x,y,70,70,options);
        this.width = 70;
        this.height = 70;
        this.visibility = 255;
        this.image = loadImage("sprites/Dhairya Pic.png");
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        if(this.body.speed < 8){
            push();
            translate(pos.x,pos.y);
            rotate(angle);
            imageMode(CENTER);
            image(this.image,0,0,this.width,this.height);
            pop();
        }
        else{
            World.remove(world, this.body);
            push();
            this.visibility = this.visibility - 5;
            tint(255,this.visibility);
            rect(this.body.position.x,this.body.position.y,70,70)
            pop();
        }
    }

    score(){
        if(this.visibility < 0 && this.visibility > -100){
            score++;
        }
    }
}