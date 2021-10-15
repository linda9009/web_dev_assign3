let numRows = 0;
let numCols = 0;
let colorSelected; 

//Add a row
function addR() {
    var table = document.getElementById("grid");

    numRows++;
    var row = table.insertRow();
    if (numCols ===0){
        numCols++;
        row.insertCell();
    }
    else{
    for (var i = 0; i < table.rows[0].cells.length; i++){
        var cell = row.insertCell();
        }
    }
}
//Add a column
function addC() {
    numCols++;
    var table = document.getElementById("grid");
    if (numRows ===0){
        numRows++;
        var row = table.insertRow(numRows-1);
        row.insertCell(numCols-1);
    }
    else {
    for (var i = 0; i < table.rows.length; i++){
    firstRow = table.rows[i];
    firstRow.insertCell();}
    }
}

//Remove a row
function removeR() {
    var table = document.getElementById("grid");
    if (numRows ===0){
        alert("No Rows to Delete");
        numCols = 0;
    }
    else{
        numRows--;
        table.deleteRow(0);
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
        for (var i = 0; i < table.rows.length; i++){
            firstRow = table.rows[i];
            firstRow.deleteCell(0);}
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
