var Block = function(game, position) {
  var p = position;
  // game.imageByName(""./images/block001.png"

  var img = game.imageByName("block");

  if (p.lifes == undefined) {
    p.lifes = 1;
  }
  var o = {
    x: p.x,
    y: p.y,
    alive: true,
    lifes: p.lifes
  };

  o.image = img.image
  o.w = img.w
  o.h = img.h

  o.kill = function() {
    o.lifes = o.lifes - 1;
    if (o.lifes < 1) {
      o.alive = false;
    }
  };

  //碰撞检测
  o.collide = function(ball) {
    if (
      Math.abs(ball.x + ball.image.width / 2 - (o.x + o.image.width / 2)) <=
        o.image.width / 2 + ball.image.width / 2 &&
      Math.abs(ball.y + ball.image.height / 2 - (o.y + o.image.height / 2)) <=
        ball.image.height / 2 + o.image.height / 2
    ) {
      log("球和砖块发生碰撞");
      return true;
    }
    return false;
  };
  return o;
};
