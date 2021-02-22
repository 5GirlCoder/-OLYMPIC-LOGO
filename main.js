canvas = document.getElementById("CanvasLogo");
ctx = canvas.getContext("2d");
//Red
ctx.beginPath();
ctx.strokeStyle = "red";
ctx.lineWidth = "3";
ctx.arc(485, 100, 40, 0, 2 * Math.PI);
ctx.stroke();
//Black
ctx.beginPath();
ctx.strokeStyle = "black";
ctx.lineWidth = "3";
ctx.arc(385, 100, 40, 0, 2 * Math.PI);
ctx.stroke();
//Blue
ctx.beginPath();
ctx.strokeStyle = "blue";
ctx.lineWidth = "3";
ctx.arc(285, 100, 40, 0, 2 * Math.PI);
ctx.stroke();
//Green
ctx.beginPath();
ctx.strokeStyle = "green";
ctx.lineWidth = "3";
ctx.arc(435, 140, 40, 0, 2 * Math.PI);
ctx.stroke();
//Yellow
ctx.beginPath();
ctx.strokeStyle = "yellow";
ctx.lineWidth = "3";
ctx.arc(335, 145, 40, 0, 2 * Math.PI);
ctx.stroke();