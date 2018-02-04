

var ctx;

var xPos = 0
var yPos = 0

var angle = 45.0;
var magnitude = 2;

class Ripple {
  constructor (center, x, y) {
    this.center = center;
    this.x = x;
    this.y = y;
  }
}

class Lily {
  constructor(angle, x, y, scale) {
    this.angle = angle;
    this.x = x;
    this.y = y;
    this.scale = scale;
  }
}

var lilies = [];


function draw() {

      var moveX = Math.cos(angle) * magnitude;
      var moveY = Math.sin(angle) * magnitude;

      var newX = xPos + moveX;
      var newY = yPos + moveY;
      
      angle -= .0025;

      ctx.fillStyle = "#1f9ad6";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (let lily of lilies) {
        lily.x += (Math.random() * .2) - .1
        lily.y += (Math.random() * .2) - .1
        drawLily(lily)
      }
      
      xPos = newX;
      yPos = newY;


      window.requestAnimationFrame(draw);
}

function drawRipple(ripple) {

}
function drawLily(lily) {

  ctx.translate(lily.x, lily.y);
  ctx.rotate(lily.angle);
  ctx.scale(lily.scale, lily.scale);

  ctx.fillStyle = "#ffffff";
  ctx.beginPath();
  ctx.arc(0, 0, 50, 1.3, 1.8, true); // Outer circle
  ctx.lineTo(0, 0);
  ctx.lineTo(15, 45);
  ctx.fill();
  ctx.setTransform(1, 0, 0, 1, 0, 0);

}

function init()
{
    canvas = document.getElementById("mainCanvas");
    canvas.width = document.body.clientWidth * 1.5; //document.width is obsolete
    canvas.height = document.body.clientHeight * 1.5; //document.height is obsolete
    canvasW = canvas.width;
    canvasH = canvas.height;

    ctx = canvas.getContext("2d");
    ctx.fillStyle = "#1f9ad6";

    ctx.fillRect(0, 0, canvas.width, canvas.height);

    var xPos = 0;
    var yPos = 0;
    
    var angle = Math.PI * .25;
    
    for (var j = 0; j < 100; j++) {
      for (var i = 0; i < 1; i++)
      { 
        if (Math.random() > .7) {
          var randomAngle = Math.random() * Math.PI * 2.0;
          var xOffset = Math.cos(randomAngle) * 300;
          var yOffset = Math.sin(randomAngle) * 300;

          var lily = new Lily(Math.random() * Math.PI * 2.0, yPos + xOffset, xPos + yOffset, .8 + Math.random() * .2)
          lilies.push(lily)
        }
      }

      var xChange = Math.cos(angle) * 30.0;
      var yChange = Math.sin(angle) * 30.0

      xPos += xChange;
      yPos += yChange;

      angle += .01;
    }

    window.requestAnimationFrame(draw);
}

init();
