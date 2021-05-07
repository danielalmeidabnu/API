function ChamarRent(){
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
    mostrarDados(dados);
}


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