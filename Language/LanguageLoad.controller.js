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
  
xmlhttp.onreadystatechange = function(response) {
    if (this.readyState == 4 && this.status == 200) {
        var myArr = this.responseText;
      console.log(JSON.parse(this.response));
      console.log(this.response);
      console.log(this.responseText);
      console.log(response);
        return myArr;
    } else {
       console.error('failed to load language file ' + lang + ' from path ' + path + ' responde-status ' + this.status);
    }
};
xmlhttp.open("GET", path, true);
xmlhttp.send();
  
}
