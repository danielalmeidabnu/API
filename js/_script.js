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
	const state_code = $('#state_code').val();;
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

	function mostrarDados(dados){
	 const tbody = $('#esse');
		$.each(dados["properties"], function(i, el){
			tbody.append(`<div class="container float-left" style="width: 660px; height: 600px;">
						   <div class="card border-info text-white mb-5">
							 <img class="card-img" src=${el.photos[i].href} alt="Card image">
						   		<div class="card-img-overlay">
							 		<h5 class="card-title0">${el.prop_type} em ${el.address.city}, ${el.address.country}</h5>
							   		<p class="card-text01">Construido em ${el.year_built}, está ${el.prop_status} </p>
							   		<p class="card-text02">${el.prop_status}.</p>
							   		<p class="card-text03">Id da propriedade: ${el.property_id}</p>
									<br>
									<br>
									<h5 class="card-text04" style="color: White"><b>Preço: US$${el.community.price_min}-${el.community.price_max}</b></h5>
									<div class="float-right">
									<a type="button" class="btn btn-info" href="${el.rdc_web_url}">Ver Mais</a>
									</div>							 	
								</div>
								<ul class="list-group list-group-flush">
									<li class="list-group-item">${el.community.baths_min}-${el.community.baths_max} banheiros, ${el.community.beds_min}-${el.community.beds_max} quartos .</li>
								</ul>
							   		<div class="card-footer text-muted">
							   			Ultima Atualização: ${el.last_update}
							   		</div>
							</div>
						  </div>`)
		})
	}
	 
 }

var Osdados;

 function GetSale(){
		state = $('#state option:selected').text();
		if (state == 'Nova York'){
			state = 'New%20York%20City';
		}else if($('#state option:selected').text() == 'Manhattan'){
			state = 'Manhattan'; 
		}else if($('#state option:selected').text() == 'New York Mills'){
			state = 'New%20York%20Mills';
		}
		state_code = $('#state_code').text();
		limite = $('#limit').val();
		min_quartos = '&beds_min='+$('#beds_min').val() ;
		preco_maximo = '&price_max='+$('#preco_maximo').val();
		permite_gatos = '&allows_cats='+$('#permite_gato').text();
		min_banheiros = '&baths_min='+$('#beds_min').val();
		permite_cachorros = '&allows_dogs='+$('#permite_cachorro').text();		
		$.ajax({
			"async": true,
			"crossDomain": true,
			"url": "https://realtor.p.rapidapi.com/properties/v2/list-for-sale?city=Manhattan&limit=20&state_code=NY&offset=0&sort=relevance",			
			"method": "GET",
			"headers": {
				"x-rapidapi-key": "7d2d8e2fc3msh8a2e5b1a7396f13p1f3d66jsn63c752aeb0e0",
				"x-rapidapi-host": "realtor.p.rapidapi.com"
			},
			beforeSend: function(){
				alert('Carregando...')
			},
			error: function(){
				alert('Falha ao carregar as informações')
			},
			success: function(dados){
				Osdados = dados;
				alert('Achei Apartamentos para Venda');
				//mostrarDadoSale(dados);
			},
			complete: function(){
				               
			}
		})
}
//  debugger;
GetSale();
//GetRent();
 