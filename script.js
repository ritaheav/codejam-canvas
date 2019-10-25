document.getElementById('first').addEventListener('click', () => {
    draw();
})
function draw () {
    var A = [
        ["00BCD4", "FFEB3B","FFEB3B","00BCD4"],
        ["FFEB3B", "FFC107","FFC107","FFEB3B"],
        ["FFEB3B", "FFC107","FFC107","FFEB3B"],
        ["00BCD4", "FFEB3B","FFEB3B","00BCD4"]
    ];
    var canvas = document.getElementById("canvas"), 
        ctx = canvas.getContext("2d"), 
        width = 4, 
        height = 4, 
        scale = 128; 
        canvas.width = width * scale; 
        canvas.height = height * scale;
    for(var row = 0; row < height; row++) {
        for(var col = 0; col < width; col++) { 
            ctx.fillStyle = '#' + A[row][col]; 
            ctx.fillRect(col * scale, row * scale, scale, scale); 
        }
    }
}

document.getElementById('second').addEventListener('click', () => {
    drawPic();
})
function drawPic () {
    
}









