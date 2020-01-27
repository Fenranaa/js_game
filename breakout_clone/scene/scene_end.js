class SceneEnd extends Scene {
  constructor(game) {
    super(game);
  }

  draw() {
    this.game.context.fillText("游戏结束 ", 110, 100);
  }
}
