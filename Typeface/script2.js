$(document).ready(function() {
	$("#A").mouseover(function(){

		$(".medSqr").animate({"width":"3000%"}, 100000)
	})	
	$("#B").mouseover(function(){

		$(".medCir").animate({"left":"1000px", "bottom":"3000px"}, 100000, "swing")
	})
	$("#C").mouseover(function(){

		$(".smlCir").animate({"right":"1000px", "top":"3000px"}, 100000, "swing")
	})
	$("#D").mouseover(function(){

		$(".medTri").toggle(3000, "swing");
		$(".lrgTri").toggle(1000, "swing");
		$(".lrgDwnTri").toggle(4000, "swing");
		$(".medDwnTri").toggle(3000, "swing");
	})
	$("#E").mouseover(function(){

		$("body").css("background-color", "#B3B08B");
	})
	$("#F").mouseover(function(){

		$("body").css("background-color", "#F4EDCD");
	})
	$("#G").mouseover(function(){

		$("body").css("background-color", "#577343");
	})
	$("#H").mouseover(function(){

		$(".lrgCir").toggleSlide(5000);
	})
})