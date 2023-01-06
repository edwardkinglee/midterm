/* eslint-disable no-undef */
$().ready(function() {

  $.ajax({
    method: 'GET',
    url: `/api/search`
  })
    .done((response) => {

      const userId = Number($('#user-id')[0].innerText);
      const $searchContainer = $('#search');

      $searchContainer.empty();

      for (const car of response.search) {

        let favHeart = `<i onclick="addFav('${car.id}')" class="fa-regular fa-heart favorite-icon"></i>`;

        if (!userId) {
          favHeart = '';
        }

        let $search = `
        <div class="card-body" id="${car.id}">
          <div class="row border-top border-bottom">
            <div class="col-sm-2">
             <a href="/listings/${car.id}" class="btn">
              <img src="${car.photo}" class="img-fluid img-thumbnail" alt="...">
             </a>
            </div>

            <div class="col-sm-5">
              <div class="card-body text-start">
              <a href="/listings/${car.id}" class="">
              <h5 class="card-title">${car.year} ${car.make} ${car.model}</h5>
              </a>
                 <br>
                 <p class="card-text">${car.description} <br>color: ${car.color} <br>${car.body_type}</p>
              </div>
            </div>

            <div class="col-sm-2">
              <h6>${Number(car.kms).toLocaleString('en')} kms</h6>
            </div>

            <div class="col-sm-3">
             <h5 class="d-flex justify-content-between">
             <div></div>
             <div>
                $${Number(car.price).toLocaleString('en')}
             </div>
             <div id="fav-heart">
               ${favHeart}
             </div>
             </h5>
             <p><br><br><br>Posted: ${new Date(car.timestamp).toLocaleDateString()} ${new Date(car.timestamp).toLocaleTimeString([], { timeStyle: 'short' })}</p>

            </div
          </div>
        </div>
        `;

        $($search).appendTo($searchContainer);
      }

      //if there are no search results
      if (response.search.length === 0) {
        let $search = `<div id="no-results">No results found</div>`;
        $($search).appendTo($searchContainer);
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

  //   $("#search-from").submit(function() {
  //     $('html, body').animate({
  //          scrollTop: $("#search").offset().top
  //     }, 2000);
  //     return false;
  // });

  // $('#search-submit').on('click', function(event) {
  //   $('html, body').animate({
  //     scrollTop: $("#search").offset().top
  //   }, 2000);
  //   return false;

  // });


  // $('#search-form').on('submit', function(event) {
  //   event.preventDefault();

  //   /* serialize will get data with this format make=BMW&model=&min_year=&max_year= */
  //   // const formData = $(this).serialize();
  //   //will get the make
  //   const searchMake = $("#make").val();

  //   $.ajax('/search', {
  //     method: 'POST',
  //     data: searchMake
  //   })
  //     .then(function() {
  //       // console.log('searchMake', searchMake);
  //       // console.log('search',search);

  //     });

  //   return false;

  // });

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
