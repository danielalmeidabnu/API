
function ChamarSale(){
    mostrarDadoSale(Osdados);
}

function mostrarDadoSale(dados){
	const tbody = $('#esse');
	   $.each(dados["properties"], function(i, el){
		   tbody.append(`<div class="container float-left" style="width: 660px; height: 600px;">
						  <div class="card border-info text-white mb-5">
							<img class="card-img" src=${el.thumbnail} alt="Card image">
								  <div class="card-img-overlay">
									<h5 class="card-title">${el.prop_type} em ${el.address.city}, ${el.address.state_code}</h5>
									  <p class="card-text">No momento está ${el.prop_status} </p>
									  <p class="card-text1">Id da propriedade: ${el.property_id}</p>
								   <br>
								   <br>
								   <br>
								   <h5 class="card-text2"><b>R$${el.price}.</b></h5>
								   <div class="float-right">
								   <a type="button" class="btn btn-info" href="${el.rdc_web_url}">Ver Mais</a>
								   </div>							 	
							   </div>
							   <ul class="list-group list-group-flush">
									<li class="list-group-item">${el.baths} banheiros, ${el.beds} quartos .</li>
								</ul>
									  <div class="card-footer text-muted">
										  Ultima Atualização: ${el.last_update}
									  </div>
						   </div>
						 </div>`)
	   })
	}