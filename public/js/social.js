(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/es_ES/sdk.js#xfbml=1&appId=637159213028315&version=v2.0";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));




function openFbPopUp() {
    var fburl = 'http://printoo.me';
    var fbimgurl = 'http://printoo.me/img/uPrintoologo.png';
    var fbtitle = 'La nueva manera de imprimir fotografías';
    var fbsummary = "Yo tendré fotos gratis gracias a #printoo tú también regístrate y #apoyastartupsmexicanas";
    var sharerURL = "http://www.facebook.com/sharer/sharer.php?s=100&p[url]=" + encodeURI(fburl) + "&p[images][0]=" + encodeURI(fbimgurl) + "&p[title]=" + encodeURI(fbtitle) + "&p[summary]=" + encodeURI(fbsummary);
    window.open(
      sharerURL,
      'facebook-share-dialog', 
      'width=626,height=436'); 
    return  false;
}