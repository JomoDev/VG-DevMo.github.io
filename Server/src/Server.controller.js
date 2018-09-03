window.onload = function() {

  $('#_sessionID').val(generateSessionID());

  $('#_copyID').click(function(oEvent) {
    var copyText = document.getElementById("_sessionID");
    copyText.select();
    document.execCommand("copy");
  });

}

function generateSessionID () {

  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();

}
