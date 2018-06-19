var paginas = $(".pagina");
var next = $(".next");
var prev = $(".prev");
var pagina_atual = 0;
var pagina_anterior = paginas.length-1;

paginas[0].style.zIndex = 2;

next.onclick = function(){
    slide(+1);
}

prev.onclick = function(){
    slide(-1);
}

function slide(dir){
    paginas[pagina_anterior].style.zIndex = 0;
    paginas[pagina_atual].style.zIndex = 1;
    paginas[pagina_atual].classList.remove("fadein");
    pagina_anterior = pagina_atual;

    if( dir == 1 ){
        if(pagina_atual < paginas.length - 1){
            pagina_atual++;
        }
        else{
            pagina_atual = 0;
        }
    }
    else{
        if(pagina_atual > 0){
            pagina_atual--;
        }
        else{
            pagina_atual = paginas.length - 1;
        }
    }

    paginas[pagina_atual].style.zIndex = 2;
    paginas[pagina_atual].classList.add("fadein");
}
