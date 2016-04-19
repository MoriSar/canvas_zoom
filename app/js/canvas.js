'use strict';
(function() {

	$(document).ready(function() {

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
		var durationFullAnim = 3000;
		var depth = 5000;
		$('.depth').height(depth);
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
			left: -150,
			top: -100,
			scaleX: 1.5,
			scaleY: 1.5
		});
		var imgS3Mid = new fabric.Image(getImg('imgS3Mid'), {
			left: -80,
			top: -100,
			scaleX: 1.3,
			scaleY: 1.3
		});
		var imgS2Mid = new fabric.Image(getImg('imgS2Mid'), {
			left: -50,
			top: 50
		});
		var imgS2Front = new fabric.Image(getImg('imgS2Front'), {
			left: 600,
			top: 0
		});
		var imgClouds = new fabric.Image(getImg('imgClouds'), {
			left: 0,
			top: -50,
			scaleX: 2,
			scaleY: 2
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

			$(window).scroll(function() {
				var top = $(document).scrollTop();
				imgS1Front.set({
					left: -20 - 2.35 * top,
					top: 100 - 0.5 * top,
					scaleX: 1.3 + 0.00276666 * top,
					scaleY: 1.3 + 0.00276666 * top
				});
				imgS1Mid.set({
					left: 500 - 1.5 * (top / 1.5),
					top: 100 - 0.8 * (top / 1.5),
					scaleX: 1 + (top / 1.5) * 0.00276666,
					scaleY: 1 + (top / 1.5) * 0.00276666
				});
				imgS1Back.set({
					left: 300 - 2.1 * (top / 2.2),
					top: 180 - 0.7 * (top / 2.2),
					scaleX: 1 + (top / 2.2) * 0.00276666,
					scaleY: 1 + (top / 2.2) * 0.00276666
				});
				imgClouds.set({
					left: 0 - 1.63 * (top / 3),
					top: -50 - 0.83 * (top / 3),
					scaleX: 2 + (top / 3) * 0.003,
					scaleY: 2 + (top / 3) * 0.003,
					opacity: 1 - (top / depth)
				});
				imgS2Front.set({
					left: 600 - 1.1 * (top / 3.5),
					top: 0 - 1.1 * (top / 3.5),
					scaleX: 1 + (top / 3.5) * 0.00276666,
					scaleY: 1 + (top / 3.5) * 0.00276666
				});
				imgS2Mid.set({
					left: -50 - 3.2 * (top / 4),
					top: 50 - 1.1 * (top / 4),
					scaleX: 1 + (top / 4) * 0.00276666,
					scaleY: 1 + (top / 4) * 0.00276666
				});
				imgS3Mid.set({
					left: -80 - 2.0 * (top / 6),
					top: -100 - 1.15 * (top / 6),
					scaleX: 1.3 + (top / 6) * 0.0027,
					scaleY: 1.3 + (top / 6) * 0.0027
				});
				imgS3Back.set({
					left: -150 - 0.8 * (top / 6),
					top: -100 - 0.5 * (top / 6),
					scaleX: 1.5 + (top / 6) * 0.001056666666,
					scaleY: 1.5 + (top / 6) * 0.001056666666
				});
				canvas.renderAll();
			});
		
	});
})();