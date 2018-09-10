$(document).ready(function() {
	$("#r1").mouseover(function(){
		$("#r1 #r1s1").animate({
			"top": "9rem"
		}, 2000, "swing", "done");
		$("#r1 #r1s2").animate({
			"top": "-9rem"
		}, 2000, "swing", "done");
		$("#r1 #r1c1").animate({
			"left": "9rem"
		}, 2000, "swing", "done");
		$("#r1 #r1t1").animate({
			"left": "9rem"
		}, 2000, "swing", "done");
	});

	$("#r2").mouseover(function(){
		$("#r2 #r2s1").animate({
			opacity: "0%"
		}, 1000, "swing", "done");
		$("#r2 #r2s2").animate({
			"opacity": "75%"
		},1000, "swing", "done");
		$("#r2 #r2c1").animate({
			"opacity": "50%"
		}, 1000, "swing", "done");
		$("#r2 #r2t1").animate({
			"opacity": "25%"
		}, 1000, "swing", "done");
	});

	$("#r3").mouseover(function(){
		$("#r3s1").animate({
			width: "5rem"
		}, 1000, "swing", "done");
		$("#r3s2").animate({
			width: "5rem"
		},1000, "swing", "done");
		$("#r3c1").animate({
			height: "5rem"
		}, 1000, "swing", "done");
		$("#r3t1").animate({
			height: "5rem"
		}, 1000, "swing", "done");
	});

	$("#r4").mouseover(function(){
		$("#r4s1").animate(
			{left: "+=10px"},10);
		$("#r4s2").animate(
			{top: "+=10px"},10);
		$("#r4c1").animate(
			{right: "+=10px"},10);
		$("#r4t1").animate(
			{bottom: "+=10px"},10);
	});

	$("#r5").mouseover(function(){
		$("#r5s1").fadeOut(3000);
		$("#r5s2").fadeOut(1000);
		$("#r5c1").fadeOut(4000);
		$("#r5t1").fadeOut(2000);
	});
});