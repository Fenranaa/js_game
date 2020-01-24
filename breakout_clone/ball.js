var Ball = function(game) {
  var o = game.imageByName("ball");
  o.x = 100;
  o.y = 200;
  o.speedX = 5;
  o.speedY = 5;
  o.fired = false;

  o.fire = function() {
    o.fired = true;
  };

  o.move = function() {
    if (o.fired) {
      log("ball移动", o);
      if (o.x <= 0 || o.x + 17 > 400) {
        o.speedX = -o.speedX;
      }

      if (o.y <= 0 || o.y >= 300) {
        o.speedY = -o.speedY;
      }

      o.x += o.speedX;
      o.y += o.speedY;
    }
  };

  //反弹
  o.bounce = function() {
    o.speedY = -o.speedY;
  };
  return o;
};
