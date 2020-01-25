var Game = function(fps, images, runCallback) {
  var g = {
    scene: null,
    actions: {},
    keydowns: {},
    images: {}
  };
  var canvas = document.querySelector("#id-canvas");
  var context = canvas.getContext("2d");
  g.canvas = canvas;
  g.context = context;

  window.addEventListener("keydown", event => {
    g.keydowns[event.key] = true;
  });

  window.addEventListener("keyup", event => {
    g.keydowns[event.key] = false;
  });

  g.registerAction = function(key, callback) {
    g.actions[key] = callback;
  };

  g.drawImage = function(o) {
    // log("draw", o.image)
    g.context.drawImage(o.image, o.x, o.y);
  };

  g.update = function() {
    g.scene.update();
  };

  g.draw = function() {
    g.scene.draw();
  };
  window.fps = fps;
  runloop = function() {
    var actions = Object.keys(g.actions);
    for (var i = 0; i < actions.length; i++) {
      var key = actions[i];
      if (g.keydowns[key]) {
        g.actions[key]();
      }
    }
    g.update();
    context.clearRect(0, 0, canvas.width, canvas.height);
    g.draw();

    setTimeout(() => {
      runloop();
    }, 1000 / window.fps);
  };

  var loads = [];

  var names = Object.keys(images);

  for (var i = 0; i < names.length; i++) {
    let name = names[i];
    var path = images[name];
    let img = new Image();
    img.src = path;

    img.onload = function() {
      loads.push(1);
      g.images[name] = img;
      if (loads.length == names.length) {
        log("aaa", g.images);
        g.run();
      }
    };
  }

  g.imageByName = function(name) {
    var img = g.images[name];
    var image = {
      w: img.width,
      h: img.height,
      image: img
    };
    return image;
  };

  g.run = function() {
    runCallback(g);
  };

  g.runWithScene = function(scene) {
    g.scene = scene;
    setTimeout(() => {
      runloop();
    }, 1000 / window.fps);
  };

  g.replaceScene = function(endScene) {
    g.scene = endScene;
  };

  return g;
};
