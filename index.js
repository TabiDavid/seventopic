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