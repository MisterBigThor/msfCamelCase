

function initJS(){
    console.log("init JS");
}

function scrollProj() {
    var elmnt = document.getElementById("proj");
    elmnt.scrollIntoView({behavior: "smooth", block: "start"});
}

function setnav(id){
    document.getElementById('navMain').classList.remove('w3-white');
    document.getElementById('navProj').classList.remove('w3-white');
    document.getElementById('navFaqs').classList.remove('w3-white');
    document.getElementById('navContacte').classList.remove('w3-white');
    id.classList.add('w3-white');
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