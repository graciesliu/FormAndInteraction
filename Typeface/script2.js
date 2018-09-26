$(document).ready(function() {


	var a = true
	$("#A").mouseover(function(){
		if (a == true){
			$(".medSqr").animate({"width":"1000%"}, 100000)
			a = false
		} else{
			$(".medSqr").animate({"width":"3rem"}, 100000)
			a = true
		}
	})	

	var b = true
	$("#B").mouseover(function(){
		if (b==true){
			$(".medCir").animate({"left":"1000px", "bottom":"1000px"}, 100000, "swing")
			b = false
		}else{
			$(".medCir").animate({"right":"1000px", "top":"1000px"}, 100000, "swing")
			b=true
		}
	})

	var c = true
	$("#C").mouseover(function(){
		if (c==true)
		{	$(".smlCir").animate({"right":"1000px", "top":"1000px"}, 50000, "swing")
			$(this).animate({"position":"absolute", "top":"150px", "left":"150px"}, 30000)
			c=false
		}else{
			(".smlCir").animate({"left":"1000px", "bottom":"1000px"}, 50000, "swing")
			c=true
		}
	})

	$("#D").mouseover(function(){
		$(".medTri").toggle(3000, "swing");
		$(".lrgTri").toggle(1000, "swing");
		$(".lrgDwnTri").toggle(4000, "swing");
		$(".medDwnTri").toggle(3000, "swing");
	})

	var e = true 
	$("#E").mouseover(function(){
		if (e==true){
			$(this).animate({"top":"150px", "left":"200px"}, 30000, "swing")
			$("body").css("background-color", "#B3B08B");
		}else{
			$(this).animate({"bottom":"150px", "right":"200px"}, 30000, "swing")
		}
	})

	$("#F").mouseover(function(){
		$(".medTri").stop()
		$(".medTri").animate({"right":"1000px", "top":"1000px"}, 50000, "swing")
		$(this).animate({"top":"150px"}, 30000, "swing")
	})
	$("#G").mouseover(function(){
		$(".smlSqr").animate({"height":"750px", "bottom":"200px"}, 100000, "swing")
		$(this).animate({"left":"150px"}, 30000, "swing")
	})
	$("#I").mouseover(function(){
		$(".lrgCir").stop()
		$(".lrgCir").animate({"left":"500px"}, 100000, "swing",);
	})
	$("#J").mouseover(function(){

		$("body").css("background-color", "#577343");
	})
	$("#K").mouseover(function(){

		$(".lrgCir").stop()
		$(".lrgCir").animate({"right":"500px"}, 100000, "swing",);
	})
	$("#L").mouseover(function(){

		$(".medSqr").stop();
	})
	$("#M").mouseover(function(){

		$(".smlCir").stop();
	})
	$("#N").mouseover(function(){

		$(".medCir").stop();
	})
	$("#O").mouseover(function(){
		$(".medDwnTri").animate({"bottom":"500px", "right":"200px"}, 30000, "swing")
	})
	$("#P").mouseover(function(){
		$(".s2").animate({"bottom":"100px", "right":"750px"}, 30000, "swing")
	})
	$("#Q").mouseover(function(){
		$(".").animate({"bottom":"100px", "right":"750px"}, 30000, "swing")
	})
	$("#R").mouseover(function(){

		$(".medSqr").toggle(500000);
	})
	$("#S").mouseover(function(){
		$(".char").stop()
		$(".char").animate({"bottom":"50px", "right":"50px"}, 30000, )
	})
	$("#T").mouseover(function(){
		$(".medTri").animate({"bottom":"1000px", "left":"750px"}, 30000, "swing")
	})
	$("#U").mouseover(function(){
		$(".char").stop()
		$(".char").animate({"top":"50px", "left":"50px"}, 30000, )
	})
	// $("#V").mouseover(function(){

	// 	$(".lrgCir").slideToggle(5000);
	// })
	// $("#W").mouseover(function(){

	// 	$(".lrgCir").slideToggle(5000);
	// })
	// $("#X").mouseover(function(){

	// 	$(".lrgCir").slideToggle(5000);
	// })
	// $("#Y").mouseover(function(){

	// 	$(".lrgCir").slideToggle(5000);
	// })
	// $("#Z").mouseover(function(){

	// 	$(".lrgCir").slideToggle(5000);
	// })
	// $("#n1").mouseover(function(){

	// 	$(".lrgCir").slideToggle(5000);
	// })
	// $("#n2").mouseover(function(){

	// 	$(".lrgCir").slideToggle(5000);
	// })
	// $("#3").mouseover(function(){

	// 	$(".lrgCir").slideToggle(5000);
	// })
	// $("#n4").mouseover(function(){

	// 	$(".lrgCir").slideToggle(5000);
	// })
	// $("#n5").mouseover(function(){

	// 	$(".lrgCir").slideToggle(5000);
	// })
	// $("#n6").mouseover(function(){

	// 	$(".lrgCir").slideToggle(5000);
	// })
	// $("#n7").mouseover(function(){

	// 	$(".lrgCir").slideToggle(5000);
	// })
	// $("#n8").mouseover(function(){

	// 	$(".lrgCir").slideToggle(5000);
	// })
	$("#n9").mouseover(function(){

		$("body").css("background-color", "#F4EDCD");
	}) 
	// $("#n0").mouseover(function(){

	// 	$(".lrgCir").slideToggle(5000);
	// })

})