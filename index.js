function fireMaths() {
  var firstNumber = document.getElementById("numberOne").value;
  var secondNumber = document.getElementById("numberTwo").value;

  var outputNumber = add(parseInt(firstNumber), parseInt(secondNumber));
  document.getElementById("numberOut").value = outputNumber;
}

function add(a, b) {
  return a + b;
}

module.exports = add;
