document.querySelector('.square').addEventListener('click', () => {
    draw();
})
function draw () {
    let square = [
        ["00BCD4", "FFEB3B","FFEB3B","00BCD4"],
        ["FFEB3B", "FFC107","FFC107","FFEB3B"],
        ["FFEB3B", "FFC107","FFC107","FFEB3B"],
        ["00BCD4", "FFEB3B","FFEB3B","00BCD4"]
    ];
    let canvas = document.querySelector(".canvas"), 
        ctx = canvas.getContext("2d"), 
        width = 4, 
        height = 4, 
        scale = 128; 
        canvas.width = width * scale; 
        canvas.height = height * scale;
    for(let row = 0; row < height; row++) {
        for(let col = 0; col < width; col++) { 
            ctx.fillStyle = '#' + square[row][col]; 
            ctx.fillRect(col * scale, row * scale, scale, scale); 
        }
    }
}
document.querySelector('.logo').addEventListener('click', () => {
    drawLogo();
})
 function drawLogo() {
    let example = document.querySelector(".canvas"),
    ctximg = example.getContext('2d'),
    img = new Image();  
    img.src = 'images/image.png'; 
    img.onload = function() {  
        ctximg.drawImage(img, 0, 0, 512, 512); 
      }
}

document.querySelector('.flower').addEventListener('click', () => {
    drawPick();
})
        function drawPick() {
        let pick = document.querySelector(".canvas"), 
        ctxPick = pick.getContext("2d"); 
        width = 32, 
        height = 32, 
        scale = 16; 
        pick.width = width * scale; 
        pick.height = height * scale;
        flower.forEach((row, i) => {
          row.forEach((column, j) => {
            ctxPick.fillStyle = `rgb(${column[0]},${column[1]},${column[2]})`; 
            ctxPick.fillRect(i * scale, j * scale, width, height);
          })
        })
    }  









