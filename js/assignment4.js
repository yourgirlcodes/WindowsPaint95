var color = "black"
var width = "10px"
var height = "10px"


var canvas = document.getElementById("canvas");

var pickedColor = document.getElementsByClassName("colorBtn btn-lg");
for (var i = 0; i < pickedColor.length; i++) {
    pickedColor[i].addEventListener('click', function (e) {
        console.log(e.target.id);
        color = e.target.id;
    })
}

var changeBrushSize = document.getElementsByClassName("brushSize");
for (var i = 0; i < changeBrushSize.length; i++) {
    changeBrushSize[i].addEventListener('click', function (e) {
        console.log(e.target.value);
        width = e.target.value;
        height = e.target.value;
    })
}

var brushShapes = document.getElementsByClassName("brushShape");
for (var i = 0; i < brushShapes.length; i++) {
    brushShapes[i].addEventListener('click', function (e) {
        radius = e.target.value;
    })
}


var Start = function () {
    canvas.addEventListener("mousemove", function (e) {
        drawOnCanvas(e);
    });
}

var color = "black";
var width = "10";
var height = "10";
var radius = "0%";

var drawOnCanvas = function (e) {
    console.log(e);
    var dot = document.createElement("div");
    dot.style.left = e.pageX - e.target.offsetLeft + "px";
    dot.style.top = e.pageY - e.target.offsetTop + "px";
    dot.style.width = width + "px";
    dot.style.height = height + "px";
    dot.style.borderRadius = radius;
    dot.style.position = "absolute";
    dot.style.backgroundColor = color;
    canvas.appendChild(dot);
}



document.getElementById("clearScreen").addEventListener("click", clearCanvas);

function clearCanvas() {
    var fullScreen = canvas.getElementsByTagName('div');
    while (fullScreen.length > 0) {
        canvas.removeChild(fullScreen[0]);
    }
};

Start();