module.exports = function(pixiRenderer, windowReference) {
	if (!windowReference) windowReference = window;
	windowReference.addEventListener('resize', resize);
	function resize() {
		pixiRenderer.resize(
			windowReference.innerWidth * (windowReference.devicePixelRatio || 1),
			windowReference.innerHeight* (windowReference.devicePixelRatio || 1)
		);
	}
	return {
		init: function() {
			resize();
		}
	}
}
