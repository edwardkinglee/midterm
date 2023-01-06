/* eslint-disable no-undef */
// Load most favourited to the homepage
$().ready(function() {
  $.ajax({
    method: 'GET',
    url: '/api/listings/featured'
  })
    .done((response) => {

      const userId = Number($('#user-id')[0].innerText);
      const $featuredContainer = $('#featured-cars');

      $featuredContainer.empty();

      for (const listing of response.listings) {

        let favHeart = `<i onclick="addFav('${listing.id}')" class="fa-regular fa-heart favorite-icon"></i>`;

        if (!userId) {
          favHeart = '';
        }

        let $listing = `
          <div class="col">
          <div class="card" id="${listing.id}">
          <a href="/listings/${listing.id}">
            <img src="${listing.photo}" class="card-img-top" alt="...">
          </a>
            <h5 class="card-header">${listing.year} ${listing.make} ${listing.model}</h5>
            <div class="card-body">
              <h5 class="card-title d-flex justify-content-between">$${Number(listing.price).toLocaleString('en')} <div id="fav-heart">${favHeart}</div></h5>
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
    })
    .then(() => {
      const userId = Number($('#user-id')[0].innerText);
      $.ajax({
        method: 'GET',
        url: `/api/favourites/user/${userId}`
      })
        .then((response) => {
          for (const fav of response.Favourites) {
            $(`#${fav.car_id}`).find('#fav-heart').html(`<i onclick="removeFav('${fav.car_id}')" class="fa-solid fa-heart favorite-icon"></i>`);
          }
        });
    });

});

const addFav = function(listingId) {

  const userId = Number($('#user-id')[0].innerText);

  $.ajax({
    method: 'POST',
    url: `/favourites`,
    data: {
      'user': userId,
      'car': listingId
    }
  })
    .done((response) => {
      location.reload();
    });

};

const removeFav = function(listingId) {

  const userId = Number($('#user-id')[0].innerText);

  $.ajax({
    method: 'DELETE',
    url: `/favourites`,
    data: {
      'user': userId,
      'car': listingId
    }
  })
    .done((response) => {
      location.reload();
    });

};
