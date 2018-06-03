"use strict";

let json;
let nummer;
let myJson;
let barSize;
let barSizeTo;
let template = document.querySelector("#mintemplate p");
let container = document.querySelector("#container");

document.addEventListener("DOMContentLoaded", inter);

// ------------ hent json ---------------- //

async function hentJson(){
myJson = await fetch("https://kea-alt-del.dk/kata-distortion/");
json = await myJson.json();

console.log(json.inQueue);
nummer = json.inQueue;
// container.textContent = json.inQueue;


barSize = (nummer * 4);

document.querySelector("line").style.strokeDashoffset = 100 - barSize;

if (nummer > 15){
document.querySelector("h1").style.filter = "drop-shadow(10px 10px 10px red)";
document.querySelector("h1").style.animationName = "glow";
document.querySelector("h1").style.fontSize = "35px";
document.querySelector("p").style.width = "33vw";
} if (nummer < 15){
    document.querySelector("h1").style.filter = "drop-shadow(0px 0px 0px black)";
    document.querySelector("h1").style.animationName = "none";
    document.querySelector("h1").style.fontSize = "20px";
    document.querySelector("p").innerHTML = ` `;
    document.querySelector("p").style.width = "0vw";
}

// --------- bestem strokeDashoffset ---------//
// if (nummer > 15){
//     document.querySelector("line").style.strokeDashoffset = 0;
// } if (nummer < 15){
//     document.querySelector("line").style.strokeDashoffset = 220;
// }

}


// ---------- set intervaller ------------ //

function inter(){
    setInterval(hentJson, 10000);
}


hentJson();