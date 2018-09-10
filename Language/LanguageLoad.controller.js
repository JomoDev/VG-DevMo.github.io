function getBrowserLanguage () {
  var lang;
  lang = navigator.language;
  if (lang === undefined) {
    lang = navigator.browserLanguage;
    if (lang === undefined) {
      lang = "en";
    }
  }
  console.log(lang);
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
    console.log(path);
  var objString;
  
  $.ajax({ url: path,
         type: 'GET',
         success: function(output) {
          objString = output.toString();
         },
        error: function() {
          console.error('failed to load language file ' + lang + ' from path ' + path);
        }
  });
  
  console.log(objString);
  
  var jsonObject = JSON.parse(objString);
  
  console.log(jsonObject);
  
  return jsonObject;
  
}
