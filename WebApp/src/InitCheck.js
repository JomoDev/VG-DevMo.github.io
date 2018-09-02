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
    any: function () {
        return ((isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()));
    }
};

function detectDevice() {
    var result;
    if (isMobile.any()) {
      result = 'Die Website ist für Mobile-Endgeräte leider nicht erreichbar!';
      alert(result);
      return false;
    } else {
      return true;
    }
};

window.onload = function() {
  if(detectDevice()) {
    $("#html").animate({
      "opacity": "1"
    }, "slow");
  }
}
