const calculate = () => {
  var inches = document.getElementById("inches").value;
  var result = inches * 2.54;
  document.getElementById("incs").innerHTML = inches;
  document.getElementById("cm").innerHTML = result;
};
