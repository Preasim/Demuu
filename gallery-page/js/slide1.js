export const slide1 = () => {
  class Circle {
    constructor({ x = 0, y = 0, radius = 10, ctx, randomSize, color }) {
      this.ctx = ctx;
      this.color = color;
      this.x = x;
      this.y = y;
      this.radius = radius;
      this.randomSize = randomSize;
      this.angle1 = 0;
      this.angle2 = 0;
  
      this.circleStartAngle = 0;
      this.circleEndAngle = Math.PI * 2;
      this.counterClockWise = false;
    }
  
    update(time, index) {
      this.angle1 += 0.02;
      this.angle2 += 0.06;
  
      this.ctx.beginPath();
      this.ctx.fillStyle = this.color;
      this.ctx.arc(
      this.x + Math.sin(this.angle1 + index) * 3,
      this.y + Math.sin(this.angle2 + index) * 2,
      this.radius,
      this.circleStartAngle,
      this.circleEndAngle,
      this.counterClockWise);
  
      this.ctx.fill();
      this.ctx.closePath();
    }}
  
  
  class Canvas {
    constructor({ canvas }) {
      this.canvas = canvas;
      this._initialSetup();
      this._setCanvasSize();
      this._createCircles();
  
      this.render();
    }
  
    _initialSetup() {
      this.time = 0;
      this.ctx = this.canvas.getContext("2d");
      this.dpi = devicePixelRatio;
      this.colors = ["#f72485", "#710ab7", "#3b0ca3", "#4361ee", "#4dc8f0"];
    }
  
    _setCanvasSize() {
    let canvasWidth = 0; // 변경된 너비
    let canvasHeight = 0; // 변경된 높이
    if (window.innerWidth <= 576) {
      canvasWidth = 300;
      canvasHeight = 300;
    } else {
      canvasWidth = 500;
      canvasHeight = 500;
    }
    this.canvas.style.width = canvasWidth + "px";
    this.canvas.style.height = canvasHeight + "px";
    this.canvas.width = Math.floor(canvasWidth * this.dpi);
    this.canvas.height = Math.floor(canvasHeight * this.dpi);
    this.ctx.scale(this.dpi, this.dpi);
  }
  
    _createCircles() {
      this.circles = [];
  
      for (let i = 0; i < 200; i++) {
        const randomX = Math.random() * 500;
        const randomY = Math.random() * 500;
        const randomSize = Math.random() * 12;
        const randomNumber = 20 + Math.random() * 10;
        const randomColor = Math.round(
        Math.random() * this.colors.length - 1);
  
  
        const circle = new Circle({
          x: randomX,
          y: randomY,
          radius: randomSize,
          ctx: this.ctx,
          randomSize: randomNumber,
          color: this.colors[randomColor] });
  
        this.circles.push(circle);
      }
    }
  
    render() {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.time += 0.05;
  
      this.circles.forEach((circle, index) => {
        circle.update(this.time, index);
      });
  
      requestAnimationFrame(this.render.bind(this));
    }}
  
  
  const canvas = new Canvas({
    canvas: document.querySelector("#slide1-canvas") });
}