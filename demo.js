let Userinput = document.getElementById("date");
let button = document.getElementById("btn");
document.getElementById("btn").onclick = calculateAge;

function calculateAge() {
  let birthDate = new Date(Userinput.value);

  let Year = birthDate.getFullYear();
  let currYear = new Date().getFullYear();
  let age = currYear - Year;

  result.innerHTML = "You are "+age+" years old."
}
