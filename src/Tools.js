/*class CPencil {

  use (e) {
    //console.log("Tool pencil used");
    x = e.pageX || event.clientX + document.body.scrollLeft;
    y = e.pageY || event.clientY + document.body.scrollTop;
    createImage();
  }

}

class CEraser {

  use (e) {
    console.log("Tool eraser used");
  }

}

class CPaintBucket {

  use (e) {
    console.log("Tool paintbucket used");
  }

}

class CPipette {

  use (e) {
    console.log("Tool Pipette used");
  }

}

class CToolController {
  /***************************************************
  * ATTRIBUTES:
  * pencil      TYPE CPencil()
  * eraser      TYPE CEraser()
  * paintbucket TYPE CPaintBucket()
  * pipette     TYPE CPipette()
  ****************************************************//*
  constructor (_color) {
    this.pencil = new CPencil();
    this.eraser = new CEraser();
    this.paintbucket = new CPaintBucket();
    this.pipette = new CPipette();
    this.activeTool = this.pencil;
    this.color = _color;
  }

  setPencilActive (e) {
    if(e) {
      this.activeTool = this.pencil;
    } else {
      this.activeTool = null;
    }
  }

  setEraserActive (e) {
    if(e) {
      this.activeTool = this.eraser;
    } else {
      this.activeTool = null;
    }
  }

  setPaintBucketActive (e) {
    if(e) {
      this.activeTool = this.paintbucket;
    } else {
      this.activeTool = null;
    }
  }

  setPipetteActive (e) {
    if(e) {
      this.activeTool = this.pipette;
    } else {
      this.activeTool = null;
    }
  }

  determineColor () {
    this.color = getColorFromColorPicker();
  }

  useTool (e) {
    if (this.activeTool instanceof CPencil
       || this.activeTool instanceof CEraser
       || this.activeTool instanceof CPaintBucket
       || this.activeTool instanceof CPipette) {
      this.activeTool.use(e);
    } else {
      console.error("not defined tool has been tried to be used");
    }
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

function createImage() {
  x-=parseInt($("#gamecanvas").css("margin-left"));
  y-=parseInt($("#gamecanvas").css("margin-top"));
  y-=parseInt($("#header").css("height"));
  y-=parseInt($("#header").css("margin-top"));
  x-=Math.round(pencilSize/2);
  //y-=Math.round(pencilSize/2);
  y-=pencilSize;
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

*/
