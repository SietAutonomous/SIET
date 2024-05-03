let presentCount=0;
let absentCount=0;

function att(n){
  if(n==1){
    presentCount++;
  }
  else{
    absentCount++;
  }
}
function sub(){
  show();
}
function show() {
  let output = document.getElementById("output");
  output.innerHTML = "Present: " + presentCount + ", Absent: " + absentCount;
}

function toggleButton() {
  var selectBox = document.getElementById("period");
  var selectedValue = selectBox.options[selectBox.selectedIndex].value;
  var button = document.querySelector(".button");
  
  if (selectedValue === "period") {
    button.disabled = true;
  } else {
    button.disabled = false;
  }
}

const buttons = document.querySelectorAll('.button');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    button.disabled = true;
    button.classList.add('disabled');
  });
});


