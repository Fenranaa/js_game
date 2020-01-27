class SceneMain extends Scene {
  constructor(game) {
    super(game);
    this.paddle = Paddle(game);
    this.ball = Ball(game);
    this.blocks = loadLevel(game, 1);
    this.score = 0;
    this.init(game);
  }

  draw() {
    this.game.drawImage(this.paddle);
    this.game.drawImage(this.ball);
    var block = null;
    for (var i = 0; i < this.blocks.length; i++) {
      block = this.blocks[i];
      if (block.alive) {
        this.game.drawImage(block);
      }
    }

    this.game.context.fillText("分数: " + this.score, 10, 290);
  }

  update() {
    if (window.pause) {
      return;
    }
    //球的移动

    this.ball.move();
    //判断球是否碰到底部
    if (this.ball.y > this.paddle.y) {
      var end = new SceneEnd(this.game);
      this.game.replaceScene(end);
    }
    //判断挡板和球是否相撞
    if (this.paddle.collide(this.ball)) {
      this.ball.bounce();
    }

    //循环判断球和砖块相撞
    for (var i = 0; i < this.blocks.length; i++) {
      var block = this.blocks[i];
      if (block.alive && block.collide(this.ball)) {
        this.score += 1;
        block.kill();
        this.ball.bounce();
      }
    }
  }

  init() {
    var enableDragBall = false;
    this.game.canvas.addEventListener("mousedown", event => {
      var x = event.offsetX;
      var y = event.offsetY;
      if (this.ball.hasPosition(x, y)) {
        enableDragBall = true;
      }
    });

    this.game.canvas.addEventListener("mousemove", event => {
      var x = event.offsetX;
      var y = event.offsetY;
      if (enableDragBall) {
        this.ball.x = x;
        this.ball.y = y;
      }
    });
    this.game.canvas.addEventListener("mouseup", event => {
      // log("moveup")
      enableDragBall = false;
    });

    this.game.registerAction("a", () => {
      log(this.paddle);
      this.paddle.moveLeft();
    });

    this.game.registerAction("d", () => {
      this.paddle.moveRight();
    });

    this.game.registerAction("f", () => {
      this.ball.fire();
    });
  }
}
