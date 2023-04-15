let textView = document.getElementById('result');
let evalStringArray = [];

function addNumberToTextView(number) {
  evalStringArray.push(number);
  textView.value = evalStringArray.join('');
}

function clearTextView() {
  evalStringArray = [];
  textView.value = '0';
}

function calculateResult() {
  let evaluationString = evalStringArray.join('');
  textView.value = eval(evaluationString);
  evalStringArray = [eval(evaluationString)];
}