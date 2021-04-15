// Get Calc Number and Function Buttons
const calcNumButtons = document.getElementById('calc-buttons')
// Get Operation Buttons
const calcOpButtons = document.getElementById('graidient-buttons')
//Get On Screen operation
const onScreenOp = document.getElementById('calc-on-screen')

//// Type Numbers and Functions
calcNumButtons.addEventListener ('click', function(event) {
  let keyEntry = event.target.innerText;
  if (onScreenOp.innerHTML === '0') {
    onScreenOp.innerHTML = '';
    onScreenOp.innerHTML = keyEntry;
  } else {
    onScreenOp.innerHTML = onScreenOp.innerHTML + keyEntry;
  }
})

//// Type Operations
calcOpButtons.addEventListener ('click', function(event) {
  let keyEntry = event.target.innerText;
  switch (true) {
    case keyEntry === '+':
    onScreenOp.innerHTML = onScreenOp.innerHTML + ' ' + keyEntry + ' ';
    break;
    case keyEntry === '-':
    onScreenOp.innerHTML = onScreenOp.innerHTML + ' ' + keyEntry + ' ';
    break;
    case keyEntry === 'x':
    onScreenOp.innerHTML = onScreenOp.innerHTML + ' ' + keyEntry + ' ';
    break;
    case keyEntry === '÷':
    onScreenOp.innerHTML = onScreenOp.innerHTML + ' ' + keyEntry + ' ';
    break;
  }
})