let s = document.getElementById("div-22");
let x = document.querySelectorAll('.but');

let i1 = document.getElementById("one");
let i2 = document.getElementById("two");

let i3 = document.getElementById("three");
let i4 = document.getElementById("four");

let i5 = document.getElementById("five");
let i6 = document.getElementById("six");

let i7 = document.getElementById("seven");
let i8 = document.getElementById("eight");

let idd1 = document.getElementById('id1');

function showVal(newVal){

    idd1.innerHTML = newVal + " px";

    if(i1["checked"]){
        s.style.borderTopLeftRadius = newVal + "px";
    }
    if(i3["checked"]){
        s.style.borderTopRightRadius = newVal + "px";
    }
    if(i5["checked"]){
        s.style.borderBottomRightRadius = newVal + "px";
    }
    if(i7["checked"]){
        s.style.borderBottomLeftRadius = newVal + "px";
    }

} 