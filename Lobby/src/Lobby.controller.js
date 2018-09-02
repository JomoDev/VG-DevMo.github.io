window.onload = function() {

  testRequest();
  readCookieData();

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
             type: 'GET',
             success: function(output) {
                          alert(output);
                      },
            error: function() {
              console.log("error");
            }
    });

  }

}
