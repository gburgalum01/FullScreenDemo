//This function renders an element full screen.
function showFullScreen() {

  //Get the DOM element to be displayed full screen.
  var domElement = document.getElementById('landscapeImg');

  //For all browsers except Safari and IE11, call the requestFullscreen function.
  if (domElement.requestFullscreen) {
    domElement.requestFullscreen();
  }
  //If using Safari, call the appropriate function.
  else if (domElement.webkitRequestFullscreen) {
    domElement.webkitRequestFullscreen();
  }
  //If using IE11, call the appropriate function.
  else if (domElement.msRequestFullscreen) {
    domElement.msRequestFullscreen();
  }
}
