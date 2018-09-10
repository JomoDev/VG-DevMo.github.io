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
  
  $.ajax({ url: path,
         type: 'GET',
         success: function(output) {
          objString = output.toString();
         },
        error: function() {
          console.log("error");
        }
  });
  
  return JSON.parse(objString);
  
}
