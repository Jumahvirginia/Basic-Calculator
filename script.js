const display = document.getElementById('display');
let currentInput = '';
let resetNext = false;

document.querySelectorAll('.btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const val = btn.getAttribute('data-value');

    if (val) {
      if (resetNext) {
        currentInput = '';
        resetNext = false;
      }
      currentInput += val;
      display.textContent = currentInput;
    }
  });
});

document.getElementById('equals').addEventListener('click', () => {
  try {
    const result = eval(currentInput);
    display.textContent = result;
    currentInput = result;
    resetNext = true;
  } catch {
    display.textContent = 'Error';
    currentInput = '';
  }
});

document.getElementById('clear').addEventListener('click', () => {
  currentInput = '';
  display.textContent = '0';
});

