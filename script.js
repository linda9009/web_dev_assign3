let numRows = 0;
let numCols = 0;
let colorSelected; 

//Add a row
function addR() {
    var table = document.getElementById("grid");
    if (numCols ===0){
        numCols++;
    }
    numRows++;
    var row = table.insertRow(numRows-1);
    var cell = row.insertCell(numCols-1);
}
//Add a column
function addC() {
    alert(numCols)
    numCols++;
    var table = document.getElementById("grid");
    if (numRows ===0){
        numRows++;
        table.insertRow(numRows-1);
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
    alert("Clicked Remove Row")
}
//Remove a column
function removeC() {
    alert("Clicked Remove Col")
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
