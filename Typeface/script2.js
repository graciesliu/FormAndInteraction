$(document).ready(function() {


	var a = true;
	$("#A").click(function(){
		if (a == true){
			$(".medSqr").animate({"width":"100%"}, 1000)
			a = false;
		} else{
			$(".medSqr").animate({"width":"3rem"}, 1000)
			a = true;
		}
	})	

	var b = true;
	$("#B").click(function(){
		if (b==true){
			$(".medCir").animate({"left":"100px", "top":"100px"}, 1000, "swing")
			b = false;
		}else{
			$(".medCir").animate({"left":"-100px", "top":"-100px"}, 1000, "swing")
			b=true;
		}
	})

	var c = true;
	$("#C").click(function(){
		if (c==true)
		{	$(".smlCir").animate({"left":"100px", "top":"100px"}, 5000, "swing")
			// $(this).animate({"position":"absolute", "top":"150px", "left":"150px"}, 3000)
			c=false;
		}else{
			(".smlCir").animate({"left":"-100px", "top":"-100px"}, 5000, "swing")
			c=true;
		}
	})

	$("#D").click(function(){
		$(".medTri").toggle(300, "swing");
		$(".lrgTri").toggle(100, "swing");
		$(".lrgDwnTri").toggle(400, "swing");
		$(".medDwnTri").toggle(300, "swing");
	})

	var e = true 
	$("#E").click(function(){
		if (e==true){
			// $(this).animate({"top":"150px", "left":"200px"}, 3000, "swing")
			$("body").css("background-color", "#B3B08B");
		}else{
			// $(this).animate({"bottom":"150px", "right":"200px"}, 3000, "swing")
		}
	})

	$("#F").click(function(){
		$(".medTri").stop()
		$(".medTri").animate({"right":"100px", "top":"100px"}, 5000, "swing")
		// $(this).animate({"top":"150px"}, 3000, "swing")
	})
	$("#G").click(function(){
		$(".smlSqr").animate({"height":"750px", "bottom":"200px"}, 10000, "swing")
		// $(this).animate({"left":"150px"}, 3000, "swing")
	})
	$("#H").click(function(){
		$(".lrgCir").stop()
		$(".lrgCir").animate({"left":"500px"}, 10000, "swing",);
	})
	$("#I").click(function(){
		$(".lrgCir").stop()
		$(".lrgCir").animate({"left":"500px"}, 10000, "swing",);
	})
	$("#J").click(function(){
		$("body").css("background-color", "#577343");
	})
	$("#K").click(function(){
		$(".lrgCir").stop()
		$(".lrgCir").animate({"right":"500px"}, 10000, "swing",);
	})
	$("#L").click(function(){
		$(".medSqr").stop();
	})
	$("#M").click(function(){
		$(".smlCir").stop();
	})
	$("#N").click(function(){
		$(".medCir").stop();
	})
	$("#O").click(function(){
		$(".medDwnTri").animate({"bottom":"500px", "right":"200px"}, 3000, "swing")
	})
	$("#P").click(function(){
		$(".s2").animate({"bottom":"100px", "right":"750px"}, 3000, "swing")
	})
	$("#Q").click(function(){
		$(".").animate({"bottom":"100px", "right":"750px"}, 3000, "swing")
	})
	$("#R").click(function(){

		$(".medSqr").toggle(50000);
	})
	$("#S").click(function(){
		$(".char").stop()
		$(".char").animate({"bottom":"50px", "right":"50px"}, 3000, )
	})
	$("#T").click(function(){
		$(".medTri").animate({"bottom":"100px", "left":"750px"}, 3000, "swing")
	})
	$("#U").click(function(){
		$(".char").stop()
		$(".char").animate({"top":"50px", "left":"50px"}, 3000, )
	})
	// $("#V").click(function(){

	// 	$(".lrgCir").slideToggle(500);
	// })
	// $("#W").click(function(){

	// 	$(".lrgCir").slideToggle(500);
	// })
	// $("#X").click(function(){

	// 	$(".lrgCir").slideToggle(500);
	// })
	// $("#Y").click(function(){

	// 	$(".lrgCir").slideToggle(500);
	// })
	// $("#Z").click(function(){

	// 	$(".lrgCir").slideToggle(500);
	// })
	// $("#n1").click(function(){

	// 	$(".lrgCir").slideToggle(500);
	// })
	// $("#n2").click(function(){

	// 	$(".lrgCir").slideToggle(500);
	// })
	// $("#3").click(function(){

	// 	$(".lrgCir").slideToggle(500);
	// })
	// $("#n4").click(function(){

	// 	$(".lrgCir").slideToggle(500);
	// })
	// $("#n5").click(function(){

	// 	$(".lrgCir").slideToggle(500);
	// })
	// $("#n6").click(function(){

	// 	$(".lrgCir").slideToggle(500);
	// })
	// $("#n7").click(function(){

	// 	$(".lrgCir").slideToggle(500);
	// })
	// $("#n8").click(function(){

	// 	$(".lrgCir").slideToggle(500);
	// })
	$("#n9").click(function(){

		$("body").css("background-color", "#F4EDCD");
	}) 
	// $("#n0").click(function(){

	// 	$(".lrgCir").slideToggle(500);
	// })

})