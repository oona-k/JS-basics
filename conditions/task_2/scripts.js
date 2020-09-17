printOut = (event) => {
  const firstNumber = Number(document.getElementById("firstNumber").value);
  const secondNumber = Number(document.getElementById("secondNumber").value);
  const thirdNumber = Number(document.getElementById("thirdNumber").value);
  const result = giveResult(firstNumber, secondNumber, thirdNumber);
  document.getElementById("result").innerHTML = result;
};

giveResult = (firstNumber, secondNumber, thirdNumber) => {
  if (firstNumber >= 0 && secondNumber >= 0 && thirdNumber >= 0) {
    return (
      "Sum is " +
      (firstNumber + secondNumber + thirdNumber) +
      " and multiplication is " +
      firstNumber * secondNumber * thirdNumber
    );
  } else if (firstNumber >= 0 || secondNumber >= 0 || thirdNumber >= 0) {
    return "Sum is " + (firstNumber + secondNumber + thirdNumber);
  } else if (firstNumber < 0 && secondNumber < 0 && thirdNumber < 0) {
    return "Only negatives";
  } else {
    return "Unknown input";
  }
};
