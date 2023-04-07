const canvas = document.getElementById("myCanvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var hydra = new Hydra({
  canvas,
  detectAudio: false,
  enableStreamCapture: false,
})


var hydra = new Hydra({
  canvas,
  detectAudio: false,
  enableStreamCapture: false,
})

  osc().mult(osc(10, 0.2, 2).rotate(0.2))
  .kaleid(20) 
  .invert(0.8) 
  .diff(osc(2, 0.1, 4))
  .scale(()=>Math.sin(time)/2 + 1)
  .rotate(0.2).diff(voronoi(40,0.5,1).blend(voronoi(40,2,2).blend(voronoi(40,0.1,3))))
  .out()