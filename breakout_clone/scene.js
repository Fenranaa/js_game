var Scene = function(game) {
  s = {
    game: game
  };

  var paddle = Paddle(game);
  var ball = Ball(game);
  blocks = loadLevel(game, 1);
  //分数
  var score = 0;

  s.draw = function() {
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

  s.update = function() {
    if (window.pause) {
        return;
      }
    //球的移动
    ball.move();
    //判断球是否碰到底部
    if(ball.y > paddle.y) {
        var end = SceneEnd(game)
        game.replaceScene(end)
    }
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

  var enableDragBall = false;
  game.canvas.addEventListener("mousedown", function(event) {
    var x = event.offsetX;
    var y = event.offsetY;
    if (ball.hasPosition(x, y)) {
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

  game.registerAction("a", function() {
    paddle.moveLeft();
  });

  game.registerAction("d", function() {
    paddle.moveRight();
  });

  game.registerAction("f", function() {
    ball.fire();
  });   

  return s;
};
