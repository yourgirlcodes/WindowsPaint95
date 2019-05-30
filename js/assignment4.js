

var colorArray = ["yellow", "red", "blue", "black", "green", "grey", "white"];


var canvas = document.getElementById("canvas");

//picking color off color-palette:
var pickedColor = document.getElementsByClassName("btn-group btn-lg");
for (var i = 0; i < pickedColor.length; i++) {
    pickedColor[i].addEventListener('click', function (e) {
        console.log(e.target.id)
        color = e.target.id
    })
}


var Start = function () {
    canvas.addEventListener("mousemove", function (e) {
        drawOnCanvas(e)

    });
}

var color = "black"

var drawOnCanvas = function (e) {
    console.log(e);
    var dot = document.createElement("div");
    dot.style.left = e.clientX - e.target.offsetLeft + "px";
    dot.style.top = e.clientY - e.target.offsetTop + "px";
    dot.style.width = "10px";
    dot.style.height = "10px";
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