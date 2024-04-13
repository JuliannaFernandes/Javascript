function insert(num) {
  document.getElementById("screen").innerHTML += num;
}

function cleanScreen() {
  document.getElementById("screen").innerHTML = "";
}
function back() {
  let result = document.getElementById("screen").innerHTML;
  document.getElementById("screen").innerHTML = result.substring(
    0,
    result.length - 1
  );
}

function calculate() {
  let calculation = document.getElementById("screen").innerHTML;
  if (calculation) {
    document.getElementById("screen").innerHTML = eval(calculation);
  } else {
    alert("Não foi possìvel realizar o cálculo ");
  }
}
