//input, output and processing

//show results
document.getElementById('mad-lib').addEventListener('click', displayMessage);

//function

function displayMessage() {
  //inputs
  let verb1 = document.getElementById('verb1').value;
  let noun1 = document.getElementById('noun1').value;
  let adj1 = document.getElementById('adj1').value;
  let verb2 = document.getElementById('verb2').value;
  let noun2 = document.getElementById('noun2').value;

  //message
  let message = '"There are too many ' + verb1 + ' ' + noun1 + ' on this ' + adj1 + ' airplane!”, I screamed.  “Somebody has to ' + verb2 + ' the ' + noun2 + ' to solve this problem!"'

  //output
  document.getElementById('output').innerHTML = message;
}