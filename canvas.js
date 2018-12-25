let canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let c = canvas.getContext("2d");

function Circle(x, y, dx, dy, radius){
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;

  this.draw = function(){
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.strokeStyle = "hsl(176, 56%, 55%)";
    c.stroke();
  }

  this.update = function(){
    if(this.x + this.radius > innerWidth || this.x - this.radius < 0){
      this.dx = -this.dx;
    }
    if(this.y + this.radius > innerHeight || this.y - this.radius < 0){
      this.dy = -this.dy;
    }

    this.x += this.dx;
    this.y += this.dy;
  }
}

function animate(){
  requestAnimationFrame(animate);
  // c.clearRect(0, 0, innerWidth, innerHeight);

  c.fillStyle = "white";
  c.fillRect(0, 0, window.innerWidth, window.innerHeight);

  // for(i = 0; i < circleArray.length; i++){
  //   circleArray[i].draw();
  //   circleArray[i].update();
  // }

  for(i = 0; i < numberArray.length; i++){
    numberArray[i].draw();
    numberArray[i].update();
  }
}

let circleArray = [];
let radius = 5;
for(i = 0; i < 20; i++){
  let x = Math.random() * (innerWidth - radius * 2) + radius;
  let y = Math.random() * (innerHeight - radius * 2) + radius;
  let dx = (Math.random() - 0.5) * 5 + 2;
  let dy = (Math.random() - 0.5) * 5 + 2;
  circleArray.push(new Circle(x, y, dx, dy, radius));
}

let numberArray = [];

function GenerateNumberArray(bound, length){
  numberArray = [];
  for(i = 0; i < length; i++){
    let x = Math.random() * innerWidth;
    let y = Math.random() * innerHeight;
    let dy = Math.random() * 2.4 + 0.2;
    let number = Math.random() * bound;
    let color = i % 2 == 0 ? "black" : "grey";
    number = Math.floor(number);
    numberArray.push(new NumberImage(x, y, 0, dy, "24px Aleo", number, color));
  }
  return;
};

GenerateNumberArray(10, 100);

function NumberImage(x, y, dx, dy, font, text, color){
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.text = text;
  this.color = color;

  this.draw = function(){
    c.font = font;
    c.shadowBlur = 0;
    if(color == "grey"){
      c.shadowColor = "grey";
      c.fillStyle = "grey";
      //c.fillStyle = "rgba(248, 150, 93, 1)";
    }

    else if(color == "black"){

      c.shadowColor = "black";
      c.fillStyle = "black";
    }

    c.fillText(this.text, this.x, this.y);
  }

  this.update = function(){
    if(this.y > innerHeight){
      this.y = 0;
    }

    this.x += this.dx;
    this.y += this.dy;
  }
}

window.addEventListener("resize", function(e){
  canvas.width = innerWidth;
  canvas.height = innerHeight;
  GenerateNumberArray(10, 30);
});

animate();

