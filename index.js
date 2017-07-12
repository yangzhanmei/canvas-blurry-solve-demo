function draw() {
    var getPixelRatio = function (context) {
        var backingStore = context.backingStorePixelRatio ||
            context.webkitBackingStorePixelRatio ||
            context.mozBackingStorePixelRatio ||
            context.msBackingStorePixelRatio ||
            context.oBackingStorePixelRatio ||
            context.backingStorePixelRatio || 1;
        return (window.devicePixelRatio || 1) / backingStore;
    };

    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    var ratio = getPixelRatio(ctx);

    ctx.font = "30px serif";
    ctx.fillText("Hello world", 10 * ratio, 50 * ratio);
}

draw();
