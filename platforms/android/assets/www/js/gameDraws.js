var canvas1 = document.getElementById('canvas1');
var canvas2 = document.getElementById('canvas2');
var canvas3 = document.getElementById('canvas3');
var ctx1 = canvas1.getContext('2d');
var ctx2 = canvas2.getContext('2d');
var ctx3 = canvas3.getContext('2d');
 var canvasElement = $("canvas");
// canvasElement.width=function(){return 500};
// canvasElement.height=function(){return 500};
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
var movement={x:0,y:0};

hammertime.get("swipe").set({ direction: Hammer.DIRECTION_ALL });
hammertime.get("swipe").set({ velocity: 0});
hammertime.on("swipe", function(eventObject) {
    if(eventObject.angle < -112.5 && eventObject.angle > -157.5) {
        //UP-LEFT SWIPE...
        movement.x=-1;
        movement.y=-1;
        console.log('up-left');
    }
    else if(eventObject.angle >= -112.5 && eventObject.angle <= -67.5) {
        //UP
        movement.x=0;
        movement.y=-1;
        console.log('up');
    }
    else if(eventObject.angle < -22.5 && eventObject.angle > -67.5 ) {
        //UP-RIGHT SWIPE...
        movement.x=1;
        movement.y=-1;
        console.log('up-right');
    }
    else if(eventObject.angle >= -22.5 && eventObject.angle <= 22.5) {
        //right
        movement.x=1;
        movement.y=0;
        console.log('right');
    }
    else if(eventObject.angle >22.5 && eventObject.angle <67.5) {
        //DOWN-RIGHT SWIPE...
        movement.x=1;
        movement.y=1;
        console.log('down-right');
    }
    else if(eventObject.angle >= 67.5 && eventObject.angle <= 112.5) {
        //down
        movement.x=0;
        movement.y=1;
        console.log('down');
    }
    else if(eventObject.angle >112.5 && eventObject.angle < 157.5) {
        //down left
        movement.x=-1;
        movement.y=1;
        console.log('down left');
    }
    else if(eventObject.angle >= 157.5 || eventObject.angle <= -157.5) {
        //left
        movement.x=-1;
        movement.y=0;
        console.log('left');
    }
    //to know which point was clicked

    var clickedX=eventObject.pointers[0].clientX-eventObject.deltaX, clickedY=eventObject.pointers[0].clientY- $("#player1Area").height()-eventObject.deltaY;

// console.log(eventObject.pointers[0])
     console.log(clickedX,clickedY);
    //  console.log(eventObject.deltaX, eventObject.deltaY);
    // console.log(eventObject.changedPointers[0].screenX,eventObject.changedPointers[0].screenY)
    //     console.log(canvasWidth,canvasHeight)

    // var matrizDistance =[];
    // for (var i = 0; i < npoints; i++) {
    //   matrizDistance[i]=[];
    // }
    //matrizDistance.length=npoints;

    var closestX=0,closestY=0
    for (var i = 0; i < npoints; i++) {
        for (var j = 0; j < npoints; j++) {
          if(Math.sqrt(Math.pow((clickedX-matrix[i][j][0]),2)+Math.pow(clickedY-matrix[i][j][1],2)) <= Math.sqrt(Math.pow((clickedX-matrix[closestX][closestY][0]),2)+Math.pow(clickedY-matrix[closestX][closestY][1],2)))
          {
            closestX=i;
            closestY=j;
          }
          //console.log(Math.sqrt(Math.pow((clickedX-matrix[i][j][0]),2)+Math.pow(clickedY-matrix[i][j][1],2)))
    //      console.log(matrizDistance[i])
        }
    }
    // console.log(closestX,closestY, matrix[closestX][closestY]);

ctx2.fillStyle = "#d4d4d4";
ctx2.strokeStyle = "#d4d4d4";
ctx2.lineCap = "round";
ctx2.lineWidth = (offset /npoints*1);

ctx2.beginPath();
ctx2.moveTo(matrix[closestX][closestY][0],matrix[closestX][closestY][1]);
ctx2.lineTo(matrix[closestX+movement.x][closestY+movement.y][0],matrix[closestX+movement.x][closestY+movement.y][1])
ctx2.stroke();
});
