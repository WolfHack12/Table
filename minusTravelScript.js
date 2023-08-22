var table = document.getElementsByClassName('table');
const cells = document.querySelectorAll('td');
var td = document.createElement('td');
table.addEventListener('mouseover', function(event){
        let target = event.target;
        target.style.backgroundColor = "red";
})
