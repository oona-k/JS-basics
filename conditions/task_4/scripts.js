calculate = () => {
  let salary = document.getElementById("salary").value;
  let hours = document.getElementById("hours").value;
  let result = daysSalary(salary, hours);
  document.getElementById("result").innerHTML =
    result < 0 ? "Give only positive numbers" : "Day's salary is " + result;
};

daysSalary = (salary, hours) => {
  if (hours <= 7) {
    return salary * hours;
  } else if (hours > 7 && hours <= 9) {
    return salary * 7 + 1.5 * salary * (hours - 7);
  } else if (hours > 9) {
    return salary * 7 + 1.5 * salary * 2 + 2 * salary * (hours - 9);
  } else {
    return "Something went wrong";
  }
};
