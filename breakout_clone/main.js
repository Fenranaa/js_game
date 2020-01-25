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
var pause = false;
enableDebug = function(game, pause1) {
  if (!pause1) {
    return;
  }

  window.addEventListener("keydown", event => {
    if (event.key == "q") {
      pause = !pause;
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
  var game = Game(60, images, function(g) {
    var paddle = Paddle(g);
    var ball = Ball(g);
    blocks = loadLevel(g, 1);
    //分数
    var score = 0;

    game.registerAction("a", function() {
      paddle.moveLeft();
    });

    game.registerAction("d", function() {
      paddle.moveRight();
    });

    game.registerAction("f", function() {
      ball.fire();
    });

    var enableDragBall = false;
    game.canvas.addEventListener("mousedown", function(event) {
      // log("movedown")

      var x = event.offsetX;
      var y = event.offsetY;
      if (ball.hasPosition(x, y)) {
        log("move");
        enableDragBall = true;
      }
    });

    game.canvas.addEventListener("mousemove", function(event) {
      var x = event.offsetX;
      var y = event.offsetY;
      if (enableDragBall) {
        ball.x = x;
        ball.y = y;
      }
    });
    game.canvas.addEventListener("mouseup", function(event) {
      // log("moveup")
      enableDragBall = false;
    });

    game.update = function() {
      if (pause) {
        return;
      }
      //球的移动
      ball.move();
      //判断挡板和球是否相撞
      if (paddle.collide(ball)) {
        ball.bounce();
      }

      //循环判断球和砖块相撞
      for (var i = 0; i < blocks.length; i++) {
        var block = blocks[i];
        if (block.alive && block.collide(ball)) {
          score += 1;
          block.kill();
          ball.bounce();
        }
      }
    };

    game.draw = function() {
      game.drawImage(paddle);
      game.drawImage(ball);

      for (var i = 0; i < blocks.length; i++) {
        block = blocks[i];
        if (block.alive) {
          game.drawImage(block);
        }
      }

      game.context.fillText("分数: " + score, 10, 290);
    };
  });
  enableDebug(game, true);
};
main();
