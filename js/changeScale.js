AFRAME.registerComponent('change-scale', {
    init() {
      const model = document.getElementById('model')
      const changeButton = document.getElementById('changeScale')
      changeButton.style.display = 'block'
      let idx = 2  // Start with the 2nd animation because the model starts with idle animation
      const nextScale = () => {
        if (idx % 2 == 0) {
            console.log("clicked once");
            model.setAttribute('scale', '5 5 5');
            model.setAttribute('position', '0 0 0');
        }
        else {
            console.log("clicked twice");
            model.setAttribute('scale', '1 1 1');
            model.setAttribute('position', '0 10 0');
        }
        idx = (idx + 1);
      }
      changeButton.onclick = nextScale;  // Switch to the next animation when the button is pressed.
    },
  })
  