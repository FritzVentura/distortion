"use strict";

window.setInterval(hentJson, 5000);
hentJson();

async function hentJson (){


        let jsonData = await fetch ("https://kea-alt-del.dk/kata-distortion/");
        let queueData = await jsonData.json();
 
    console.log("I kø", queueData.inQueue)

// lav en ny div
    const app = document.createElement("div");
    app.setAttribute("class", "parent");

    for(let i=0; i<1; i++){
        const data = document.createElement("h2");
        app.appendChild(data);
    }

document.body.appendChild(app);
    
// modtager til texcontent
document.querySelector("h2").textContent = queueData.inQueue;


// find alle div'erne
const divs = document.querySelectorAll(".parent");


divs.forEach(function(div){

// SKIFT FARVE og størrele ved værdi af inQUEUE
if (queueData.inQueue < 5){
    document.querySelector(".parent").style.background = "#fb1";
    document.querySelector(".parent").style.width = "25%";
} else if (queueData.inQueue < 10 ){
    document.querySelector(".parent").style.background = "#bada55";
    document.querySelector(".parent").style.width = "50%";
} else if (queueData.inQueue < 20 ){
    document.querySelector(".parent").style.background = "#fa7a55";
    document.querySelector(".parent").style.width = "75%";
} else {
    document.querySelector(".parent").style.background = "#d11d05";
    document.querySelector(".parent").style.width = "100%";
} 

});

 
 }; 
