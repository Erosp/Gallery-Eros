var imagenes=['Audi', 'Musa', 'Cusco', 'Technology', 'Boda', 'Draw', 'Ceviche', 'Friends', 'Rosa'];
            
$(".imagen").on("click", function(){
                
    var id=$(this).attr("id");
    var index=$.inArray(id, imagenes);
                
    cambiar(index);
                
    $(".modal").css("display", "block");
                
});
            
$(".cerrar").on("click", function(){
                
    $(".modal").css("display", "none");
                
});
            
$(".previus").on("click", function(){
                
    var index=$(this).attr("id").split("-")[1];
    cambiar(index);
                
});
            
$(".next").on("click", function(){
                
    var index=$(this).attr("id").split("-")[1];
    cambiar(index);
                
});
            
function cambiar(index){
                
    $("#modalImagen").attr("src", "imgs/"+(parseInt(index)+1)+".jpg");
    $("#modalTitulo").html(imagenes[index]);
                
    var previus;
    var next;
                
    if(index==0){
                    
        previus=8;
        next=parseInt(index)+1;
                    
    }
                
    else if(index==8){
                    
        previus=index-1;
        next=0;
                    
    }
                
    else{
                    
        previus=index-1;
        next=parseInt(index)+1;
                    
    }
                
    $(".previus").attr("id", "pic-"+previus);
    $(".next").attr("id", "pic-"+next);
                
}