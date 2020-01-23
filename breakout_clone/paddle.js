var Paddle = function() {
  var image = imageFromPath("./images/paddle.png");
  var o = {
    image: image,
    x: 160,
    y: 260,
    speed: 5,
    moveLeft: function() {
      if (this.x <= 0) {
        this.x = 0;
      } else {
        this.x -= this.speed;
      }
    },
    moveRight: function() {
      if (this.x >= 400 - this.image.width) {
        this.x = 400 - this.image.width;
      } else {
        this.x += this.speed;
      }
    }
  };
  //碰撞检测
  o.collide = function(ball) {
    var ballCentreX = ball.image.width / 2;
    var oCentreX = o.image.width / 2;
    var oCentreY = o.image.height / 2;
    var ballCentreY = ball.image.height / 2;
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
