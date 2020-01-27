// var SceneStart = function(game) {
//   s = {};

//   s.draw = function() {
//     game.context.fillText("按r开始游戏", 110, 100);
//   };

//   s.update = function() {};

//   game.registerAction("r", function() {
//     var s = Scene(game);
//     game.replaceScene(s);
//   });

//   return s;
// };

class SceneStart extends Scene {
  constructor(game) {
    super(game);
    game.registerAction("r", function() {
      var s = new SceneMain(game);
      game.replaceScene(s);
    });
  }

  draw() {
    this.game.context.fillText("按r开始游戏", 110, 100);
  }
}
