// Get Calc Buttons
const calcButtons = document.getElementById('calc-buttons')
//Get On Screen operation
const onScreenOp = document.getElementById('calc-on-screen')

//// Type buttons
calcButtons.addEventListener ('click', function(event) {
  let keyEntry = event.target.innerText;
  onScreenOp.innerHTML = onScreenOp.innerHTML + keyEntry;
})