console.log('the power within');

var c=document.getElementById('screen');
var ctx=c.getContext('2d');

var grow=true;

var button=document.getElementById('circle');

var go=false;
var r=0;
var drawCircle = function() {
    //console.log('drawCircle');
    //ctx.fillStyle="#FF0000";
    ctx.clearRect(0,0,500,500);
    //ctx.fillRect(0,0,500,500);
    ctx.arc(250,250,r,0,2*Math.PI);
    console.log(r);
    ctx.fillStyle="#000000";
    ctx.fill();
    if (grow) {
	console.log('grow');
	r++;
    } else {
	console.log('shrink');
	r--;
    }

    if (r==250) {
	grow=false;
    } else if (r==0) {
	grow=true;
    }
  
    if (go)
	window.requestAnimationFrame(drawCircle);
    
};

button.addEventListener('click', function(e) {
    go=true;
    drawCircle();
});

