function change(){
    var colorOne = document.getElementById("change1");
    if(colorOne.style.backgroundColor == "black"){
    colorOne.style.backgroundColor = "white";
    colorOne.style.color = "#009BC4";
}

else if (colorOne.style.backgroundColor == "white"){
    colorOne.style.backgroundColor = "#009BC4";
    colorOne.style.color = "black";
}
else {
    colorOne.style.backgroundColor = "black";
colorOne.style.color = "yellow";
}
}
window.onload = function(){
document.getElementById("outPut").onclick = change;
}

function PressHere(el){
    if(el.className == "class1"){
        el.className = "class2";
    }
    else{
        el.className = "class1"
    }
}

function changeSize(){

var One = document.getElementById("One");
One.style.fontSize = "16pt";
One.style.fontFamily = "Arial, Helvetica, sans-serif";
One.style.padding = "20px";
}