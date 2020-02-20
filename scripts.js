
var projJSON;

function resetAcordions(){
    document.getElementById('a1').className = document.getElementById('a1').className.replace(" w3-show", "");
    document.getElementById('a2').className = document.getElementById('a2').className.replace(" w3-show", "");
    document.getElementById('a3').className = document.getElementById('a3').className.replace(" w3-show", "");
}

function acordion(id){
    resetAcordions();
    var x = document.getElementById(id);
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } 
    else { 
        x.className = x.className.replace(" w3-show", "");
    }
}

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
function w3_open() {
  document.getElementById("mySidebar").style.display = "block";
}

function w3_close() {
  document.getElementById("mySidebar").style.display = "none";
}