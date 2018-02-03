function init()
{
    canvas = document.getElementById("mainCanvas");
    canvas.width = document.body.clientWidth; //document.width is obsolete
    canvas.height = document.body.clientHeight; //document.height is obsolete
    canvasW = canvas.width;
    canvasH = canvas.height;

    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "#1f9ad6";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function draw() {
    var canvas = document.getElementById('mainCanvas');
    if (canvas.getContext) {
       var ctx = canvas.getContext('2d');

    ctx.lineWidth=2;

      ctx.strokeStyle="#ffffff";
      ctx.beginPath();
      ctx.arc(900, 300, 90, 0, Math.PI * 2, true); // Outer circle
      ctx.stroke();
    }
  }

init();
draw();