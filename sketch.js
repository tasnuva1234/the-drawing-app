
let redPaint = [];
let slider

function preload(){

    
  }

function setup() {
	createCanvas(600, 400);

  slider = createSlider(0, 255, 100);
  slider.position(10, 10);
  slider.style('width', '80px');

  button = createButton('click me');
  button.position(150, 0);
 
  


	 
}


  function mouseDragged(){
   let r = 5;
   let b = new Red(mouseX, mouseY, slider)
   //redPaint[0] = b;
   redPaint.push(b);
  
}







function draw() {
background(0);

for (let i = 0; i < redPaint.length; i++){
  redPaint[i].show();
}


button.mousePressed(changeBG);



}

function changeBG(){
  
 
  background(0);
  bubbles = [];
  // for (let i = redPaint.length-1; i >= 0; i--){
  //   if(redPaint[i].contains(mouseX,mouseY)){
  //     redPaint.splice(i,1);
  //   }
  // }
}

class Red {
  constructor(x, y, r){
      this.r = slider;
      this.x = x;
      this.y = y;
      
      
  }

  // contains(px, py){
  //   let d = dist (px, py, this.x, this.y)
  //   if(d< this.r){
  //    return true;
  //   } else {
  //    return false
  //   }


  show() {
    fill("red")
    noStroke();
    //ellipse(this.x, this.y, slider );
    ellipse(this.x, this.y, slider.value());
      
  }

}

  
