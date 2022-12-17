// Load most favourited
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
            <div class="col-md-4">
              <div class="thumbnail">
                <a href="/listings/${listing.id}">
                <img src="${listing.photo}" style="width:100%">
                  <div class="caption">
                    <h3>${listing.year} ${listing.make} ${listing.model}</h3>
                    <p>${listing.description}</p>
                  </div>
                </a>
              </div>
            </div>`;

          $($listing).appendTo($featuredContainer);

        }
      });

});
