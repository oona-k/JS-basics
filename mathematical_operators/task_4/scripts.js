const calculate = () => {
  const height = document.getElementById("height").value;
  const weight = document.getElementById("weight").value;
  const bmi = weight / (height * height);
  const rounded = Math.round(bmi * 10) / 10;
  status = getStatus(bmi);
  document.getElementById("bmi").innerHTML = rounded + " kg/&#13217 " + status;
};

const getStatus = (bmi) => {
  if (bmi < 18.5) {
    return "Underweight";
  } else if (18.5 <= bmi && bmi <= 24.9) {
    return "Normal or Healthy Weight";
  } else if (25 <= bmi && bmi <= 29.9) {
    return "Overweight";
  } else if (bmi >= 30) {
    return "Obese";
  } else {
    return "Error in values";
  }
};
