class SceneMain extends Scene {
  constructor(game) {
    super(game);
    this.bg = new GameImage(game, "sky")
    this.player = new Player(game, "player")
    this.player.x = 100
    this.player.y = 500
    this.init()
  }

  // draw() {
  //   this.game.drawImage(this.bg);
  //   this.game.drawImage(this.player)
  // }

  update() {
    // if (window.pause) {
    //   return;
    // }

    
   
  }

  init() {
    // var enableDragBall = false;
    // this.game.canvas.addEventListener("mousedown", event => {
    //   var x = event.offsetX;
    //   var y = event.offsetY;
    //   if (this.ball.hasPosition(x, y)) {
    //     enableDragBall = true;
    //   }
    // });

    // this.game.canvas.addEventListener("mousemove", event => {
    //   var x = event.offsetX;
    //   var y = event.offsetY;
    //   if (enableDragBall) {
    //     this.ball.x = x;
    //     this.ball.y = y;
    //   }
    // });
    // this.game.canvas.addEventListener("mouseup", event => {
    //   enableDragBall = false;
    // });

    this.game.registerAction("a", () => {
      this.player.moveLeft();
    });

    this.game.registerAction("d", () => {
      this.player.moveRight();
    });

    this.game.registerAction("w", () => {
      this.player.moveUp();
    });

    this.game.registerAction("s", () => {
      this.player.moveBottom();
    });


    this.addElements(this.bg)
    this.addElements(this.player)



    // this.game.registerAction("f", () => {
    //   this.ball.fire();
    // });
  }
}
