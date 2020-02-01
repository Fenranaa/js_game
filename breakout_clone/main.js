loadLevel = function(game, n) {
  n = n - 1;
  var level = levels[n];
  var blocks = [];
  for (var i = 0; i < level.length; i++) {
    var p = level[i];
    var block = Block(game, p);
    blocks.push(block);
  }
  return blocks;
};
var blocks = [];
 window.pause = false;
enableDebug = function(game, pause1) {
  if (!pause1) {
    return;
  }

  window.addEventListener("keydown", event => {
    if (event.key == "q") {
      pause = !window.pause;
    } else if ("123456".includes(event.key)) {
      blocks = loadLevel(game, event.key);
    }
  });

  var debugSpeed = document.querySelector("#id-input-speed");
  debugSpeed.addEventListener("input", event => {
    window.fps = Number(event.target.value);
  });
};
var main = function() {
  var images = {
    ball: "./images/ball.png",
    block: "./images/block001.png",
    paddle: "./images/paddle.png"
  };
  var game =new Game(60, images, function(g) {
    
    var scene = new SceneStart(g)
    g.runWithScene(scene)

  });
  enableDebug(game, true);
};
main();
