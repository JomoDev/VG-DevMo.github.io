console.log("         ____   ____  ________\n         \\   \\ /   / /   _____/\n  ______  \\   Y   / /   \\  ___   ______\n /_____/   \\     /  \\    \\_\\  \\ /_____/\n            \\___/    \\______  /\n                            \\/          \n www.veteran-gaming.at\n\n made by GameMind | Jonas");

var toolController = new CToolController();

var actualPencilType = 1;
var pencilSizeValue = 5;
var r = 255,
  g = 0,
  b = 0,
  a = 255;
var mouseIsDown = false;
var pencilSize = 1;
var x = 0,
  y = 0;

var pencilChooserPopupOpen = false;

window.onload = function() {

  $(window).resize(function () {
    pencilChooserPopupOpen = false;
    $("#pencilsizePopup").animate({"opacity": "0", "margin-left": "0"}, "fast");
  });

  var iScrollPos = 0;
  $(window).scroll(function() {
    console.log("Scroll");
    var iCurScrollPos = $(this).scrollTop();
    if (iCurScrollPos > iScrollPos) {
      //Scrolling Down
      console.log("Scroll down");
    } else {
      //Scrolling Up
      console.log("Scroll up");
    }
    iScrollPos = iCurScrollPos;
  });

  function draw(e) {
    x = e.pageX || event.clientX + document.body.scrollLeft;
    y = e.pageY || event.clientY + document.body.scrollTop;
    createImage();
  }

  $("#word").text("_ _ _ _ _ _");
  activatePencil();
  $("#body").animate({opacity: 1}, "slow");
  detectDevice();
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
      toolController.useTool();
      draw(e);
    }
  }

  $("#gamecanvas").mousedown(function(e) {
    toolController.useTool();
    mouseIsDown = true;
    if (mouseIsDown) {
      getColor();
      getPencilSize();
    }
    draw(e);
  });

  $("#gamecanvas").mouseup(function() {
    mouseIsDown = false;
  });


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

  function focusLost() {
    mouseIsDown = false;
  }
}

function getPencilSize () {
  pencilSize = pencilSizeValue;
}

function createPencilArray () {
  var PencilArray = [pencilSize][pencilSize];
  return PencilArray;
}

function paintBucket() {

}

function activatePencil () {
  actualPencilType = 1;
  toolController.setPencilActive(true);
  console.log(toolController);
  $("#btnPencil").animate({ "height": "27px" , "width": "27px" }, "fast");
  $("#btnPipette").animate({ "height": "25px" , "width": "25px" }, "fast");
  $("#btnPaintBucket").animate({ "height": "25px" , "width": "25px" }, "fast");
  $("#btnEraser").animate({ "height": "25px" , "width": "25px" }, "fast");
}

function activatePipette () {
  actualPencilType = 2;
  toolController.setPipetteActive(true);
  console.log(toolController);
  $("#btnPipette").animate({ "height": "27px" , "width": "27px" }, "fast");
  $("#btnPencil").animate({ "height": "25px" , "width": "25px" }, "fast");
  $("#btnPaintBucket").animate({ "height": "25px" , "width": "25px" }, "fast");
  $("#btnEraser").animate({ "height": "25px" , "width": "25px" }, "fast");
}

function activatePaintBucket () {
  actualPencilType = 3;
  toolController.setPaintBucketActive(true);
  console.log(toolController);
  $("#btnPaintBucket").animate({ "height": "27px" , "width": "27px" }, "fast");
  $("#btnPencil").animate({ "height": "25px" , "width": "25px" }, "fast");
  $("#btnPipette").animate({ "height": "25px" , "width": "25px" }, "fast");
  $("#btnEraser").animate({ "height": "25px" , "width": "25px" }, "fast");
};

function activateEraser ()  {
  actualPencilType = 4;
  toolController.setEraserActive(true);
  console.log(toolController);
  $("#btnEraser").animate({ "height": "27px" , "width": "27px" }, "fast");
  $("#btnPencil").animate({ "height": "25px" , "width": "25px" }, "fast");
  $("#btnPipette").animate({ "height": "25px" , "width": "25px" }, "fast");
  $("#btnPaintBucket").animate({ "height": "25px" , "width": "25px" }, "fast");
};

// Browser Detection
var isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPod|iPad/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    anyMobile: function () {
        return ((isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()));
    }
};


function detectDevice() {
    // Auf Mobile Geräte prüfen
    if (isMobile.anyMobile()) {
      $("#body").animate({opacity: 0}, 1);
        alert('Upps! Sorry but this Website is not available on mobile devices :(');
    }
    // Auf Internet-Explorer prüfen
    else if (/*@cc_on!@*/false || !!document.documentMode) {
        $("#body").animate({opacity: 0}, 1);
          console.log('Upps! Sorry but this Website is not available on Internet Explorer :(');
      }
    };


function pencilSizeChooser() {
  if(!pencilChooserPopupOpen) {
    var leftMargin = parseInt($("#gamecanvas").css("margin-left")) + 40;
    $("#pencilsizePopup").animate({"opacity": "1", "margin-left": leftMargin}, "fast");
  } else {
    $("#pencilsizePopup").animate({"opacity": "0", "margin-left": "0"}, "fast");
  }
  pencilChooserPopupOpen = !pencilChooserPopupOpen;
};

function px5()  {
  pencilSizeValue = 5;
  pixelLog();
};

function px10()  {
  pencilSizeValue = 10;
  pixelLog();
};

function px15() {
  pencilSizeValue = 15;
  pixelLog();
};

function px20()  {
  pencilSizeValue = 20;
  pixelLog();
};

function px25()  {
  pencilSizeValue = 25;
  pixelLog();
};

function px30()  {
  pencilSizeValue = 30;
  pixelLog();
};

function px35()  {
  pencilSizeValue = 35;
  pixelLog();
};

function px40()  {
  pencilSizeValue = 40;
  pixelLog();
};

function pixelLog () {
  //console.log("Pencilsize:" + pencilSizeValue);
  pencilChooserPopupOpen = false;
  $("#pencilSize").text(pencilSizeValue + "px");
  $("#pencilsizePopup").animate({"opacity": "0", "margin-left": "0"}, "fast");
}
