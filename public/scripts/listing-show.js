$().ready(function() {

  $.ajax({
    method: 'GET',
    url: '/api/listings/4'
  })
    .done((response) => {
      const listing = response.listing;

      // listing should have the right keys now, and you can get the info from listing.id, listing.year, etc...

      console.log('listing year', listing.year);

      const $listingsContainer = $('#listing-show');

      $listingsContainer.empty();


    });

});
