let numRows = 0;
let numCols = 0;
let colorSelected; 

//Add a row
function addR() {
    var table = document.getElementById("grid");
    if (numCols ===0 || numRows ===0){
        table.insertRow(0);
        numRows = 1;
        table.rows[0].insertCell();
        numCols = 1;
    }
    else if (numCols > 1){
        table.insertRow(0);
        numRows++;
    for (var i = 0; i < table.rows[1].cells.length; i++){
        table.rows[0].insertCell();
        }
    }
    else{
        table.insertRow(0);
        numRows++;
        table.rows[0].insertCell();
}
}
//Add a column
function addC() {
    var table = document.getElementById("grid");
    if (numRows ===0){
        table.insertRow(0);
        numRows = 1;
        table.rows[0].insertCell(0);
        numCols = 1;
    }
    else {
    numCols++;
    for (var i = 0; i < numRows; i++){
    firstRow = table.rows[i];
    firstRow.insertCell();}
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

function fill(){
    alert("Clicked Fill All")
}

function clearAll(){
    alert("Clicked Clear All")
}

function fillU(){
    alert("Clicked Fill All Uncolored")
}
