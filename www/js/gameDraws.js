var canvas1 = document.getElementById('canvas1');
var canvas2 = document.getElementById('canvas2');
var canvas3 = document.getElementById('canvas3');
var ctx1 = canvas1.getContext('2d');
var ctx2 = canvas2.getContext('2d');
var ctx3 = canvas3.getContext('2d');
 var canvasElement = $("canvas");
canvasElement.width=function(){return 500};
canvasElement.height=function(){return 500};
canvas1.width = canvasElement.width();
canvas1.height = canvasElement.height();
canvas2.width = canvasElement.width();
canvas2.height = canvasElement.height();
canvas3.width = canvasElement.width();
canvas3.height = canvasElement.height();
var canvasWidth = canvas3.width,
    canvasHeight = canvas3.height;
console.log(canvasWidth, canvasHeight);
var npoints = 7;
var matrix=[npoints];
var ii = 0, jj = 0;

for(var k=0;k<npoints;k++){
    matrix[k]=[npoints];
}

// ctx1.fillRect(0, 0, canvasWidth, canvasHeight);

ctx2.fillStyle = "#d4d4d4";

ctx3.fillStyle = "#c9c9c9";
ctx3.shadowColor = "#424242";
ctx3.shadowOffsetX = 3;
ctx3.shadowOffsetY = 3;

offset = canvasWidth / npoints;
for (var i = offset / npoints; i < canvasWidth + offset / npoints; i = i + offset + offset / 9) {
    for (var j = offset / npoints; j < canvasWidth + offset / npoints; j = j + offset + offset / 9) {
        ctx3.beginPath();
        ctx3.arc(i, j, offset / npoints, 0, 2 * Math.PI);
        ctx3.fill();
        matrix[ii][jj]=[];
        matrix[ii][jj].push(i,j);
        jj++;
    }
    jj=0;
    ii++;
}


ctx1.fillStyle = "#43a047";
ctx1.strokeStyle = "#43a047";
ctx1.lineCap = "round";
ctx1.lineWidth = (offset /npoints*1);
//vertical lines
for (var i = 0; i < npoints; i++) {
    ctx1.beginPath();
    ctx1.moveTo(matrix[i][0][0],matrix[i][0][1]);
    ctx1.lineTo(matrix[i][npoints-1][0],matrix[i][npoints-1][1]);
    ctx1.stroke();
}
//horizontal lines
for (var i = 0; i < npoints; i++) {
    ctx1.beginPath();
    ctx1.moveTo(matrix[0][i][0],matrix[0][i][1]);
    ctx1.lineTo(matrix[npoints-1][i][0],matrix[npoints-1][i][1]);
    ctx1.stroke();
}


//Diagonal lines

 ctx1.lineWidth = (offset / npoints) * 1;
for (var i = 0; i < npoints; i++) {
    ctx1.beginPath();
    ctx1.moveTo(matrix[i][0][0],matrix[i][0][1]);
    ctx1.lineTo(matrix[npoints-1][npoints-(i+1)][0],matrix[npoints-1][npoints-(i+1)][1]);
    ctx1.stroke();
}

for (var i = 0; i < npoints; i++) {
    ctx1.beginPath();
    ctx1.moveTo(matrix[0][i][0],matrix[0][i][1]);
    ctx1.lineTo(matrix[npoints-(i+1)][npoints-1][0],matrix[npoints-(i+1)][npoints-1][1]);
    ctx1.stroke();
}

for (var i = 0; i < npoints; i++) {
    ctx1.beginPath();
    ctx1.moveTo(matrix[0][i][0],matrix[0][i][1]);
    ctx1.lineTo(matrix[i][0][0],matrix[i][0][1]);
    ctx1.stroke();
}
for (var i = 0; i < npoints; i++) {
    ctx1.beginPath();
    ctx1.moveTo(matrix[npoints-1][i][0],matrix[npoints-1][i][1]);
    ctx1.lineTo(matrix[i][npoints-1][0],matrix[i][npoints-1][1]);
    ctx1.stroke();
}

var hammertime = new Hammer(canvas3);
hammertime.get("swipe").set({ direction: Hammer.DIRECTION_ALL });
hammertime.get("swipe").set({ velocity: 0.1});
hammertime.on("swipe", function(eventObject) {
    if(eventObject.angle < -100 && eventObject.angle > -170) {
        //UP-LEFT SWIPE...

        console.log('up-left',eventObject.deltaX, eventObject.pointers);
    }
    else if(eventObject.angle >= -100 && eventObject.angle <= -80) {
        //UP
        console.log('up');
    }
    else if(eventObject.angle < -10 && eventObject.angle > -80 ) {
        //UP-RIGHT SWIPE...
        console.log('up-right');
    }
    else if(eventObject.angle >= -10 && eventObject.angle <= 10) {
        //right
        console.log('right');
    }
    else if(eventObject.angle >10 && eventObject.angle <80) {
        //DOWN-RIGHT SWIPE...
        console.log('down-right');
    }
    else if(eventObject.angle >= 80 && eventObject.angle <= 110) {
        //down
        console.log('down');
    }
    else if(eventObject.angle >110 && eventObject.angle < 170) {
        //down left
        console.log('down left');
    }
    else if(eventObject.angle >= 170 || eventObject.angle <= -10) {
        //down left
        console.log('left');
    }
});
