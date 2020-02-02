class Game {
  constructor(fps, images, runCallback) {
    window.fps = fps;
    this.images = images;
    this.runCallback = runCallback;
    this.scene = null;
    this.actions = {};
    this.keydowns = {};
    this.canvas = document.querySelector("#id-canvas");
    this.context = this.canvas.getContext("2d");
    this.init()
  }

  init() {
    window.addEventListener("keydown", event => {
      this.keydowns[event.key] = true;
    });

    window.addEventListener("keyup", event => {
      this.keydowns[event.key] = false;
    });

    var loads = [];

    var names = Object.keys(this.images);
  
    for (var i = 0; i < names.length; i++) {
      let name = names[i];
      var path = this.images[name];
      let img = new Image();
      img.src = path;
  
      img.onload = () => {
        loads.push(1);
        this.images[name] = img;
        if (loads.length == names.length) {
          this.run();
        }
      };
    }
  }

  registerAction(key, callback) {
    this.actions[key] = callback;
  };

  drawImage(o) {
    // log("draw", o.image)
    this.context.drawImage(o.texture, o.x, o.y);
  };

  update() {
    this.scene.update();
  };

  draw() {
    this.scene.draw();
  };

  runloop() {
    var g =this
    var actions = Object.keys(g.actions);
    for (var i = 0; i < actions.length; i++) {
      var key = actions[i];
      if (g.keydowns[key]) {
        g.actions[key]();
      }
    }
    g.update();
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    g.draw();

    setTimeout(() => {
      this.runloop();
    }, 1000 / window.fps);
  };

  textureByName(name) {
    var img = this.images[name];
    return img;
  };

  run() {
    this.runCallback(this);
  };

  runWithScene(scene) {
    this.scene = scene;
    setTimeout(() => {
      this.runloop();
    }, 1000 / window.fps);
  };

replaceScene(endScene) {
    this.scene = endScene;
  };
}
