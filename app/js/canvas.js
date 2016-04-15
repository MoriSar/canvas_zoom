'use strict';
(function() {

	$(window).load(function() {

		$('#scene').show('slow');
		$('.cssload-loader').hide('slow');
		function getImg(id) {
			return document.getElementById(id)
		};
		var width = document.documentElement.clientWidth;
		var height = document.documentElement.clientHeight;
		$('#scene').append('<canvas id="canvas" width= "' + width + '"' + 'height="' + height + '"></canvas>');


		var canvas = new fabric.StaticCanvas('canvas');

	//--->params_of_animation<---
	var step = 15;
	var reRender = canvas.renderAll.bind(canvas);
	var animationType = fabric.util.ease.easeInCubic;
	var duration = 3000;
	//--->end_params_of_animation<---

	//--->drawing_layers<---
	var imgSpace = new fabric.Image(getImg('imgSpace'), {
		left: 0,
		top: 0,
		opacity: 0.3
	});
	var sky = new fabric.Rect({
		left: 0,
		top: 0,
		width: width,
		height: height/1.3,
		opacity: 0.8
	});
	sky.setGradient('fill', {
		x1: 0,
		y1: -sky.height/2,
		x2: 0,
		y2: sky.height,
		colorStops: {
			0: '#072437',
			0.1: '#05232F',
			0.4: '#10476C',
			0.5: '#114D76',
			1: '#85BACD'
		}
	});
	var imgS3Back = new fabric.Image(getImg('imgS3Back'), {
		left: 100,
		top: 110,
		scaleX: 1.2,
		scaleY: 1.2
	});
	var imgS3Mid = new fabric.Image(getImg('imgS3Mid'), {
		left: 300,
		top: 160,
		scaleY: 1.1
	});
	var imgS2Mid = new fabric.Image(getImg('imgS2Mid'), {
		left: -50,
		top: 100
	});
	var imgS2Front = new fabric.Image(getImg('imgS2Front'), {
		left: 600,
		top: 50
	});
	var imgClouds = new fabric.Image(getImg('imgClouds'), {
		left: 400,
		top: 110
	});
	var imgS1Back = new fabric.Image(getImg('imgS1Back'), {
		left: 300,
		top: 180
	});
	var imgS1Mid = new fabric.Image(getImg('imgS1Mid'), {
		left: 500,
		top: 100
	});
	var imgS1Front = new fabric.Image(getImg('imgS1Front'), {
		left: -20,
		top: 100,
		scaleX: 1.3,
		scaleY: 1.3
	});
	canvas.add(imgSpace,sky,imgS3Back,imgS3Mid,imgS2Mid,imgS2Front,imgClouds,imgS1Back,imgS1Mid,imgS1Front);
	//--->end_drawing_layers<---

	//--->initialized_full_animation<---
	function animation(img, scaleVar, leftVar, topVar, durationRatio) {
			//return false;
			img.animate('scaleX', scaleVar, {
				onChange: canvas.renderAll.bind(canvas),
				duration: duration * durationRatio,
				easing: animationType
			});
			img.animate('scaleY', scaleVar, {
				onChange: reRender,
				duration: duration * durationRatio,
				easing: animationType
			});
			img.animate('left', leftVar, {
				onChange: reRender,
				duration: duration * durationRatio,
				easing: animationType
			});
			img.animate('top', topVar, {
				onChange: reRender,
				duration: duration * durationRatio,
				easing: animationType
			});
		};
		//--->end_initialized_full_animation<---

		//--->installation_full_animation<---
		function startFullAnim() {
			animation(imgS1Front, '+=8', '-=6500', '-=3100', 1);
			animation(imgS1Mid, '+=8', '-=2600', '-=1900', 1.66666666);
			animation(imgS1Back, '+=8', '-=5800', '-=2700', 2);
			animation(imgClouds, '+=9', '-=4500', '-=2400', 2.33333333);
			imgClouds.animate('opacity', 0, {
				onChange: reRender,
				duration: duration * 2,
				easing: animationType
			});
			animation(imgS2Front, '+=8', '-=2900', '-=3000', 2.5);
			animation(imgS2Mid, '+=8', '-=8600', '-=3900', 2.75);
			animation(imgS3Mid, '+=2', '-=1400', '-=900', 3.33333333);
			animation(imgS3Back, '+=1.5', '-=1150', '-=700', 3.33333333);
		};
		//--->end_installation_full_animation<---	

		// startFullAnim();
		
	});
})();