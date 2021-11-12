AFRAME.registerComponent('next-button', {
    init() {
      const model = document.getElementById('model')
      const changeButton = document.getElementById('changeScale')
      changeButton.style.display = 'block'
      let idx = 2  // Start with the 2nd animation because the model starts with idle animation
      const nextScale = () => {
        if (idx % 2 == 0) {
            model.setAttribute('scale', '0.8 0.8 0.8');
            model.setAttribute('position', '0 0 0');
        }
        else {
            model.setAttribute('scale', '0.1 0.1 0.1');
            model.setAttribute('position', '5 5 5');
        }
        idx = (idx + 1);
      }
      changeButton.onclick = nextScale  // Switch to the next animation when the button is pressed.
    },
  })
  