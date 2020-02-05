var log = console.log.bind(console);

const imageFromPath = function(path) {
  var img = new Image();
  img.src = path;
  return img;
};

const randomBetwenn = function(start, end) {
  var num = Math.floor(Math.random() * (end - start + 1) + start)
    return num
};
