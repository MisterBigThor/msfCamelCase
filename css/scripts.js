

function initJS(){
    console.log("init JS");
}

function scrollProj() {
    var elmnt = document.getElementById("proj");
    elmnt.scrollIntoView({behavior: "smooth", block: "start"});
}


function newFocus(id){
    console.log("entrada");
    switch(id){
        case main:
            console.log('a');
            break;
        default:
            console.log("otro");
    }
}

function myNavFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } 
    else {
        x.className = "topnav";
    }
}