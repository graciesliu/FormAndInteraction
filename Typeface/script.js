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
			"opacity": "0%"
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
});