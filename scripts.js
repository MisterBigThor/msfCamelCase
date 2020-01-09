

function initJS(){
    console.log("init JS");
}

function scrollProj() {
    var elmnt = document.getElementById("proj");
    elmnt.scrollIntoView({behavior: "smooth", block: "start"});
}

function setnav(id){
    resetNav();
    id.classList.add('w3-white');
}
function resetNav(){
    document.getElementById('navMain').classList.remove('w3-white');
    document.getElementById('navProj').classList.remove('w3-white');
    document.getElementById('navFaqs').classList.remove('w3-white');
    document.getElementById('navContacte').classList.remove('w3-white');
}
function newFocus(id){
    console.log(id);
    /*
    switch(id){
        case main:
            console.log('main');
            resetNav();
            id.classList.add('w3-white');
            break;
        case proj:
            console.log('proj');
            resetNav();
            id.classList.add('w3-white');
            break;
        case faqs:
            console.log('faqs');
            resetNav();
            id.classList.add('w3-white');
            break;
        case contacte:
            console.log('contacte');
            resetNav();
            id.classList.add('w3-white');
            break;
        default:
            console.log("otro");
    }
    */
}

