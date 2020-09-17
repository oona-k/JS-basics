showText = () => {
  const number = document.getElementById("number").value;
  let message1 = isPositive(number) ? "Positive" : "Negative";
  let message2 = isDivisibleBy2(number)
    ? "Divisible by 2"
    : "Not divisible by 2";

  document.getElementById("text").innerHTML = message1 + "<br>" + message2;
};

isPositive = (number) => {
  if (number < 0) {
    return false;
  } else {
    return true;
  }
};

isDivisibleBy2 = (number) => {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
};
