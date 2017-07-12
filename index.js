function draw() {
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    ctx.font = "20px serif";
    ctx.fillText("Hello world", 10, 50);
}
draw();
