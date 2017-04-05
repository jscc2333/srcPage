// 注册功能开始
$(function(){
	$regist = $("#registForm");
	$("#regist").on('click',function(){	
		$regist.show().css({
			"left":($(window).width()-$regist.width())/2,
			"top":($(window).height()-$regist.height())/2
		});
		return false;
	});
});	

// 注册功能结束
// 登录功能开始
$(function(){
	$login = $("#loginForm");
	$("#login").on('click',function(){
		$login.show().css({
			"left":($(window).width()-$login.width())/2,
			"top":($(window).height()-$login.height())/2
		});
		return false;
	});
});
// 登录功能结束
$(function(){
	$("form .cancel").on('click',function(){
		if($("#registForm").css("display")!= "none"){
			$("#registForm").hide();
		}
		if($("#loginForm").css("display")!= "none"){
			$("#loginForm").hide();
		}
	});
})