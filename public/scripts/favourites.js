// Load favourites
$().ready(function() {
  // Display only 'My favourites' based on the logged in user
  // userId cannot be reached via cookie here, so it is being stored on the page in a hidden div instead
  const userId = $('#user-id')[0].innerHTML;

  $.ajax({
    method: 'GET',
    url: `/api/favourites/user/${userId}`
  })
    .done((response) => {
      const $favouritesContainer = $('#favourites');

      $favouritesContainer.empty();

      console.log(response);

      for (const favourite of response.Favourites) {

        let $favourite = `
        <div class="card-body">
            <div class="row border-top border-bottom">
              <div class="col-sm-2">
               <a href="/listings/${favourite.id}" class="btn">
                <img src="${favourite.photo}" class="img-fluid img-thumbnail" alt="..."/>
               </a>
              </div>

              <div class="col-sm-5">
                <div class="card-body-right text-start">
                <a href="/listings/${favourite.id}" class="">
                <h5 class="card-title">${favourite.year} ${favourite.make} ${favourite.model}</h5>
                </a>
                <br>
                <p class="card-text">${favourite.description} <br>color: ${favourite.color} <br>${favourite.body_type}</p>
                </div>
              </div>

              <div class="col-sm-2">
              <h6>${Number(favourite.kms).toLocaleString('en')} kms</h6>
              </div>

              <div class="col-sm-3">
              <h5>$${Number(favourite.price).toLocaleString('en')}</h5>
              <p><br><br>Posted: ${new Date(favourite.timestamp).toDateString()}<br>${new Date(favourite.timestamp).toLocaleTimeString('en-US')}</p>
              </div
            </div>

          </div>
        `;

        $($favourite).appendTo($favouritesContainer);

      }
    });

});
