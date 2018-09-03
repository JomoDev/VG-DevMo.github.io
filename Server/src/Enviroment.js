

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

function reloadPage() {
  location.reload();
}

$("#openChat").click(function (e) {
  $("#myChat").stop();
  if(!chatIsOn) {
    $("#myChat").animate({
      "width": "400px"
    }, "slow");
  } else {
    $("#myChat").animate({
      "width": "0"
    }, "slow");
  }
  chatIsOn = !chatIsOn;
});

// Open the full screen search box
function openSearch() {
  document.getElementById("myOverlay").style.display = "block";
}

// Close the full screen search box
function closeSearch() {
  document.getElementById("myOverlay").style.display = "none";
}

function startSearch() {
	var searchval = $("#searchbar").val();
	window.location.href="https://www.google.de/search?q=" + searchval;
}

document.onkeypress = function(event) {
  if(event.key == "h" || event.key == "H") {
	openSearch();
  }
}
