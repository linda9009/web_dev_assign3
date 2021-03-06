let numRows = 0;
let numCols = 0;
let colorSelected; 

//Add a row
function addR() {
    var table = document.getElementById("grid");
    if (numCols ===0 || numRows ===0){
        table.insertRow(0);
        numRows = 1;
        var cells = table.rows[0].insertCell();
        cells.onclick = changeColor;
        numCols = 1;
    }
    else if (numCols > 1){
        table.insertRow(0);
        numRows++;
    for (var i = 0; i < table.rows[1].cells.length; i++){
        var cells = table.rows[0].insertCell();
        cells.onclick = changeColor;
        }
    }
    else{
        table.insertRow(0);
        numRows++;
        var cells = table.rows[0].insertCell();
        cells.onclick = changeColor;
}
}
//Add a column
function addC() {
    var table = document.getElementById("grid");
    if (numRows ===0){
        table.insertRow(0);
        numRows = 1;
        var cells = table.rows[0].insertCell(0);
        cells.onclick = changeColor;
        numCols = 1;
    }
    else {
    numCols++;
    for (var i = 0; i < numRows; i++){
    var cells = table.rows[i].insertCell();
    cells.onclick = changeColor;}
    }
}

//Remove a row
function removeR() {
    var table = document.getElementById("grid");
    if (numRows ===0){
        alert("No Rows to Delete");
    }
    else{
        numRows--;
        table.deleteRow(0);
        if (numRows == 0) numCols = 0;
    }
}
//Remove a column
function removeC() {
    var table = document.getElementById("grid");
    if (numCols ===0){
        alert("No Columns to Delete");
        numRows = 0;
    }
    else{
        numCols--;
        for (var i = 0; i < numRows; i++){
            firstRow = table.rows[i];
            firstRow.deleteCell(0);}
        if (numCols == 0) numRows = 0;

    }
}
//sets global var for selected color
function selected(){
    colorSelected = document.getElementById("selectedID").value;
    console.log(colorSelected);
}

function changeColor(event){
    if (colorSelected == "SELECT" || colorSelected == null){
        alert("Please select a color")
    }
    var cells = document.getElementsByTagName('td');
    for (let i = 0; i < cells.length; i++){
        if (cells[i] == event.target){
        cells[i].style.backgroundColor = colorSelected;}
    }
}

function fill(){
if (colorSelected == "SELECT" || colorSelected == null){
    alert("Please select a color")
}
var cells = document.getElementsByTagName('td');
for (let i = 0; i < cells.length; i++){
    cells[i].style.backgroundColor = colorSelected;
}
}

function clearAll(){
    alert("Clicked Clear All")
    var cells = document.getElementsByTagName('td');
    for(let i = 0; i <cells.length; i++){
        cells[i].style.backgroundColor = '';
    }

}

function fillU(){
    if (colorSelected == "SELECT" || colorSelected == null){
        alert("Please select a color")
    }
    var cells = document.getElementsByTagName('td');
    for (let i = 0; i < cells.length; i++){
        if (cells[i].style.backgroundColor == ''){
            cells[i].style.backgroundColor = colorSelected;}
    }
}
