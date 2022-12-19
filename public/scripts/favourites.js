/* eslint-disable no-undef */
// Load All or My listings depending on the H1 title of the page (determined at time of rendering based on routes)
$().ready(function() {
  if ($('#favourites')[0].innerHTML.includes('All')) {
    $.ajax({
      method: 'GET',
      url: '/api/favourites'
    })
      .done((response) => {

        const $favouritesContainer = $('#favourites');

        $favouritesContainer.empty();

        for (const favourite of response.favourites) {

          let $favourite = `
        <div class="col">
          <div class="card">
            <img src="${favourite.photo}" class="card-img-top" alt="...">
            <h5 class="card-header">${favourite.year} ${favourite.make} ${favourite.model}</h5>
            <div class="card-body">
              <h5 class="card-title">${favourite.price} ${favourite.color}</h5>
              <p class="card-text">${favourite.description}</p>
              <a href="/listings/${favourite.id}" class="btn btn-primary">View listing</a>
            </div>
            <div class="card-footer text-muted">
              Posted: ${favourite.timestamp}
            </div>
          </div>
        </div>
        `;

          $($favourite).appendTo($favouritesContainer);

        }
      });
  } else {
    // Display only 'My listings' based on the logged in user
    // userId cannot be reached via cookie here, so it is being stored on the page in a hidden div instead
    const userId = $('#user-id')[0].innerHTML;
    $.ajax({
      method: 'GET',
      url: `/api/favourites/user/${userId}`
    })
      .done((response) => {

        const $favouritesContainer = $('#favourites');

        $favouritesContainer.empty();

        for (const favourite of response.favourites) {

          let $favourite = `
        <div class="col">
          <div class="card">
            <img src="${favourite.photo}" class="card-img-top" alt="...">
            <h5 class="card-header">${favourite.year} ${favourite.make} ${favourite.model}</h5>
            <div class="card-body">
              <h5 class="card-title">${favourite.price} ${favourite.color}</h5>
              <p class="card-text">${favourite.description}</p>
              <a href="/listings/${favourite.id}" class="btn btn-primary">View listing</a>
            </div>
            <div class="card-footer text-muted">
              Posted: ${favourite.timestamp}
            </div>
          </div>
        </div>
        `;

          $($favourite).appendTo($favouritesContainer);

        }
      });
  }
});