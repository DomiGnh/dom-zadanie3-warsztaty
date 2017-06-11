'use strict';

//var formularz= document.getElementById('formularz');

function pobierzImie(event) {
    event.preventDefault();
    console.log("mnscoq");


var fname = document.getElementsByName('fname')[0].value;
var lname = document.getElementsByName('lname')[0].value;


console.log(fname);
    console.log(lname);
    
}




//kalkulator do domu 
// zadanie dom, struktura w html, pole moze nbyc input, reszta buttony i podpiać darzenie onclick, gdy to klinkamy ma sie wpsiywac do inputa, po kliknieciu rowna sie ma wykonac dzialanie funkcja eval liczy function myFunction{ var 