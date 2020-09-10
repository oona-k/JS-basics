const calculateSpeed = () => {
    var distance = document.getElementById("distance").value;
    var time = document.getElementById("time").value;
    var result = distance / time;
    document.getElementById("result").innerHTML = result;
  };