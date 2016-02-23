/* Mariya Gedrich Period 6 */
console.log('ayy');

//first circle or not
var d=false;

var c=document.getElementById('playground');
var ctx=c.getContext('2d');

//black
ctx.strokeStyle="#000000";

//last circle coords
var x;
var y;

var clear=function(e) {
    e.preventDefault();
}
   

var button=document.getElementById('clear');

//clear context
button.addEventListener('click', function(e) {
    ctx.clearRect(0,0,500,500);
    d=false;
});

//drawing the actual things
c.addEventListener('click', function(e) {
    console.log('clicked');
    ctx.beginPath();
    //circle
    ctx.arc(e.offsetX,e.offsetY,10,0,2*Math.PI);
    ctx.fill();
    if (!d) {
	//first circle
	x=e.offsetX;
	y=e.offsetY;
	ctx.moveTo(x,y);
	console.log("moved to");
	d=true;
    } else {
	//rest of the circles and lines
	console.log('other thing');
	ctx.beginPath();
	ctx.moveTo(x,y);
	ctx.lineTo(e.offsetX, e.offsetY);
	ctx.stroke();
	x=e.offsetX;
	y=e.offsetY;
	console.log('stroked');
    }    
});
