// 注册功能开始
$(function(){
	// 弹出注册框
	var $regist = $("#registForm");
	$("#regist").on('click',function(){	
		showMask();
		$regist.show().css({
			"left":($(window).width()-$regist.width())/2,
			"top":($(window).height()-$regist.height())/2
		});
		return false;
	});

	// 验证2次密码是否相同
	$pw =$regist.find(".password");
	$checkPw = $regist.find(".checkPassword")
	.on('blur',function(){
		if($pw.val() != $checkPw.val()){
			$checkPw.addClass('pwWrong');
			$("<p class='pwAlert'>"+"两次输入的密码不一致"+"</p>").insertAfter($checkPw);
		}else{
			if($(".pwWrong")){
				$checkPw.removeClass('pwWrong');
			}
		}
	}).on('focus',function(){
		if($(".pwAlert")){
			$(".pwAlert").hide();
		}
	});

	// 向后台发ajax请求
	var $submit = $regist.find(".submitReg");
	$submit.on('click',function(){
		$.ajax({
			url: '/path/to/file',
			type: 'get',
			dataType: 'json',
			data: {"email": $("#registForm .email").val(),
					"password":$("#registForm .password").val()
						},
		})
		.done(function() {
			console.log("success");
		})
		.fail(function() {
			console.log("error");
		})
		.always(function() {
			console.log("complete");
		});
		
	});
});	

// 注册功能结束
// 登录功能开始
$(function(){
	var $login = $("#loginForm");
	$("#login").on('click',function(){
		showMask();
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
		hideMask();
	});
});
function showMask(){
	var $mask = $("#mask");
	$mask.css({
		"width":$(document).width(),
		"height":$(document).height()
	}).show();
}
function hideMask(){
	var $mask = $("#mask");
	$mask.hide();
}
// 历史功能开始
$(function(){
	var $history =$("#history");
	$history.on('click',function(){
		
	});
});
// 历史功能结束

