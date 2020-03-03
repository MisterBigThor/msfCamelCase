
var projJSON;
var actAcordion;

function myRFunction(){

}

function resetAcordions(){
    if(actAcordion != undefined) {
        console.log("actAcordion defined");
        document.getElementById(actAcordion).className = document.getElementById(actAcordion).className.replace(" w3-show", "");
    }
}

function acordion(id){
    resetAcordions();
    var x = document.getElementById(id);
    if (x.className.indexOf("w3-show") == -1 && (id != actAcordion)) {
        x.className += " w3-show";
        actAcordion = id;
    } 
    else { 
        x.className = x.className.replace(" w3-show", "");
        actAcordion = undefined;
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