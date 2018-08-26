var context = document.getElementById('canvas').getContext("2d");
var paint = false;

context.fillStyle = "#ffffff";
context.fillRect(0,0, 720, 540);

context.lineJoin = "round";

$("#canvas").mousedown(function(e){
  var mouseX = e.pageX - this.offsetLeft;
  var mouseY = e.pageY - this.offsetTop;

  paint = true;
  addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop);
  redraw();
});

$("#canvas").mousemove(function(e){
  if(paint){
    addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop, true);
    redraw();
  }
});

$("#canvas").mouseup(function(e){
  paint = false;
});

$("#canvas").mouseleave(function(e){
  paint = false;
});

var clickX = new Array();
var clickY = new Array();
var clickDrag = new Array();
var clickColor = new Array();
var clickSize = new Array();
var paint;

function addClick(x, y, dragging)
{
  clickX.push(x);
  clickY.push(y);
  clickDrag.push(dragging);
  clickColor.push(document.getElementById("color").value);
  clickSize.push(document.getElementById("size").value);
}

function redraw(){

  for(var i=0; i < clickX.length; i++) {
    context.beginPath();
    if(clickDrag[i] && i){
      context.moveTo(clickX[i-1], clickY[i-1]);
     }else{
       context.moveTo(clickX[i]-1, clickY[i]);
     }
     context.lineTo(clickX[i], clickY[i]);
     context.closePath();
     context.strokeStyle = clickColor[i];
     context.lineWidth = clickSize[i];
     context.stroke();
  }
}

$("#clear").click(function () {
  clearCanvas();
});

function clearCanvas()
{
	context.clearRect(0, 0, context.Height, context.Width);
}

document.getElementById('download').addEventListener('click', function() {
    downloadCanvas(this, 'canvas', 'download.png');
}, false);

function downloadCanvas(link, canvasId, filename) {
    link.href = document.getElementById(canvasId).toDataURL();
    link.download = filename;
}

/* Open the sidenav */
function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
}

/* Close/hide the sidenav */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

function updateSlider(e) {
  document.getElementById('sliderValue').innerHTML = e;
}
