var Paddle = function(game) {
  // var image = imageFromPath("./images/paddle.png");
  var img = game.imageByName("paddle");

  var o = {
    x: 160,
    y: 260,
    speed: 5
  };
  o.image = img.image;
  o.h = img.h;
  o.w = img.w;

  o.moveLeft = function() {
    if (o.x <= 0) {
      o.x = 0;
    } else {
      o.x -= o.speed;
    }
  };
  o.moveRight = function() {
    if (o.x >= 400 - o.image.width) {
      o.x = 400 - o.image.width;
    } else {
      o.x += o.speed;
    }
  };
  //碰撞检测
  o.collide = function(ball) {
    var ballCentreX = ball.w / 2;
    var oCentreX = o.w / 2;
    var oCentreY = o.h / 2;
    var ballCentreY = ball.h / 2;
    if (
      Math.abs(ball.x + ballCentreX - (o.x + oCentreX)) <=
        ballCentreX + oCentreX &&
      Math.abs(ball.y + ballCentreY - (o.y + oCentreY)) <=
        ballCentreY + oCentreY
    ) {
      log("发生碰撞");
      return true;
    }
    return false;
  };
  return o;
};
