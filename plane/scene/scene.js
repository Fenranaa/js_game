class Scene {
  constructor(game) {
    this.game = game;
    this.elements = []
  }

  draw() {
    for (var i = 0; i < this.elements.length; i++) {
      var e = this.elements[i]
      this.game.drawImage(e);
    }
  }

  addElements(img) {
    this.elements.push(img)
  }
  update() {}
}
