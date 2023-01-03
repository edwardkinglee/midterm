$().ready(function() {

    $.ajax({
      method: 'GET',
      url: '/api/listings/4'
    })
      .done((response) => {
        console.log('response',response);
        const $listingsContainer = $('#listing-show');

        $listingsContainer.empty();

        
      });
 
});
