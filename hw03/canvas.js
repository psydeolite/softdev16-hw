console.log('the power within');

var c=document.getElementById('screen');
var ctx=c.getContext('2d');

var grow=true;
var requestID;
var circle=document.getElementById('circle');
var stop=document.getElementById('stop');
var dvd=document.getElementById('dvd');

var r=0;
var drawCircle = function() {
    ctx.clearRect(0,0,500,500);
    if (r==250) {
	console.log('stopgrowin\n\n');
	grow=false;
    } else if (r==0) {
	grow=true;
    }
    
    if (grow) {
	r++;
    } else {
	r--;
    }  
    ctx.beginPath();
    ctx.arc(250,250,r,0,2*Math.PI);
    ctx.stroke();
    ctx.fill();
    ctx.closePath();   
    requestID=window.requestAnimationFrame(drawCircle);
};

var logo = new Image();
logo.src="logo_dvd.jpg";
var x=260;
var y=240;
var dx=1;
var dy=1;

var drawDVD = function() {
    if (x==0 || x+(logo.width/5)==500) {
	console.log('horizontal edge');
	dx=dx*-1;
	//dy=dy*-1;
    }
    if (y==0 || y+(logo.height/5)==500) {
	console.log('vertical edge');
	dy=dy*-1;
    }
    x=x+dx;
    y=y+dy;
    ctx.drawImage(logo,x,y, logo.width/5, logo.height/5);
    requestID=window.requestAnimationFrame(drawDVD);
}

circle.addEventListener('click', drawCircle);

stop.addEventListener('click', function(e) {
    window.cancelAnimationFrame(requestID);
});

dvd.addEventListener('click', drawDVD);

