class SceneMain extends Scene {
  constructor(game) {
    super(game);
    this.numberOfEnemy = 10;
    this.bg = new Background(game, "sky");
    this.bg2 = new Background(game, "sky");
    this.player = new Player(game, "player");
    this.player.x = 100;
    this.player.y = 500;
    this.init();
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

    this.game.registerAction("f", () => {
      this.player.fire();
    });
    this.addElements(this.bg);
    this.bg2.y = -this.bg2.h 
    this.addElements(this.bg2);
    this.addElements(this.player);

    this.addEnemys();
  }
  addEnemys() {
    var es = [];
    for (var i = 0;i < this.numberOfEnemy; i++) {
      var e = new Enemy(this.game)
      es.push(e)
      this.addElements(e)
    }
    this.enemys = es
  }
  update() {
    super.update()
  }
}
