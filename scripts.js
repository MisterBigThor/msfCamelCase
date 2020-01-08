

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