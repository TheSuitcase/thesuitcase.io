(function(){

  var body = document.body;

  // Add stylesheet.
  let stylesheet = document.createElement('link')
  stylesheet.href = 'http://thesuitcase.io/codepen-overlay/style.css';
  stylesheet.type = 'text/css';
  stylesheet.rel = 'stylesheet';

  body.appendChild(stylesheet)

  // Add Roboto font.
  let font = document.createElement('link')
  stylesheet.href = 'https://fonts.googleapis.com/css?family=Roboto:300';
  stylesheet.type = 'text/css';
  stylesheet.rel = 'stylesheet';

  body.appendChild(stylesheet)

  // Add the html
  let overlay = document.createElement('div')
  overlay.id = 'codepen-overlay';
  overlay.innerHTML = '#{template}'

  body.appendChild(overlay)

}());