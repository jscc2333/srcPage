
// 下拉菜单开始
$(function(){
	$("#direction ul li").hover(function(){
		$(this).find('li').fadeIn('200');
	},function(){
		$(this).find('li').fadeOut('400');
	});
});
// 下拉菜单结束

// banner滚动效果开始 	
$(function(){
	var time = null;
	var img = $(".banner img");
	img.hover(function(){
		showDescription($(this));
		if(time){
			clearInterval(time);
		}
	},function(){
		$(".description").hide();
		time = setInterval(function(){
			for(var i = 0; i < img.length;i++ ){
				// console.log(img.eq(i).position().left);
				
				// 获取并修改当前图片的位置
				var left = img.eq(i).position().left;
				img.eq(i).css("left",left-508+"px");
				
				// 当图片消失，就将图片放到最后一张
				if(left < -300){
					img.eq(i).css("left",1781+"px");
				}
			}
		},3000);
	}).eq(0).mouseleave();//触发第一张图的鼠标离开事件

});
// 显示当前图对应描述
function showDescription(img){
	if(img.position().left < 0){
		$(".description").css({
							"left":img.position().left+254+"px",
							"top":0+"px"
						});
	}else{
		$(".description").css({
							"left":img.position().left,
							"top":0+"px"
						});
	}
	img.siblings(".description").show();
}
// banner滚动效果结束
