$(function(){
	var nav = document.getElementById("menu").getElementsByClassName("box_1")[0];
	var caidan = document.getElementById("menu").getElementsByClassName("box_2")[0];
	$(nav).css({
		"transition":"1s", 
		"transform":"translateX(1141px)",
		"display":"block"
	});
	$(caidan).click(function(){
		if($(nav).css("transform")=="matrix(1, 0, 0, 1, 1141, 0)"){
			$(caidan).css("z-index","1000");
			$(caidan).find("p").css("display", "none").next().attr("class","tgx").next().attr("class","bgx");
			$(nav).css("transform","translateX(0px)");
		}else{
			$(nav).css("transform","translateX(1141px)");
			$(caidan).find("p").css("display", "block").next().attr("class","tg").next().attr("class","bg");
		}
	})
	$("#m_menu .m_caidan").click(function(){ //点击move菜单键
		if($("#m_menu .m_cds").css("display")=="none"){
			$("#m_menu .m_caidan").css("backgroundImage","url(images/m_2.png)")
		}else{
			$("#m_menu .m_caidan").css("backgroundImage","url(images/m_1.png)")
		}
		$("#m_menu .m_cds").fadeToggle("slow","linear");
		console.log("点击了move菜单")
	})
})