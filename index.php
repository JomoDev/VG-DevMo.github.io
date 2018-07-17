<!DOCTYPE html>
<html lang="de">

<head>
  <meta charset="UTF-8" />
  <!--einbinden von externen Dateien-->
  <link rel="icon" type="image/png" href="src/icons/top.png">
  <script language="javascript" type="text/javascript" src="src/AJAX.js"></script>
  <script language="javascript" type="text/javascript" src="src/jquery-3.3.1.js"></script>
  <script language="javascript" type="text/javascript" src="src/WebsiteEnvironment.js"></script>
  <link rel="stylesheet" href="stylesheet.css">
  <title>Paint</title>
</head>

<body id="body">
  <table id="subdivision" style="width:500px">
    <tr>
      <th style="width:300px">
        <div id="all">
          <div id="header">
            <label id="word"></label>
          </div>
          <div>
            <!--Gamecanvas for drawing-->
            <canvas id="gamecanvas" default="your browser do not suport CANVAS objects">
            </canvas>
          </div>

          <div id="modules">
            <!--Color picker-->
            <input id="colorpicker" type="color" value="#000000">
            <!--Steuerungs buttons-->
            <button id="btnPencil" onclick="activatePencil()"><img src="src/icons/pencil.png"/></button>
            <button id="btnPaintBucket" onclick="activatePaintBucket()"><img src="src/icons/paint_bucket.png"/></button>
            <button id="btnEraser" onclick="activateEraser()"><img src="src/icons/eraser.png"/></button>
            <button id="btnPipette" onclick="activatePipette()"><img src=" src/icons/pipette.png "/></button>
            <button id="btnTrash" onclick="activateTrash()"><img src=" src/icons/trash.png "/></button>
          </div>

          <div id="toolInfo"><label id="toolInfoText">info</label></div>

        </div>
      </th>
      <th>
        <div id="chat">
          <!--User chat-->
          <div id="chatField">
          </div>
          <input id="chatInput" type="Text" placeholder="Chat...">
          </input>
        </div>
      </th>
    </tr>
  </table>

</body>

</html>