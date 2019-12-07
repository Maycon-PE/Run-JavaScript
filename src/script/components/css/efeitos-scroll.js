export default  function scrolls() {
  window.onscroll = function() {
    if (innerWidth <= 768) {
      if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
        document.getElementById("lideres").style.opacity = ".6";
      } else {
        document.getElementById("lideres").style.opacity = "1";
      }
    } else {
    	document.getElementById("lideres").style.opacity = "1";
    }
  }
}
