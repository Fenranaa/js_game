var Ball = function() {
  var image = imageFromPath("./images/ball.png");
  var o = {
    image: image,
    x: 120,
    y: 200,
    speedX: 5,
    speedy: 5,
    fired: false,
    fire: function() {
      this.fired = true;
    }
  };
  o.move = function() {
    if (o.fired) {
      if (o.x <= 0 || o.x + 17 > 400) {
        o.speedX = -o.speedX;
      }

      if (o.y <= 0 || o.y >= 300) {
        o.speedy = -o.speedy;
      }

      o.x += o.speedX;
      o.y += o.speedy;
    }

    //反弹
    o.bounce = function() {
      o.speedy = -o.speedy;
    };
  };
  return o;
};
