

var colorArray = ["yellow", "red", "blue", "black", "green", "grey"];

var features = ["stamp1", "stamp2", "stamp3"];

var canvas = document.getElementById("canvas");

var Start = function(){
    canvas.addEventListener("click", drawOnCanvas);
}

var drawOnCanvas = function(){
    var dot = document.createElement("div");
        // dot.style.left = (e.clientX-500) + "px";
        // dot.style.top = e.clientY + "px";
        dot.style.width = "2px";
        // dot.style.height = brushSize +  "px";
        // dot.style.borderRadius = borderRadius + "px";
    dot.style.backgroundColor = "black";
    dot.style.position = "absolute";

    canvas.appendChild(dot);

}


function paintColor(e){
    selectedColor = e.target.id;
    console.log(selectedColor)

}


function clickColour(){
    
}


Start();