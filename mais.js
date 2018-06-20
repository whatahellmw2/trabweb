$(".mmomentos").click(function(){
    $(this).css("display", "none");
    $(this).parent(".partida").css("grid-column","span 2");
    $(this).parent(".partida").css("grid-row","span 2");
    $(this).next(".momentos").css("display", "block");
});