
function acordion(id){
    //var xmlhttp = new XMLHttpRequest();
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
    var req = new XMLHttpRequest();
    req.onreadystatechange = function(){
        if(this.readyState==4 && this.status==200){
            var myObj = JSON.parse(this.responseText);
            for(var i = 0; i < myObj.proj.length; ++i){
                var acorbutt = document.createElement('button');
                acorbutt.setAttribute("class", "w3-btn w3-black");
                acorbutt.innerHTML = myObj.proj[i].titulo;
                document.getElementById('dropzone').appendChild(acorbutt);
            }
        }
    };
    req.open("GET", "/resources/proj.json", true);
    req.send();
    
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