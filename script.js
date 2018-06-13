$("p").on({
	mouseenter: function(){
		$(this).css( "text-decoration", "underline");
	},
	mouseleave: function(){
		$(this).css("text-decoration","none");
	}
	
});
 $(".img_icone").click(function(){
        $("ul").toggle(500);
        
    });
