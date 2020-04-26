var x,y,r;
var a=0;
r=200;
var re=200;
function setup() {
  createCanvas(600, 600);
 
}

function draw(){
	background(0);
translate(width/2,height/2);
x=r*cos(a);
y=r*sin(a);
stroke(200);
strokeWeight(2);
line(0,0,x,y);
stroke(222);
line(r*cos(PI),r*sin(PI),r*cos(0),r*sin(0));
line(r*cos(PI/2),r*sin(PI/2),r*cos(-PI/2),r*sin(-PI/2));
stroke(200);
strokeWeight(2);
line(x,0,x,y);
fill(200);
ellipse(x,y,20,20);
//ellipse(x,y,20,20);
noFill();
stroke(200);
strokeWeight(2);
circle(0,0,r*2);
a+=0.02;
noFill();
stroke(250);
strokeWeight(1);
var in_degree=a*57.29577951;
textStyle(ITALIC);
textSize(17);
text(in_degree.toFixed(0)+'\xB0',0+1,0);
textStyle(ITALIC);
textSize(25);
stroke(30,200,200);
strokeWeight(1);
text('Trigonometry:Unit Circle',0-100,0-250);
stroke(300);
textSize(17);
strokeWeight(1);
txt('1',r*cos(0),r*sin(0));
txt('-1',r*cos(PI/2),r+15*sin(PI/2));
txt('-1',r*cos(PI),r*sin(PI));
txt('1',r*cos(-PI/2),r*sin(-PI/2));
}
function txt(tx,xc,yc){
text(tx,xc,yc);
}


