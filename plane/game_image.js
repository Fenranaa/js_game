class GameImage {
  constructor(game, name) {
    this.texture = game.textureByName(name);
    this.x = 0;
    this.y = 0;
    this.h = this.texture.height;
    this.w = this.texture.width;
    this.speed = 10 ;
  }

  draw() {}

  update() {}
}

class Player extends GameImage {
  constructor(game, name) {
    super(game, name);
  }

  moveLeft() {
    if (this.x <= 0) {
      this.x = 0;
    } else {
      this.x -= this.speed;
    }
  }

  moveRight() {
    if (this.x >= 480 - this.w) {
      this.x = 480 - this.w;
    } else {
      this.x += this.speed;
    }
  }
  moveUp() {
    if(this.y <= 0) {
        this.y = 0
    }else{
        this.y -= this.speed
    }
  }
  moveBottom() {
    if(this.y >= 700 - this.h){
        this.y = 700 - this.h
    }else{
        this.y += this.speed
    }
  }
}
