const container = document.getElementById("container");
const button = document.getElementById('button')

var gridBox
function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    cell.innerText = (c + 1);
    cell.classList.add('grid-item');
    cell.addEventListener('mouseover', function(event){
      if(event.target.matches('.grid-item')){
        event.target.classList.add('active')
      };
    })
    container.appendChild(cell)
  };
};

function makeMetrics(){
  let userPrompt = prompt('Enter Columns & Rows');
  alert (userPrompt);
  if(Number(userPrompt) <= 10){
    let rows = userPrompt
    let cols = userPrompt
    makeRows(rows, cols);
  } else if (userPrompt === null) {
    alert('Sorry no number has been added');
  } else {
    alert('You have reached the limit');
  }
  
}


