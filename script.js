var body = document.querySelector("body");
var letters = document.querySelectorAll("li");
body.onscroll = function () {
  var y =  window.pageYOffset || document.documentElement.scrollTop;
  for(var i = 0; i < letters.length; i++) {
    letters[i].style.marginTop = -8 * Math.sin(0.01 * y + i) + "vh";
//          letters[i].style.transform = "scale( 1," + 10 * Math.sin(0.006 * y + i) + ")";
    letters[i].style.transform = "scale(" + 5 * Math.sin(0.006 * y + i) + ", 1)";
  }
}