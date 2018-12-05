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

	var t12 = true;
	$("#r12").click(function(){
		if(t12 ==true){
			$("body").css("background-color","yellow");
			t12=false;
		}
		else{
			$("body").css("background-color","transparent");
			t12=true;
		}
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
		$("body").css("font-family","Fruktur")
	})	

	$("#r18").click(function(){
		$("#r18s1").animate({"width":"3000px"}, 1000, "swing");
		$("#r18s2").animate({"width":"1000px"}, 1000,"swing");
		$("#r18c1").animate({"width":"3000px"}, 4000, "swing");
		$("#r18t1").animate({"width":"5000px"}, 2000, "swing");
	})	

	var t19 = false
	$("#r19").click(function(){
		if(t19==false){
			$("body").css("font-family","'Libre Barcode 39 Extended'")
			$("body").css("font-size","4rem")
			$("body").css("color","orangered")
			t19 = true;
		}
		else{
			$("body").prop("all","unset")
		}
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

	var t = true;
	$("#r42").click(function(){
		if (t==true){
			$("#r43").hide(1000)
			t = false
		}else{
			$("#r43").show(1000)
			t = true
		}
	})

	var c = 0;
	$("#r43").click(function(){
		c++;
		alert("Ouchies! You've poked me " + c + " times.");
	})

	var tt = false;
	$("#r44").click(function(){
		if (tt == false){
			$(".char").addClass("mono")
			tt = true;
		}
		else{
			$(".char").removeClass("mono");
			tt = false;
		}
	})

	var ttt = false;
	$("#r45").click(function(){
		if (ttt == false){
			$(".medCir").addClass("blr")
			ttt = true;
		}
		else{
			$(".medCir").removeClass("blr");
			ttt = false;
		}
	})

	var v = false;
	$("#r46").click(function(){
		if (v == false){
			$(".char").addClass("hue");
			v = true;
		}
		else{
			$(".char").removeClass("hue");
			v = false;
		}
	})

	$("#r47").click(function(){
	for (var i = 0; i<80; i++){
		if(i%2==0){
			$("#r"+i+" .num").append("<div class='num'>"+i+"</div>");
		}
	} 
	})

	$("#r48").click(function(){
	for (var i = 1; i<=80; i++){
		if(i%2==1){
			$("#r"+i+" .num").append("<span class='num'>"+i+"</span>");
		}
	} 
	})

	var t49=true;
	$("#r49").click(function(){
		if(t49==true){
			$(".char").css("background-color","mediumorchid")
			$(".medCir").css("background-color","lime")
			t49 = false;
		}
		else{
			$(".char").css("background-color","transparent")
			$(".medCir").css("background-color","black")
			t49 = true;
		}
		
	})

	$("#r50").click(function(){
		for(var i = 1; i <=80; i++){
			$("#r"+i).css("position","relative");
			if(i%3==0){
				$("#r"+i).fadeOut(400).fadeIn(400).fadeOut(400).fadeIn(400).fadeOut(400).fadeIn(400).fadeOut(400).fadeIn(400)
			}else if(i%3==1){
				$("#r"+i).fadeOut(800).fadeIn(800).fadeOut(800).fadeIn(800).fadeOut(800).fadeIn(800).fadeOut(800).fadeIn(800)
			}else if(i%3==2){
				$("#r"+i).fadeOut(1200).fadeIn(1200).fadeOut(1200).fadeIn(1200).fadeOut(1200).fadeIn(1200).fadeOut(1200).fadeIn(1200)
			}
		}
	})

	var t51 = false
	$("#r51").click(function(){
		if(t51==false){
			$(".R").each(function(){
				$(this).addClass("spin");
				t51=true;
			})
		}
		else{
			$(".R").each(function(){
				$(this).removeClass("spin");
				t51=false;
			})
		}
		
	})
	
	$("#r52").click(function(){
		$("body").addClass("bg-change-slow");
	})

	var t53=true
	$("#r53").click(function(){
		if(t53=true){
			for(var i = 1; i <=80; i++){
				if(i%8==7){
					$("#r"+i+" .r2").delay(3500).animate({"left":"200px"},2000,"swing")
				}
				if(i%8==6){
					$("#r"+i+" .r2").delay(3000).animate({"left":"200px"},2000,"swing")
				}
				if(i%8==5){
					$("#r"+i+" .r2").delay(2500).animate({"left":"200px"},2000,"swing")
				}
				if(i%8==4){
					$("#r"+i+" .r2").delay(2000).animate({"left":"200px"},2000,"swing")
				}
				if(i%8==3){
					$("#r"+i+" .r2").delay(1500).animate({"left":"200px"},2000,"swing")
				}
				if(i%8==2){
					$("#r"+i+" .r2").delay(500).animate({"left":"200px"},2000,"swing")
				}
				if(i%8==1){
					$("#r"+i+" .r2").animate({"left":"200px"},2000,"swing")
				}
				if(i%8==0){
					$("#r"+i+" .r2").delay(4000).animate({"left":"200px"},2000,"swing")
				}
				t53=false;
			}
		}else{
			for(var i = 1; i <=80; i++){
				if(i%8==7){
					$("#r"+i+" .r2").delay(3500).animate({"right":"200px"},2000,"swing")
				}
				if(i%8==6){
					$("#r"+i+" .r2").delay(3000).animate({"right":"200px"},2000,"swing")
				}
				if(i%8==5){
					$("#r"+i+" .r2").delay(2500).animate({"right":"200px"},2000,"swing")
				}
				if(i%8==4){
					$("#r"+i+" .r2").delay(2000).animate({"right":"200px"},2000,"swing")
				}
				if(i%8==3){
					$("#r"+i+" .r2").delay(1500).animate({"right":"200px"},2000,"swing")
				}
				if(i%8==2){
					$("#r"+i+" .r2").delay(500).animate({"right":"200px"},2000,"swing")
				}
				if(i%8==1){
					$("#r"+i+" .r2").animate({"right":"200px"},2000,"swing")
				}
				if(i%8==0){
					$("#r"+i+" .r2").delay(4000).animate({"right":"200px"},2000,"swing")
				}
			}
			t53=true;
		}
	})

	
})
