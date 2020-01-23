var Game = function(fps) {
  var g = {
    actions: {},
    keydowns: {}
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
    g.context.drawImage(o.image, o.x, o.y);
  };
  window.fps = fps
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

  setTimeout(() => {
    runloop();
  }, 1000 / window.fps);
  return g;
};
