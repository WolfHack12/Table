const buttonPlus1 = document.getElementById('plus1');
const buttonPlus2 = document.getElementById('plus2');
const table = document.querySelector('tbody');
var firstPositionPlus1 = 1220;
var firstPositionPlus2 = 311;
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
    document.addEventListener('click', function(){
        buttonPlus2.style.marginLeft = firstPositionPlus2 + "px";
        buttonPlus1.style.marginRight = LeftPositionPlus1 + "px";
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

