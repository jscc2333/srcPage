
// 下拉菜单开始
$(function(){
	$("#direction ul li").hover(function(){
		$(this).find('li').fadeIn('200');
	},function(){
		$(this).find('li').fadeOut('400');
	});
});
// 下拉菜单结束
