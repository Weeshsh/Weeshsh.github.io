deg = 137.5;
sca = 5.0;
quant = 5000;

function setup() {
	createCanvas(windowWidth,windowHeight);
  noLoop();
}

function draw() {
	background(45);
  print("scale = " + sca + "   degree = " + deg + "   quantity = " + quant + "\n");
	let xd = createImage(width, height+100);
  loadPixels();
  for (let n = 0; n < quant; n++) {
      phi = n * deg;
      r = sca * sqrt(n);  
      j = r * cos(phi) + width / 2;              
      i = r * sin(phi) + height / 2;
      if ((i >= 0) && (j >= 0) && (i < width) && (j < width))
        xd.set(j, i, color(0, 666 * 2 * r / width, 555 - 555 * 2 * r / width));
  }
  xd.updatePixels();
	image(xd,0,0)
}

function keyPressed() {
  if (keyCode == 87)          
    sca += 0.1;
  if ((keyCode == 83)&&sca > 0)          
    sca -= 0.1;
  if (keyCode == 65)          
    deg -= 0.01;
  if (keyCode == 68)          
    deg += 0.01;
  if ((keyIsDown(69))&&(quant>0)) 
    quant -= 100;
  if (keyCode==81)            
    quant += 100;
  if (keyCode == 82){
    sca = 5.0; 
    deg = 137.5; 
    quant = 5000;
  }
  redraw();
}