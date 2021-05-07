function GetRent(){

    //	if ($('#state').val() = 'Nova York'){
    //		const state = 'city=New%20York%20City';
    //	}
    //	if ($('#state').val() = 'Manhattan'){
    //		const state = 'city=Manhattan ';
    //	}
    //	const limite = $('#limit').val();
    
        //Parametros em Ordem  -->
        const state = $('#state').val();;
        const state_code = $('#state_code').val();
        const limite = $('#limit').val();
        const min_quartos = '&beds_min='+$('#beds_min').val() ;
        const preco_maximo = '&price_max='+$('#preco_maximo').val();
        const permite_gatos = '&allows_cats='+$('#permite_gato').val();
        const min_banheiros = '&baths_min='+$('#beds_min').val();
        const permite_cachorros = '&allows_dogs='+$('#permite_cachorro').val();		
    
        $.ajax({
            "async": true,
            "crossDomain": true,
            //Teste -->
            "url": "https://realtor.p.rapidapi.com/properties/v2/list-for-rent?city=New%20York%20City&state_code=NY&limit=20&offset=0&beds_min=1&price_max=4455&sort=relevance&allows_cats=false&baths_min=1&allows_dogs=true",
            //Original -->
            //"url": "https://realtor.p.rapidapi.com/properties/v2/list-for-rent?city="+state+"&state_code="+state_code+"&limit="+limite+"&offset=0&sort=relevance",	   
            //Novo -->
            //"url": "https://realtor.p.rapidapi.com/properties/v2/list-for-sale?city="+state+"&state_code="+state_code+"&limit="+limite+"&offset=0"+min_quartos+""+preco_maximo+"&sort=relevance"+permite_gatos+""+min_banheiros+""+permite_cachorros,
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "7d2d8e2fc3msh8a2e5b1a7396f13p1f3d66jsn63c752aeb0e0",
                "x-rapidapi-host": "realtor.p.rapidapi.com"
            },
            beforeSend: function(){
                $('#esse').after('<p class="loading">Espera papai</p>');
            },
            error: function(){
                $('#esse').after('<p class="loading">Falha ao carregar</p>');
            },
            success: function(dados){
                 mostrarDados(dados);
            },
            complete: function(){
                $('.loading').remove();               
            }
        })      
    
}    