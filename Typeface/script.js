$(document).ready(function() {
	$("#r1").mouseover(function(){
		$("#r1 #r1s1").animate({
			"top": "9rem"
		}, 2000, "swing", "swing", "done");
		$("#r1 #r1s2").animate({
			"top": "-9rem"
		}, 2000, "swing", "swing", "done");
		$("#r1 #r1c1").animate({
			"left": "9rem"
		}, 2000, "swing", "swing", "done");
		$("#r1 #r1t1").animate({
			"left": "9rem"
		}, 2000, "swing", "swing", "done");
	});

	$("#r2").mouseover(function(){
		$(this).text("HI THERE")
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
		$("#r5s1").fadeOut(3000, "swing");
		$("#r5s2").fadeOut(1000, "swing");
		$("#r5c1").fadeOut(4000, "swing");
		$("#r5t1").fadeOut(2000, "swing");
	});

	$("#r6").mouseover(function(){
		$(this).empty();
	})

	$("#r7").mouseover(function(){
		$(this).after("<p>save the whales</p>");
	})

	$("#r8").mouseover(function(){
		$("#r8s1").toggle(3000, "swing");
		$("#r8s2").toggle(1000, "swing");
		$("#r8c1").toggle(4000, "swing");
		$("#r8t1").toggle(2000, "swing");
	})

	$("#r9").click(function(){
		$("#r9s1").css("background-color", "black");
		$("#r9s2").css("background-color", "blue");
		$("#r9c1").css("background-color", "orange");
		$("#r9t1").css("background-color", "green");
	})

	$("#r10").click(function(){
		$("#r10s1").slideUp(3000, "swing");
		$("#r10s2").slideUp(1000, "swing");
		$("#r10c1").slideUp(4000, "swing");
		$("#r10t1").slideUp(2000, "swing");
	})

	$("#r11s1").click(function(){
		$(this).animate({"border-radius":"50%"}, 500);
	})
	$("#r11s2").click(function(){
		$(this).animate({"border-radius":"50%"}, 500);
	})
	$("#r11t1").click(function(){
		$(this).animate({"border-radius":"50%"}, 500);
	})

	var t = true;
	$("#r12").click(function(){
		$("body").css("background-color","yellow");
	})	

	$("#r13").click(function(){
		$(this).slideToggle(2000, "swing");
	})	

	$("#r14").click(function(){
		alert("No not this one!");
	})	

	$("#r15").click(function(){
		$("#r15 .num").animate({"top":"2rem"}, 1000, "swing", function(){
			$("#r15 .num").animate({"right":"50rem"}, 300, "swing")
			$("#r15 .medCir").animate({"left":"150rem"},600,"swing") 
		})
	})	

	$("#r16").click(function(){
		$(this).animate({"width":"toggle"}, 4000)
	})	

	$("#r17").click(function(){
		$("body").animate({"font-family":"aktiv-grotesk"}, 1000)
	})	

	$("#r18").click(function(){
		$("#r18s1").animate({"width":"3000px"}, 1000, "swing");
		$("#r18s2").animate({"width":"1000px"}, 1000,"swing");
		$("#r18c1").animate({"width":"3000px"}, 4000, "swing");
		$("#r18t1").animate({"width":"5000px"}, 2000, "swing");
	})	

	$("#r19").click(function(){

		$("body").animate({"font-family":"aktiv-grotesk"}, 100)
	})	

	$("#r20").click(function(){

		$(".char").animate({"bottom":"50px"}, 1000, function(){
			$(".char").animate({"left":"50px"}, 1000, function(){
				$(".char").animate({"top":"50px"}, 1000, function(){
					$(".char").animate({"right":"50px"}, 1000)
				})
			})
		})
	})	

	$("#r21").click(function(){

		$(".medSqr").animate({"width":"5000%"}, 1000)
	})	

	$("#r22").click(function(){

		$(".medCir").animate({"left":"300px", "bottom":"300px"}, 1000, "swing")
	})

	$("#r23").click(function(){

		$(".medTri").css("z-index","5000")
	})	

	$("#r24").click(function(){

		$(".medSqr").fadeOut(3000, "swing")
	})	

	$("#r25").click(function(){

		$(".r2").css("background-image","url(heart.gif)")
	})	

	$("#r26").click(function(){

		$("span").animate({"font-size":"10rem"}, 2000, "swing")
	})	

	$("#r27").click(function(){
		$("#r27 .medCir").animate({"left":"3rem"}, 200, "swing", function(){
			$("#r28 .medCir").animate({"left":"3rem"}, 200, "swing", function(){
				$("#r29 .medCir").animate({"left":"3rem"}, 200, "swing", function(){
					$("#r30 .medCir").animate({"left":"3rem"}, 200, "swing", function(){
						$("#r31 .medCir").animate({"left":"3rem"}, 200, "swing")
					})
				})
			})
		})
	})

	$("#r28").click(function(){

		$(this).animate({"position":"absolute", "top":"100px", "right":"100px"}, 2000, "swing", function(){
			$("#r29").animate({"position":"absolute", "top":"100px", "right":"100px"}, 2000, "swing", function(){
				$("#r30").animate({"position":"absolute", "top":"100px", "right":"100px"}, 2000, "swing", function(){
					$("#r31").animate({"position":"absolute", "top":"100px", "right":"100px"}, 2000, "swing")
				})	
			})
		})
	})		

	$("#r29").click(function(){
		$("div").animate({"position":"absolute", "right":"0px", "bottom":"0px"}, 1000, "swing")
	})	

	$("#r30").click(function(){
		$("#r30 .medTri").animate({"borderBottomWidth":"20rem"}, 1000, "swing", function(){$(this).fadeOut(1000)})
		$("#r31 .medTri").animate({"borderBottomWidth":"20rem"}, 1000, "swing", function(){$(this).fadeOut(1000)})
		$("#r32 .medTri").animate({"borderBottomWidth":"20rem"}, 1000, "swing", function(){$(this).fadeOut(1000)})
	})	

	$("#r31").click(function(){
		location.reload();
	})	

	$("#r32").click(function(){
		window.open("http://hanahan.works/Courses/F18_FormAndInteraction/#Assignments")
	})	

	$("#r33").click(function(){
		window.print();
	})	

	$("#r34").click(function(){
		window.close();
	})	

	$("#r35").click(function(){
		window.confirm("Are you sure?");
	})	

	$("#r36").click(function(){
		$("span").replaceWith("<h2>WHY</h2>")
	})	

	// css effects to 40

	$("#r41").click(function(){
		$(this).fadeOut(250).fadeIn(250).fadeOut(250).fadeIn(250)
	}) 

	
});