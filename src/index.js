var stage = new PIXI.Stage(0xFFFFFF);

var renderer = PIXI.autoDetectRenderer(320, 240, null, false, true);

function generateCircle() {
	var circle = new PIXI.Graphics();
	circle.fillColor = 0xFF0000;
	circle.filling = true;
	circle.lineWidth = 0;
	circle.lineAlpha = 0;
	circle.drawCircle(0, 25, 25);
	return circle;
}
var circle = generateCircle();
stage.addChild(circle);

document.body.appendChild(renderer.view);

function animate() {
	requestAnimationFrame(animate);
	renderer.render(stage);
	circle.position.x++;
} animate();

window.onresize = function() {
	renderer.resize(window.innerWidth  * window.devicePixelRatio, window.innerHeight * window.devicePixelRatio);
}; window.onresize();
