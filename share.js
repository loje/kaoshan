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
			$(".page-five").removeAttr("style");
		};
	},250);
});