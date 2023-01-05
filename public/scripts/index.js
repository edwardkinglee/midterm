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
          <a href="/listings/${listing.id}">
            <img src="${listing.photo}" class="card-img-top" alt="...">
          </a>
            <h5 class="card-header">${listing.year} ${listing.make} ${listing.model}</h5>
            <div class="card-body">
              <h5 class="card-title d-flex justify-content-between">$${Number(listing.price).toLocaleString('en')} <i class="fa-regular fa-heart favorite-icon"></i></h5>
              <p class="card-text">${listing.description}<br>color: ${listing.color} <br> ${listing.body_type}</p>

              <a href="/listings/${listing.id}" class="btn btn-primary">View listing</a>
            </div>
            <div class="card-footer text-muted">
              Posted: ${new Date(listing.timestamp).toLocaleDateString()}
            </div>
          </div>
        </div>`;

        $($listing).appendTo($featuredContainer);

      }
    });

});

