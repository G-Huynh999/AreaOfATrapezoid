//Area of a Trapezoid Calculator
//Event listener
document.getElementById("calculate").addEventListener("click", calculateArea);

//function
function calculateArea() {
  //variables
  let b1 = +document.getElementById("b1").value;
  let b2 = +document.getElementById("b2").value;
  let h = +document.getElementById("h").value;
  let units = document.getElementById("units").value;
  //answer
  let area = 0.5 * (b1 + b2) * h;
  area = area.toFixed(2);
  //Things that happen after use clicks the button
  document.getElementById("output").classList.add("result");
  document.getElementById("checkmark").src =
    "green-check-mark-11551048866etxqjezdpz.png";
  document.getElementById("checkmark").style.width = "20px";
  document.getElementById("output").innerHTML = `${area} ${units}`;
}
