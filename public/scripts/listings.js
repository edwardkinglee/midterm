$().ready(function() {
  $.ajax({
    method: 'GET',
    url: '/api/listings'
  })
    .done((response) => {

      const $listingsContainer = $('#listings');

      $listingsContainer.empty();

      for (const listing of response.listings) {

        let $listing = `
        <div class="col">
          <div class="card">
            <img src="${listing.photo}" class="card-img-top" alt="...">
            <h5 class="card-header">${listing.year} ${listing.make} ${listing.model}</h5>
            <div class="card-body">
              <h5 class="card-title">${listing.price} ${listing.color}</h5>
              <p class="card-text">${listing.description}</p>
              <a href="/listings/${listing.id}" class="btn btn-primary">View listing</a>
            </div>
            <div class="card-footer text-muted">
              Posted: ${listing.timestamp}
            </div>
          </div>
        </div>
        `;

        $($listing).appendTo($listingsContainer);

      }
    });
});
