/* eslint-disable no-undef */
// Load most favourited to the homepage
$().ready(function() {
  $.ajax({
    method: 'GET',
    url: '/api/listings/featured'
  })
    .done((response) => {

      const $featuredContainer = $('#featured-cars');

      $featuredContainer.empty();

      for (const listing of response.listings) {

        let $listing = `
          <div class="col">
          <div class="card">
            <img src="${listing.photo}" class="card-img-top" alt="...">
            <h5 class="card-header">${listing.year} ${listing.make} ${listing.model}</h5>
            <div class="card-body">
              <h5 class="card-title">$${Number(listing.price).toLocaleString('en')}</h5>
              <p class="card-text">${listing.description}<br>color: ${listing.color} <br> ${listing.body_type}</p>
              <a href="/listings/${listing.id}" class="btn btn-primary stretched-link">View listing</a>
            </div>
            <div class="card-footer text-muted">
              Posted: ${listing.timestamp}
            </div>
          </div>
        </div>`;

        $($listing).appendTo($featuredContainer);

      }
    });

});

