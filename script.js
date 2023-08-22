const buttonPlus1 = document.getElementById('plus1');
const buttonPlus2 = document.getElementById('plus2');
const buttonMinus1 = document.getElementById('minus1');
const buttonMinus2 = document.getElementById('minus2');
var box = document.getElementsByClassName("box");
var table = document.querySelector('table');
var td = document.createElement('td');
var firstPositionPlus1 = 1220;
var firstPositionPlus2 = 311;
var firstPositionMinus1 = 310;
var firstPositionMinus2 = 310;
var LeftPositionPlus1 = 102;
function addStr(){
    var str = document.createElement('tr');
    for(let i = 1; i<=table.rows[0].cells.length;i++){
        let td = document.createElement('td');
        str.appendChild(td);
    };
   table.appendChild(str);
   downTravel();
};
function downTravel(){
    firstPositionPlus1 +=203.33;
    document.addEventListener('click', function(){
        buttonPlus1.style.marginTop = firstPositionPlus1 + "px";
        
    })
}
function rightTravel(){
    firstPositionPlus2 += 101.82;
    LeftPositionPlus1 +=101.82;
    firstPositionMinus1 +=101.82;
    firstPositionMinus2 +=101.82;
    document.addEventListener('click', function(){
        buttonPlus2.style.marginLeft = firstPositionPlus2 + "px";
        buttonPlus1.style.marginRight = LeftPositionPlus1 + "px";
        buttonMinus1.style.marginRight = firstPositionMinus1 + "px";
        buttonMinus2.style.marginRight = firstPositionMinus2 + "px";
    })
}
function addTd(){
    var rows = table.querySelectorAll('tr');
    var td = table.querySelectorAll('td');
    for(let i = 0; i < rows.length; i++){
        var newTd = td[i].cloneNode(true);
        rows[i].appendChild(newTd);
    }
    rightTravel();
}
table.addEventListener("mouseover", function(event){
    let td = event.target.closest('td');
    if(!td) return;
    buttonMinus1.style.visibility = "visible";
    buttonMinus2.style.visibility = "visible";
    travelMinusAboveTable(td);
    travelMinusLeftTable(td);
});
function travelMinusAboveTable(td){
    let coords = td.getBoundingClientRect();
    buttonMinus1.style.left = coords.left + "px";
}
function travelMinusLeftTable(td){
    let coords = td.getBoundingClientRect();
    buttonMinus2.style.top = (coords.top - 596) + "px" ;

}
buttonMinus1.addEventListener("mouseover", function(){
    buttonMinus1.style.visibility = "visible";
})
buttonMinus2.addEventListener("mouseover", function(){
    buttonMinus1.style.visibility = "visible";
})
function deleteCell(){
    var rows = table.rows;
    if(table.rows[0].cells.length == 1) return;
    for(let i = 0; i < rows.length; i++){
        rows[i].deleteCell(-1);
    }
    firstPositionPlus2 -= 101.82;
    buttonPlus2.style.marginLeft = firstPositionPlus2 + "px";
    LeftPositionPlus1 -= 101.82
    buttonPlus1.style.marginRight = LeftPositionPlus1 + "px";
    var Cell = rows[0].cells[0];
    travelMinusAboveTable(Cell);
    firstPositionMinus2 -= 101.82
    buttonMinus2.style.marginRight = firstPositionMinus2 + "px";
    
}
function deleteRow(){
    if(table.rows.length == 1) return;
    table.deleteRow(0);
    firstPositionPlus1 -= 203.33;
    buttonPlus1.style.marginTop = firstPositionPlus1 + "px";
}
