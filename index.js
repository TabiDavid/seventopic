function change(){
    var colorOne = document.getElementById("change1");
    if(colorOne.style.backgroundColor == "red"){
    colorOne.style.backgroundColor = "yellow";
    colorOne.style.backgroundColor = "black";
}
else {
    colorOne.style.backgroundColor = "red";
colorOne.style.backgroundColor = "white";
}
}
window.onload = function(){
document.getElementById("outPut").onclick = change;
}