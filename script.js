var r = 255,
  g = 0,
  b = 0,
  a = 255;
var mouseIsDown = false;
var pencilSize = 1;
var x = 0,
  y = 0;
window.onload = function() {
  var element = document.getElementById('gamecanvas');
  // unnötiges setzen des Cursors -> kann man auch weglassen, is aber cool
  element.style.cursor = "pointer";
  var context = element.getContext('2d'),
    imgData;
  context.fillStyle = '#f7f7f7';
  context.fillRect(0, 0, element.width, element.height);
  imgData = context.getImageData(0, 0, element.width, element.height);
  element.onmousemove = function(e) {
    if (mouseIsDown) {
      x = e.pageX || event.clientX + document.body.scrollLeft;
      y = e.pageY || event.clientY + document.body.scrollTop;
      createImage();
    }
  }

  $("#gamecanvas").mousedown(function() {
    mouseIsDown = true;
    if (mouseIsDown) {
      getColor();
      getPencilSize();
    }
  });

  $("#gamecanvas").mouseup(function() {
    mouseIsDown = false;
  });

  function createImage() {
    x-=Math.round(pencilSize/2);
    y-=Math.round(pencilSize/2);

    for (var ix=0;ix<pencilSize;ix++) {
      for (var iy=0;iy<pencilSize;iy++) {
        y++;
        imgData.data[4 * (y * imgData.width + x)] = r; // Rot
        imgData.data[4 * (y * imgData.width + x) + 1] = g; // Grün
        imgData.data[4 * (y * imgData.width + x) + 2] = b; // Blau
        imgData.data[4 * (y * imgData.width + x) + 3] = a; // Alpha
      }
      y-=pencilSize;
      x++;
    }

    context.putImageData(imgData, 0, 0);
  }

  function focusLost() {
    mouseIsDown = false;
  }

}

function getColorFromColorPicker() {
  var colorpicker = document.getElementById("colorpicker");
  var hexColor = colorpicker.value;
  return hexColor;
}

function getColor() {
  var hexColor = getColorFromColorPicker();
  //Converting Hex code to rgba code
  r = hexToR(hexColor);
  g = hexToG(hexColor);
  b = hexToB(hexColor);
}
function hexToR(h) {
  return parseInt((cutHex(h)).substring(0, 2), 16)
}
function hexToG(h) {
  return parseInt((cutHex(h)).substring(2, 4), 16)
}
function hexToB(h) {
  return parseInt((cutHex(h)).substring(4, 6), 16)
}
function cutHex(h) {
  return (h.charAt(0) == "#") ? h.substring(1, 7) : h
}

function getPencilSize () {
  pencilSize = document.getElementById("pencilsize").value;
}

function createPencilArray () {
  var PencilArray = [pencilSize][pencilSize];
  return PencilArray;
}
