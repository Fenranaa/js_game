var config = {
  player_speed: 10,
  bg_speed: 3,
  bullet_speed: 5,
  enemy_speed: 5
};

class GameImage {
  constructor(game, name) {
    this.game = game;
    this.texture = game.textureByName(name);
    this.x = 0;
    this.y = 0;
    this.h = this.texture.height;
    this.w = this.texture.width;
    this.speed = 10;
  }

  draw() {}

  update() {}
}
class Background extends GameImage {
  constructor(game) {
    super(game, "sky");
    this.init();
  }

  init() {
    this.speed = config.bg_speed;
  }

  update() {
    this.speed = config.bg_speed;
    this.y += this.speed;
    if (this.y >= this.h) {
      this.y = -(this.h - 2);
    }
  }
}
class Bullet extends GameImage {
  constructor(game) {
    super(game, "bullet");
    this.init();
  }

  init() {
    this.speed = 5;
  }
  update() {
    this.speed = config.bullet_speed;
    this.y -= this.speed;
  }
}

class Player extends GameImage {
  constructor(game, name) {
    super(game, name);
    this.init();
  }
  init() {
    this.speed = config.player_speed;
    this.cooldown = 0;
  }

  update() {
    this.speed = config.player_speed;
    if (this.cooldown > 0) {
      this.cooldown--;
    }
  }
  fire() {
    if (this.cooldown == 0) {
      this.cooldown = 7;
      var x = this.x + this.w / 2;
      var y = this.y;
      var b = new Bullet(this.game);
      b.x = x;
      b.y = y;
      this.scene.addElements(b);
    }
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
    if (this.y <= 0) {
      this.y = 0;
    } else {
      this.y -= this.speed;
    }
  }
  moveBottom() {
    if (this.y >= 700 - this.h) {
      this.y = 700 - this.h;
    } else {
      this.y += this.speed;
    }
  }
}

class Enemy extends GameImage {
  constructor(game) {
    var type = randomBetwenn(1, 2);
    var name = "enemy" + type;
    super(game, name);
    this.init();
  }

  init() {
    this.speed = randomBetwenn(2, 5);
    this.x = randomBetwenn(0, 480 - this.w);
    this.y = -randomBetwenn(0, this.h);
  }
  moveDown() {
    this.y += this.speed;
  }

  update() {
    // this.speed = config.enemy_speed;
    this.y += this.speed;
    if (this.y > 700) {
      this.init();
    }
  }
}
