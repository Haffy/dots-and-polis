var canvas1 = document.getElementById('canvas1');
var canvas2 = document.getElementById('canvas2');
var canvas3 = document.getElementById('canvas3');
var ctx1 = canvas1.getContext('2d');
var ctx2 = canvas2.getContext('2d');
var ctx3 = canvas3.getContext('2d');
var canvasElement = $("canvas")
canvas1.width = canvasElement.width();
canvas1.height = canvasElement.height();
canvas2.width = canvasElement.width();
canvas2.height = canvasElement.height();
canvas3.width = canvasElement.width();
canvas3.height = canvasElement.height();
var canvasWidth = canvas3.width,
  canvasHeight = canvas3.height;
console.log(canvasWidth, canvasHeight)
var npoints=7


// ctx1.fillRect(0, 0, canvasWidth, canvasHeight);

ctx2.fillStyle = "#d4d4d4";

ctx3.fillStyle = "#c9c9c9";
ctx3.shadowColor = "#424242";
ctx3.shadowOffsetX = 3;
ctx3.shadowOffsetY = 3;

offset = canvasWidth / npoints
for (var i = offset / npoints; i < canvasWidth + offset / npoints; i = i + offset + offset / 9) {
  for (var j = offset / npoints; j < canvasWidth + offset / npoints; j = j + offset + offset / 9) {
    ctx3.beginPath();
    ctx3.arc(i, j, offset / npoints, 0, 2 * Math.PI);
    ctx3.fill();
  }
}




ctx1.fillStyle = "#43a047";
ctx1.strokeStyle = "#43a047";
ctx1.lineCap = "round";
ctx1.lineWidth = (offset / npoints) * 2;
for (var i = offset / npoints; i < canvasWidth ; i = i + offset + offset / 9) {
  ctx1.beginPath();
  ctx1.moveTo(i, offset / npoints);
  var j;
  for (j = offset / npoints; j < canvasWidth; j = j + offset + offset / 9);
  ctx1.lineTo(i, j);
  ctx1.stroke();
}
// for (var i = offset / npoints; i < canvasWidth ; i = i + offset + offset / 9) {
//   ctx1.beginPath();
//   ctx1.moveTo(offset / npoints, i);
//   var j;
//   for (j = offset / npoints; j < canvasWidth + offset / npoints; j = j + offset + offset / 9);
//   ctx1.lineTo(j, i);
//   ctx1.stroke();
// }

//Diagonal lines

// ctx1.lineWidth = (offset / npoints) * 1;
// var j1;
// for (j1 = offset / npoints; j1 < canvasWidth + offset / npoints; j1 = j1 + offset + offset / 9);
//
// for (var i = offset / npoints; i < canvasWidth + canvasWidth; i = i + offset + offset / 9) {
//   ctx1.beginPath();
//   ctx1.moveTo(i, offset / npoints);
//   var j2 = j1 - i;
//   ctx1.lineTo(j1, j2);
//   ctx1.stroke();
// }
//
// for (var i = offset / npoints; i < canvasWidth + canvasWidth; i = i + offset + offset / 9) {
//   ctx1.beginPath();
//   ctx1.moveTo(i, offset / npoints);
//   var j2 = i;
//   ctx1.lineTo(offset / npoints, j2);
//   ctx1.stroke();
// }
// for (var i = offset / npoints; i < canvasWidth + canvasWidth; i = i + offset + offset / 9) {
//   ctx1.beginPath();
//   ctx1.moveTo( offset / npoints,i);
//   var j2 = j1 - i;
//   ctx1.lineTo(j2, j1);
//   ctx1.stroke();
// }
