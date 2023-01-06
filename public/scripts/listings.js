// Load All or My listings depending on the H1 title of the page (determined at time of rendering based on routes)
$().ready(function() {
  if ($('#listing-title')[0].innerHTML.includes('All')) {
    $.ajax({
      method: 'GET',
      url: '/api/listings'
    })
      .done((response) => {

        const userId = Number($('#user-id')[0].innerText);
        const $listingsContainer = $('#listings');

        $listingsContainer.empty();

        for (const listing of response.listings) {


          if (listing.is_deleted) {
            continue;
          }

          let favHeart = `<i onclick="addFav('${listing.id}')" class="fa-regular fa-heart favorite-icon"></i>`;

          if (!userId) {
            favHeart = '';
          }

          // if (userFavs) {
          //   favHeart = `<i onclick="removeFav('${listing.id}')" class="fa-solid fa-heart favorite-icon"></i>`;
          // }

          let $listing = `
        <div class="card-body" id="${listing.id}">
            <div class="row border-top border-bottom">
              <div class="col-sm-2">
               <a href="/listings/${listing.id}" class="btn">
                <img src="${listing.photo}" class="img-fluid img-thumbnail" alt="..."/>
               </a>
              </div>

              <div class="col-sm-5">
                <div class="card-body-right text-start">
                <a href="/listings/${listing.id}" class="">
                <h5 class="card-title">${listing.year} ${listing.make} ${listing.model}</h5>
                </a>
                <br>
                <p class="card-text">${listing.description} <br>Color: ${listing.color} <br>Body type: ${listing.body_type}</p>
                </div>
              </div>

              <div class="col-sm-2">
              <h6>${Number(listing.kms).toLocaleString('en')} kms</h6>
              </div>

              <div class="col-sm-3">
              <h5 class="d-flex justify-content-between">
                 <div></div>
                 <div>
                  $${Number(listing.price).toLocaleString('en')}
                </div>
                <div id="fav-heart">
                  ${favHeart}
                </div>
              </h5>
              <p><br><br><br>Posted: ${new Date(listing.timestamp).toLocaleDateString()} ${new Date(listing.timestamp).toLocaleTimeString([], { timeStyle: 'short' })}</p>
              </div
            </div>

          </div>
        `;

          $($listing).appendTo($listingsContainer);

          const $listingTitle = $(`#${listing.id} .card-title`);

          if (listing.sold) {
            $($listingTitle).append("<span class='badge text-bg-success ms-2'>Sold</span>");
          }

        }
      })
      .then(()=> {
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
  } else {
    // Display only 'My listings' based on the logged in user
    // userId cannot be reached via cookie here, so it is being stored on the page in a hidden div instead
    const userId = $('#user-id')[0].innerHTML;
    $.ajax({
      method: 'GET',
      url: `/api/listings/user/${userId}`
    })
      .done((response) => {

        const $listingsContainer = $('#listings');

        $listingsContainer.empty();

        for (const listing of response.listings) {

          let $listing = `
          <div class="card-body" id="${listing.id}">
          <div class="row border-top border-bottom">
            <div class="col-sm-2">
             <a href="/listings/${listing.id}" class="btn">
              <img src="${listing.photo}" class="img-fluid img-thumbnail" alt="..."/>
             </a>
            </div>

            <div class="col-sm-5">
              <div class="card-body-right text-start">
              <a href="/listings/${listing.id}" class="btn">
              <h5 class="card-title">${listing.year} ${listing.make} ${listing.model}</h5>
              </a>
              <br>
              <p class="card-text">${listing.description} <br>color: ${listing.color} <br>${listing.body_type}</p>
              </div>
            </div>

            <div class="col-sm-2">
              <h6>${Number(listing.kms).toLocaleString('en')} kms</h6>
            </div>

            <div class="col-sm-3">
            <h5>$${Number(listing.price).toLocaleString('en')}</h5>
            <p><br><br><br>Posted: ${new Date(listing.timestamp).toLocaleDateString()} ${new Date(listing.timestamp).toLocaleTimeString([], { timeStyle: 'short' })}</p>
            </div
          </div>
        </div>
        `;

          $($listing).appendTo($listingsContainer);

          const $listingTitle = $(`#${listing.id} .card-title`);

          if (listing.sold) {
            $($listingTitle).append("<span class='badge text-bg-success ms-2'>Sold</span>");
          }

          if (listing.is_deleted) {
            $($listingTitle).append("<span class='badge text-bg-warning ms-2'>Inactive</span>");
          }

        }
      });
  }
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
