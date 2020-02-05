// var blocks = [];
//  window.pause = false;
// enableDebug = function(game, pause1) {
//   if (!pause1) {
//     return;
//   }

//   window.addEventListener("keydown", event => {
//     if (event.key == "q") {
//       pause = !window.pause;
//     } else if ("123456".includes(event.key)) {
//       blocks = loadLevel(game, event.key);
//     }
//   });

//   var debugSpeed = document.querySelector("#id-input-speed");
//   debugSpeed.addEventListener("input", event => {
//     window.fps = Number(event.target.value);
//   });
// };
var main = function() {
  var images = {
    bullet: "./images/bullet1.png",
    // cloud: "./images/block001.png",
    player: "./images/me1.png",
    sky: "./images/background.png",
    enemy1: "./images/enemy1.png",
    enemy2: "./images/enemy2.png",
    enemy3: "./images/enemy3_n1.png",
    bullet: "./images/bullet1.png"
  };
  var game = new Game(60, images, function(g) {
    var scene = new SceneMain(g);
    g.runWithScene(scene);
  });
};
main();
