"use strict";

window.addEventListener("load",function(){

    alert("Herzlich Willkommen");


    let firstNumber=document.getElementById("firstNumber");
    let secondNumber=document.getElementById("secondNumber");


    let Calculate=function(){

    let firstNumberObj=parseFloat(firstNumber.value);
    let secondNumberObj=parseFloat(secondNumber.value);
    
    let AdditionObj=(firstNumberObj+secondNumberObj);
    let Addition=document.getElementById("Addition");
    Addition.innerText=AdditionObj;

    let SubtraktionObj=(firstNumberObj-secondNumberObj);
    let Subtraktion=document.getElementById("Subtraktion");
    Subtraktion.innerText=SubtraktionObj;

    let MultiplikationObj=(firstNumberObj*secondNumberObj);
    let Multiplikation=document.getElementById("Multiplikation");
    Multiplikation.innerText=MultiplikationObj;

    let DivisionObj=(firstNumberObj/secondNumberObj);
    let Division=document.getElementById("Division");
    Division.innerText=DivisionObj;


    }

    firstNumber.addEventListener("change",Calculate);
    secondNumber.addEventListener("change",Calculate);
 

},false);