window.onload = function() {

  var loadCookie = false;

  // Get the modal
  var modal = document.getElementById('myModal');

  // Get the button that opens the modal
  var btn = document.getElementById("myBtn");

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks on the button, open the modal
  modal.style.display = "block";

  $('#_yes').click(function() {
    loadCookie=true;
    modal.style.display = "none";
    if(loadCookie) {
      readCookieData();
    }
  });

  $('#_no').click(function() {

  });

  testRequest();
  if(loadCookie) {
    readCookieData();
  }

  function readCookieData () {
    var cookieVal = ud_read_cookie("UserName");
    $("#_UserName").val(cookieVal);
  }

  $("#_ConfirmData").click(function(oEvent) {
    var usernameVal = $("#_UserName").val();
    ud_create_cookie("UserName", usernameVal);
  });

  function ud_create_cookie(UD_NAME, UD_VALUE) {

    var UD_DATUM = new Date();
    UD_DATUM.setTime(UD_DATUM.getTime() + (UD_DATUM*24*60*60*50));

    var UD_DELETE = "expires="+UD_DATUM.toUTCString();

    document.cookie = UD_NAME + '=' + UD_VALUE + ';' + UD_DELETE;

  }

  function ud_read_cookie (UD_OBJECT) {

    var UD_ELEMENT = UD_OBJECT + "=";

    var UD_COOKIE_ARRAY = document.cookie.split(";");

    for(var i=0; i<UD_COOKIE_ARRAY.length;i++) {
      var UD_COOKIE_ELEMENT = UD_COOKIE_ARRAY[i];

      while(UD_COOKIE_ELEMENT.charAt(0) === ' ') {
        UD_COOKIE_ELEMENT = UD_COOKIE_ELEMENT.substring(1);
      }

      if(UD_COOKIE_ELEMENT.indexOf(UD_ELEMENT) === 0) {
        return UD_COOKIE_ELEMENT.substring(UD_ELEMENT.length, UD_COOKIE_ELEMENT.length);
      }
    }
  }

  function testRequest () {
    $.ajax({ url: '/server.php',
             data: {action: 'test'},
             type: 'POST',
             success: function(output) {
                          alert(output);
                      },
            error: function() {
              console.log("error");
            }
    });

  }

}
