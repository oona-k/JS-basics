showText = () => {
  const age = document.getElementById("age").value;
  const message = writeText(age);
  document.getElementById("text").innerHTML = message;
};

writeText = (age) => {
  if (age < 18) {
    return "Too young";
  } else if (age < 27) {
    return "Right age for military service";
  } else if (age < 41) {
    return "You are in reserve";
  } else if (age < 55) {
    return "You are in backup reserve";
  } else {
    return "Too aged";
  }
};
