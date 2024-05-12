// function sacl(device){
//     for(let i = 0; i < device.length; i++){
//          a = device[i].lastIndexOf(".")

//     }
//     return device
// }
// let a ;
// let result = sacl(1,3,4,7,9,5)
// console.log([result])

function Indeks(massiv) {
    let tarIndeks = massiv.slice().sort(function(a, b){return b - a}); 
    return tarIndeks;
    
}

let indekslar = [5, 2, 9, 1, 7];
var tarIndeks = Indeks(indekslar);
document.write(tarIndeks); 