/* 
Mariya Gedrich
Period 6
*/

//gets canvas by ID
var c= document.getElementById("ftb2maga");
//gets the 2d context of the canvas
var ctx = c.getContext("2d");

ctx.font="30px Arial";
ctx.fillText("The Killer Whale Party", 235,100);
//sets the fill color for the upcoming rectangle to blue
ctx.fillStyle='#0000FF';
//draws the blue rectangle
ctx.fillRect(10,10,70,50);

//sets the stroke color for the rectangle to red
ctx.strokeStyle='#FF0000';
//draws the red border around it
ctx.strokeRect(10,10,70,50);

//begins drawing the first triangle
ctx.beginPath();
//sets starting point for the drawing to (300,400)
ctx.moveTo(300,200);
//plans a line from the starting point to (400,300)
ctx.lineTo(400,300);
//plans a line from (400,300) to (500,200)
ctx.lineTo(500,200);
//plans a line from (500,200) to (300,200)
ctx.lineTo(300,200);
//draws the lines determined since beginPath
ctx.stroke();
//ends the drawing of the triangle
ctx.closePath();
//sets the fill color to black
ctx.fillStyle="#000000";
//colors the triangle
ctx.fill();

//begins drawing the second triangle
ctx.beginPath();
//sets starting point for the drawing to (400,300)
ctx.moveTo(400,300);
//plans a line from the starting point to (300,400)
ctx.lineTo(300,400);
//plans a line from the starting point to (500,400)
ctx.lineTo(500,400);
//plans a line from the starting point to (400,300)
ctx.lineTo(400,300);
//draws the lines determined since beginPath
ctx.stroke();
//ends the drawing of the triangle
ctx.closePath();
//colors the triangle
ctx.fill();


//sets starting point for drawing the left side-line to (300,200)
ctx.moveTo(300,200);
//draws a line from (300,200) to (300,400)
ctx.lineTo(300,400);

//sets starting point for drawing the right side-line to (500,200)
ctx.moveTo(500,200);
//draws a line from (500,200) to (500,400)
ctx.lineTo(500,400);

//draws the side-lines planned earlier
ctx.stroke();

//begins drawing circle
ctx.beginPath();
//plans a circle with center at (400,300) and radius 50
ctx.arc(400,300,50,0,2*Math.PI);
//draws the circle
ctx.stroke();
//ends the drawing of the circle
ctx.closePath();
//sets the fill color to red
ctx.fillStyle="#FF0000";
//fills the circle
ctx.fill();
