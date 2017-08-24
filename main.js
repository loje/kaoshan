$(document).ready(function(){
	$(".page").height($(window).height());
	$(".loaingpage .loaingpage-td .loaingpage-logo").height($(window).height()*0.5);
	$(window).resize(function(){
		$(".page").height($(window).height());
	});

	var h = 100;
	var ah = 0;
	var loading = setInterval(function(){
		if(h != 0){
			h = h - 10;
			ah = ah + 10;
			$(".loaingpage .loaingpage-td .loaingpage-logo .logo .black").attr("style","height:" + h + "%;");
			$(".loaingpage .loaingpage-td span").text(ah + "%");
		}else{
			clearInterval(loading);
			$(".page-one").removeAttr("style");
			var sanren = setTimeout(function(){
				$(".page-one .pageone-bg .sanren").removeAttr("style");
				clearTimeout(sanren);
			},1000);
			var yi = setTimeout(function(){
				$(".page-one .pageone-bg .yi").removeAttr("style");
				clearTimeout(yi);
			},2000);

			var pagetwo = setTimeout(function(){
				$(".page-two").removeAttr("style");
				clearTimeout(pagetwo);
			},3000);
		};
	},250);

	$(".yesbtn").click(function(){
		$(".page-three-one").removeAttr("style");
		var threetalkone = setTimeout(function(){
			$(".pagethreeone-bg .talk-one").removeAttr("style");
			clearTimeout(threetalkone);
		},1000);
		var threetalktwo = setTimeout(function(){
			$(".pagethreeone-bg .talk-two").removeAttr("style");
			clearTimeout(threetalktwo);
		},2000);
		var threeheroshadow = setTimeout(function(){
			$(".pagethreeone-bg .heroshadow").removeAttr("style");
			clearTimeout(threeheroshadow);
		},3000);
		var threeherohand = setTimeout(function(){
			$(".pagethreeone-bg .herohand").removeAttr("style");
			clearTimeout(threeherohand);
		},3500);
		var threetalkthree = setTimeout(function(){
			$(".pagethreeone-bg .talk-three").removeAttr("style");
			clearTimeout(threetalkthree);
		},4500);

		var pagefour = setTimeout(function(){
			$(".page-four").removeAttr("style");
			clearTimeout(pagefour);
		},5500);

		var fourtalkone = setTimeout(function(){
			$(".pagefour-bg .talk-one").removeAttr("style");
			clearTimeout(fourtalkone);
		},6500);

		var fourtalktwo = setTimeout(function(){
			$(".pagefour-bg .talk-two").removeAttr("style");
			clearTimeout(fourtalktwo);
		},7500);
	});

	$(".nobtn").click(function(){
		$(".page-three-two").removeAttr("style");
		var threetalkone = setTimeout(function(){
			$(".pagethreetwo-bg .talk-one").removeAttr("style");
			clearTimeout(threetalkone);
		},1000);
		var threetalktwo = setTimeout(function(){
			$(".pagethreetwo-bg .talk-two").removeAttr("style");
			clearTimeout(threetalktwo);
		},2000);
		var threeheroshadow = setTimeout(function(){
			$(".pagethreetwo-bg .heroshadow").removeAttr("style");
			clearTimeout(threeheroshadow);
		},3000);
		var threeherohand = setTimeout(function(){
			$(".pagethreetwo-bg .herohand").removeAttr("style");
			clearTimeout(threeherohand);
		},3500);
		var threetalkthree = setTimeout(function(){
			$(".pagethreetwo-bg .talk-three").removeAttr("style");
			clearTimeout(threetalkthree);
		},4500);

		var pagefour = setTimeout(function(){
			$(".page-four").removeAttr("style");
			clearTimeout(pagefour);
		},5500);

		var fourtalkone = setTimeout(function(){
			$(".pagefour-bg .talk-one").removeAttr("style");
			clearTimeout(fourtalkone);
		},6500);

		var fourtalktwo = setTimeout(function(){
			$(".pagefour-bg .talk-two").removeAttr("style");
			clearTimeout(fourtalktwo);
		},7500);
	});

	
	$(".page-four .pagefour-bg").click(function(){
		$(".page-four").attr("style","display:none;");
		$(".page-five").removeAttr("style");
		var p = Math.floor(Math.random()*6+1);
		shu(p);
	});

	$(".changekaoshan").click(function(){
		var p = Math.floor(Math.random()*6+1);
		shu(p);
	});

	function shu(p){
		if(p == 1){
			$(".saveperson").val("洪一哥");
			$(".personage").attr("style","background-image: url(images/yihong.png);");
		}else if(p == 2){
			$(".saveperson").val("杂草君");
			$(".personage").attr("style","background-image: url(images/);");
		}else if(p == 3){
			$(".saveperson").val("饭堂大妈");
			$(".personage").attr("style","background-image: url(images/);");
		}else if(p == 4){
			$(".saveperson").val("保安队长");
			$(".personage").attr("style","background-image: url(images/);");
		}else if(p == 5){
			$(".saveperson").val("黑的师傅");
			$(".personage").attr("style","background-image: url(images/);");
		}else if(p == 6){
			$(".saveperson").val("快递小哥");
			$(".personage").attr("style","background-image: url(images/);");
		}
		alert($(".saveperson").val());
	};

	$(".sharekaoshan").click(function(){
		$(".kaoshan-share").removeAttr("style");
	});

	$(".close-kaoshan").click(function(){
		$(".kaoshan-share").attr("style","display:none;");
	});
});