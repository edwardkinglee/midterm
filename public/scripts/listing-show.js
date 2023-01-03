$().ready(function() {

  const carId = Number($('#car-id')[0].innerText);

  $.ajax({
    method: 'GET',
    url: `/api/listings/${carId}`
  })
    .done((response) => {
      const listing = response.listing;

      // listing should have the right keys now, and you can get the info from listing.id, listing.year, etc...

      console.log('listing year', listing.year);

      const $listingsContainer = $('#listing-show');

      $listingsContainer.empty();


    });

});
