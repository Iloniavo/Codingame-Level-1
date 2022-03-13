//This code is written in NodeJs

let nbTemperature = 3
let input = "-1 6 -3 "


let tab = []

//To get numbers
let cou = input.split(" ")
    cou.push("0")



function temp(cou){
// When there is no input    
if ( nbTemperature = 0) console.log(0)

else {
//     
   for ( element of cou){
    tab.push(parseInt(element))
    }
// Sort the array from the smallest to the biggest
    let newTab = tab.sort(
    (a,b) => a - b , 0)

    let zero  = newTab.indexOf(0)
    
    if(Math.max(...newTab)== 0){ // If all the numbers are negatives
    console.log(newTab[zero-1])
    } else {
    let array = newTab.slice(zero-1,zero+2)

        if ( Math.abs(array[0]) == Math.abs(array[2])){ 
        console.log(array[2])
        }
        else if ( Math.abs(array[0]) > Math.abs(array[2])){
        console.log(array[2])
        }
        else if (Math.abs(array[0]) < Math.abs(array[2])){
        console.log(array[0])
        } 
}
}
}
