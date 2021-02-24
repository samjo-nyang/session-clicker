(function() {
  setInterval(function () {
    var button_selectors = [
      '.login-time > a', /* klms.kaist.ac.kr */
      '.sessionExtension', /* ssogw6.kaist.ac.kr, cais.kaist.ac.kr */
    ];
    for (var i = 0; i < button_selectors.length; i++) {
      var button = document.querySelector(button_selectors[i]);
      if (button) {
        button.click();
        console.log('SOMBRA - Session refreshed!');
      }
    }
  }, 1000 * 60 * 10);
  console.log('SOMBRA - Session refresh script has been injected!');
})();