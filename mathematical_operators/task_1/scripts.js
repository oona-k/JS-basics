const calculate = () => {
  var price = document.getElementById("price").value;
  var money = document.getElementById("money").value;
  var result = money / price;
  document.getElementById("result").innerHTML = result;
};
