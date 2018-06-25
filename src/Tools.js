class CPencil {

  use () {
    console.log("Tool pencil used");
  }

}

class CEraser {

  use () {
    console.log("Tool eraser used");
  }

}

class CPaintBucket {

  use () {
    console.log("Tool paintbucket used");
  }

}

class CPipette {

  use () {
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
  ****************************************************/
  constructor () {
    this.pencil = new CPencil();
    this.eraser = new CEraser();
    this.paintbucket = new CPaintBucket();
    this.pipette = new CPipette();
    this.activeTool = this.pencil;
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

  useTool () {
    if (this.activeTool instanceof CPencil
       || this.activeTool instanceof CEraser
       || this.activeTool instanceof CPaintBucket
       || this.activeTool instanceof CPipette) {
      this.activeTool.use();
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
