var amount = prompt("Enter the amount of numbers you will use: ");
var nbr = [];

for (let i = 0; i < amount; i++){
    nbr[i] = prompt("Enter number: ");
    
}

for (let j = 0; j < amount; j++){
if (isNaN(nbr[j])){
    alert(nbr[j] + " is not a number");
}
}

function writeArray(){
    for (let i = 0; i < amount; i++){
        document.write(nbr[i] + ",");
    }
}

function sortArray(){
    nbr.sort( function( a , b){
        if(a > b) return 1;
        if(a < b) return -1;
        return 0;
    });
}


function writeSorted(){
document.write("<br>" + nbr);
}
