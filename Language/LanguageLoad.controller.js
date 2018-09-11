function getBrowserLanguage () {
  var lang;
  lang = navigator.language;
  if (lang === undefined) {
    lang = navigator.browserLanguage;
    if (lang === undefined) {
      lang = "en";
    }
  }

  return lang;
}

function loadLanguageFromServer (lang) {
  var path;

  switch (lang) {
    case 'de':
      path = 'Language/de.json';
      break;
    case 'en':
      path = 'Language/en.json';
      break;
    default:
      path = 'Language/en.json';
      break;
  }

  var objString;
  
  var xmlhttp = new XMLHttpRequest();
  
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myArr = JSON.parse(this.responseText);
    } else {
       console.error('failed to load language file ' + lang + ' from path ' + path);
    }
};
xmlhttp.open("GET", path, true);
xmlhttp.send();
  
}
