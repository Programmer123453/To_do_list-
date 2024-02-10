const btn = document.querySelector("img").addEventListener("click",inputfromuser);
const loseoffocus = document.querySelector("input")
const forcheck = document.querySelector(".align");

loseoffocus.addEventListener("blur",resetinput)
function inputfromuser(){
    const inp = document.querySelector("input").value; 
    var n = document.createElement("input")
    n.type = "text"; 
    n.placeholder=inp;
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";                                     
    checkbox.style.position = "absolute";
    checkbox.style.width = "3vh";
    checkbox.style.margin= "1vh"
    var m = document.querySelector(".align");
    m.appendChild(n);
    forcheck.appendChild(checkbox);
    console.log(m)
    loseoffocus.value = ""
    console.log(checkbox.value);
    checkbox.addEventListener("click",decoration); 
    function decoration(){ 
        n.classList.toggle("for-toogle")
    }
}

function resetinput(){
    if(loseoffocus.value === ""){
        loseoffocus.placeholder = "Notes...";
    }
}