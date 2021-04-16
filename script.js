// Get Calc Number and Function Buttons
const calcNumButtons = document.getElementById('calc-buttons')
// Get Operation Buttons
const calcOpButtons = document.getElementById('graidient-buttons')
//Get On Screen operation
const onScreenOp = document.getElementById('calc-on-screen')

//// Type Numbers and Functions
calcNumButtons.addEventListener ('click', function(event) {
  let keyEntry = event.target.innerText;
  if (event.target.matches('.num-button') && onScreenOp.matches('.result')) {
    onScreenOp.innerHTML = '';
    onScreenOp.innerHTML = keyEntry;
    onScreenOp.classList.remove('result')
    return
  }
  if (event.target.innerText === '=') { 
    return calculateOperation();
  }
  if (event.target.innerText === 'AC') {
    return onScreenOp.innerHTML = 0;
  }
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
  onScreenOp.classList.remove('result');
  switch (true) {
    case keyEntry === '+':
    onScreenOp.innerHTML = onScreenOp.innerHTML + ' ' + keyEntry + ' ';
    break;
    case keyEntry === '-':
    onScreenOp.innerHTML = onScreenOp.innerHTML + ' ' + keyEntry + ' ';
    break;
    case keyEntry === 'x':
    onScreenOp.innerHTML = onScreenOp.innerHTML + ' ' + '*' + ' ';
    break;
    case keyEntry === '÷':
    onScreenOp.innerHTML = onScreenOp.innerHTML + ' ' + '/' + ' ';
    break;
  }
})

//// Calculate operation
function calculateOperation() {
  let operationResult = eval(onScreenOp.innerHTML);
  onScreenOp.innerHTML = operationResult;
  onScreenOp.classList.add('result')
}