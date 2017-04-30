(function() {
  setInterval(function () {
    var button = document.getElementById('session_continuity');
    if (button) {
      button.click();
      console.log('SOMBRA - Session refreshed!');
    }
  }, 1000 * 60 * 5);
  console.log('SOMBRA - Session refresh script has been injected!');
})();