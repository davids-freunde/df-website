var script = document.createElement('script');
script.src = 'js/jquery-3.3.1.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

/* Open when someone clicks on the span element */
function openNav() {
  document.getElementById("Nav").style.width = "100%";
}

/* Close when someone clicks on close inside the overlay */
function closeNav() {
  document.getElementById("Nav").style.width = "0%";
}