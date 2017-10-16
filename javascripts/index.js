$(function(){
	var box = document.getElementById("menu").getElementsByClassName("box_1")[0];
	var $toggle = $("#menu .box_2 .toggle");

	var mySwiper = new Swiper ('.swiper-container', {
		speed:800,
		mousewheelControl:true,//滚轮控制
		simulateTouch:false,//鼠标点击、拖动
		direction:'vertical',
		pagination:".swiper-pagination",
		paginationClickable:true,
		onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
			swiperAnimateCache(swiper); //隐藏动画元素 
			swiperAnimate(swiper); //初始化完成开始动画
		}, 
		onSlideChangeEnd: function(swiper){ 
			swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
			
		},
		onTransitionStart:function(swiper){//切换xx执行该函数
			console.log("切换结束", mySwiper.activeIndex);
			if(mySwiper.activeIndex == 0){
				box.style.transition = "normal";
				box.style.transform = "translateX(0px)";
				cd();	
			}else{
				box.style.transition = "1s";
				// box.style.transform = "translateX(1142px)";
				if($toggle.find("span").eq(0).hasClass("tg")){
					box.style.transform = "translateX(1142px)";
				}
			}
		}
	})
	if(mySwiper.activeIndex==0){
		box.style.display = "block";
	}else{
		box.style.display = "none";
	}
	$toggle.click(function(){
		if($toggle.find("p").css("display") != "none"){
			box.style.transition = "1s";
			box.style.transform = "translateX(0px)";
			cdx();
		}else{
			box.style.transition = "1s";
			box.style.transform = "translateX(1142px)";
			cd();
		}
	});
	function cd(){
		$toggle.find("p").css("display", "block")
		$toggle.find("span").eq(0).removeClass('tgx').addClass('tg');
		$toggle.find("span").eq(1).removeClass('bgx').addClass('bg');
	}
	function cdx(){
		$toggle.find("p").css("display", "none")
		$toggle.find("span").eq(0).removeClass('tg').addClass('tgx');
		$toggle.find("span").eq(1).removeClass('bg').addClass('bgx');
	}
	$("#m_menu .m_caidan").click(function(){ //点击菜单键
	
		if($("#m_menu .m_cds").css("display")=="none"){
			$("#m_menu .m_caidan").css("backgroundImage","url(images/m_2.png)")
		}else{
			$("#m_menu .m_caidan").css("backgroundImage","url(images/m_1.png)")
		}
		$("#m_menu .m_cds").fadeToggle("slow","linear");
		console.log("点击了菜单")
	})

})