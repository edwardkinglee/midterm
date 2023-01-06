$().ready(function() {

  const userId = Number($('#user-id')[0].innerText);

  $.ajax({
    method: 'GET',
    url: `/api${location.pathname}`
  })
    .done((response) => {

      if (Object.keys(response).length < 1) {
        location.href = `/listings`;
      }

      const listing = response.listing;
      let interiorColor = listing.interior_color;
      let fuelConsumption = listing.fuel_consumption;
      let engine = listing.engine;
      let fuelType = listing.fuel_type;
      let transmission = listing.transmission;
      let details = listing.details;
      let photo1 = listing.photo1;
      let photo2 = listing.photo2;
      let photo3 = listing.photo3;
      let photo4 = listing.photo4;
      let photo5 = listing.photo5;
      let photo6 = listing.photo6;
      let photo7 = listing.photo7;
      const price = listing.price;

      if (!interiorColor) {
        interiorColor = 'Unavailable';
      }

      if (!fuelConsumption) {
        fuelConsumption = 'Unavailable';
      }

      if (!engine) {
        engine = 'Unavailable';
      }

      if (!fuelType) {
        fuelType = 'Unavailable';
      }

      if (!transmission) {
        transmission = 'Unavailable';
      }

      if (!details) {
        details = 'Unavailable';
      }

      if (!photo1) {
        photo1 = '/images/car-icon.jpg';
      }

      if (!photo2) {
        photo2 = '/images/car-icon.jpg';
      }

      if (!photo3) {
        photo3 = '/images/car-icon.jpg';
      }

      if (!photo4) {
        photo4 = '/images/car-icon.jpg';
      }

      if (!photo5) {
        photo5 = '/images/car-icon.jpg';
      }

      if (!photo6) {
        photo6 = '/images/car-icon.jpg';
      }

      if (!photo7) {
        photo7 = '/images/car-icon.jpg';
      }

      const $lister = `<span id="lister-id" style="display: none;">${listing.lister_id}</span>`;
      $($lister).insertAfter($('#user-id'));

      const $listingsContainer = $('#listing-show');

      $listingsContainer.empty();

      const $listing = `
      <div id="listing-container">
      <div class="text-center" >
      <h2 id="car-details-title">
           <i class="fa-solid fa-arrow-left" onclick="history.back()"></i>
          ${listing.year} ${listing.make} ${listing.model}
        </h2>
            <h4 id="price-container">$${Number(price).toLocaleString('en')}</h4>
      </div>
      <div class="row">
        <div class="col-sm-1">

        <div class="mt-2 border-bottom border-dark border-opacity-75">
            <a href="/listings/phone" class="h-50 text-center">Send to phone
            <p><i class="fa-solid fa-mobile-screen-button"></i></p></a>
          </div>

          <div class="mt-2">
            <a href="/listings/email" class="h-50 text-center">Email
            <p><i class="fa-regular fa-envelope"></i></p></a>
          </div>

          <div class="mt-2 border-top border-dark border-opacity-75" id="add-to-fav">
            <a onclick="addFav()" class="h-50 text-center">Add to favorites
            <p><i class="fa-regular fa-heart favorite-icon"></i></p></a>
          </div>

        </div>

        <div class="col-sm-7 row">
          <div class="photo-gallery">
            <div class="simple-gallery">

             <img class="maxi img-fluid" src="${listing.photo}">

               <div class="mini">
                <img class="img-gallery" src="${photo1}" onclick=' const tempUrl = $(".maxi").attr("src"); $(".maxi").attr("src", $(this).attr("src")); $(this).attr("src", tempUrl);'>
                <img class="img-gallery" src="${photo2}" onclick=' const tempUrl = $(".maxi").attr("src"); $(".maxi").attr("src", $(this).attr("src")); $(this).attr("src", tempUrl);'>
                <img class="img-gallery" src="${photo3}" onclick=' const tempUrl = $(".maxi").attr("src"); $(".maxi").attr("src", $(this).attr("src")); $(this).attr("src", tempUrl);'>
                <img class="img-gallery" src="${photo4}" onclick=' const tempUrl = $(".maxi").attr("src"); $(".maxi").attr("src", $(this).attr("src")); $(this).attr("src", tempUrl);'>
                <img class="img-gallery" src="${photo5}" onclick=' const tempUrl = $(".maxi").attr("src"); $(".maxi").attr("src", $(this).attr("src")); $(this).attr("src", tempUrl);'>
               </div>

             </div>
          </div>
          <div>
            <h4 id="features-title">Features</h4>

            <div class="row">
              <div class="d-flex col-sm-6">
                <div>
                  <img class="img-fluid" src="/caricons/icon-total-mileage.svg"/>
                </div>
                <div>
                  <label><strong>Mileage</strong></label><p>${Number(listing.kms).toLocaleString('en')} kms</p>
                </div>
              </div>

              <div class="d-flex col-sm-6">
                <div>
                  <img class="img-fluid" src="/caricons/icon-drivetrain.svg"/>
                </div>
                <div>
                  <label><strong>Drivetrain</strong></label><p>AWD</p>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="d-flex col-sm-6">
                <div>
                  <img class="img-fluid" src="/caricons/icon-exterior-color.svg"/>
                </div>
                <div>
                  <label><strong>Exterior color</strong></label><p>${listing.color}</p>
                </div>
              </div>
              <div class="d-flex col-sm-6">
                <div>
                  <img class="img-fluid" src="/caricons/icon-interior-color.svg"/>
                </div>
                <div>
                  <label><strong>Interior color</strong></label><p>${interiorColor}</p>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="d-flex col-sm-6">
                <div>
                  <img class="img-fluid" src="/caricons/icon-mpg.svg"/>
                </div>
                <div>
                  <label><strong>Fuel Consumption</strong></label><p>${fuelConsumption}</p>
                </div>
              </div>
              <div class="d-flex col-sm-6">
                <div>
                  <img class="img-fluid" src="/caricons/icon-engine.svg"/>
                </div>
                <div>
                  <label><strong>Engine</strong></label><p>${engine}</p>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="d-flex col-sm-6">
                <div>
                  <img class="img-fluid" src="/caricons/icon-fuel-type.svg"/>
                </div>
                <div>
                  <label><strong>Fuel type</strong></label><p>${fuelType}</p>
                </div>
              </div>
              <div class="d-flex col-sm-6">
                <div>
                  <img class="img-fluid" src="/caricons/icon-transmission.svg"/>
                </div>
                <div>
                  <label><strong>Transmission</strong></label><p>${transmission}</p>
                </div>
              </div>
            </div>
            <div class="car-description pt-2 pb-2">
              <h4>Description</h4>
              <p>
                ${details}
                </p>

            </div>
          </div>
        </div>

        <div class="col-sm-4" style="background-color:   rgba(0,0,255,.1)" id="listing-sidebar">

        </div>
      </div>

    `;
      $($listing).appendTo($listingsContainer);

      // Update favourites button to 'REMOVE' if already faved
      $.ajax({
        method: 'GET',
        url: `/api/favourites/user/${userId}`
      })
        .done((response) => {

          const listingId = Number(location.pathname.split('/')[2]);

          const $removeFav = `<a href="" onclick="removeFav()" class="h-50 text-center">Remove from favorites
                <p><i class="fa-solid fa-heart favorite-icon"></i></p></a>`;

          for (const fav of response.Favourites) {
            if (Number(fav.car_id) === listingId) {

              $('#add-to-fav').html($removeFav);

            }
          }

        });

      let $loginPlease = `<h5>Contact Seller</h5>
        <h6>Please login or register to contact the seller</h6>`;

      let $contactSeller = `
      <div class="p-2" style="background-color: #8f53281a">
      <h5>Contact Seller</h5>
      <form id="send-message">
        <input class="w-75" type="text" id="message-name" name="message-name" placeholder="Name*" required><br><br>
        <input class="w-75" type="email" id="message-email" name="message-email" placeholder="Email*" required><br><br>
        <input class="w-75" type="tel" id="message-phone" name="message-phone" placeholder="Phone number-optional"><br><br>
        <div class="form-group">
          <label for="exampleFormControlTextarea1">Message</label>
          <textarea class="form-control" name="message-content" id="exampleFormControlTextarea1" rows="11" style="overflow:auto;resize:none" placeholder="Hi, this looks interesting! Is it still available?"></textarea><br>
        </div>
        <div class="text-center">
        <button type="submit" class="btn btn-outline-dark" name="submit" id="message-submit" value="Search"><span class="glyphicon glyphicon-search"></span> Send Message</button>
        </div>
      </form>
      </div>`;

      // Sold header for public/regular users
      let $listingSold = `
      <h5>SOLD!</h5>
      <h6>This car has been sold.</h6>
      `;

      // Timestamp for car posted date
      let $timestamp = `
      <h7>Posted: ${new Date(listing.timestamp).toLocaleDateString()} ${new Date(listing.timestamp).toLocaleTimeString([], { timeStyle: 'short' })}</h7><hr>
      `;

      // Active or Sold header
      let $ActiveHeader = `<h5 class="active-listing fw-bold">Active Listing</h5>`;
      let $InactiveHeader = `<h5 class="active-listing fw-bold">Sold Listing</h5>`;

      // TEMPLATES FOR OWN LISTING

      // Container for buttons
      let $ownListingContainer = `
        <div class="d-flex flex-column justify-content-around" id="edit-listing-buttons">
        </div>
      `;

      // Edit listing or Mark as sold buttons (edit or sold)
      let $ownListingAvailable = `
      <a role="button" id="edit-listing" onclick="editPrice()"><label class="edit-icon mb-4"><i class="fa-solid fa-pen me-2"></i>Edit price</label></a>
      <a role="button" id="sold-listing" onclick="markSold()"><label class="edit-icon mb-4"><i class="fa-regular fa-circle-check me-2"></i>Mark as sold</label></a>
      `;

      // Mark inactive button (delete)
      let $ownListingActive = `
      <a role="button" id="delete-listing" onclick="markDelete()"><label class="delete-icon"><i class="fa-solid fa-trash-can me-2"></i>Mark inactive</label></a>
      `;

      // Mark as available button (un-sold)
      let $ownListingSold = `
      <a role="button" id="unsold-listing" onclick="markUnsold()"><label class="edit-icon mb-4"><i class="fa-solid fa-cart-shopping me-2"></i>Mark as available</label></a>
      `;

      // Mark as active button (un-delete)
      let $ownListingInactive = `
      <a role="button" id="undelete-listing" onclick="markUndelete()"><label class="delete-icon"><i class="fa-solid fa-car me-2"></i>Mark active</label></a>
      `;

      // If the car belongs to me:
      if (userId === Number($('#lister-id')[0].innerText)) {

        $('#listing-sidebar').empty();

        if (!listing.sold && !listing.is_deleted) {
          $($ActiveHeader).appendTo($('#listing-sidebar'));
          $($timestamp).appendTo($('#listing-sidebar'));
          $($ownListingContainer).appendTo($('#listing-sidebar'));
        } else {
          $($InactiveHeader).appendTo($('#listing-sidebar'));
          $($timestamp).appendTo($('#listing-sidebar'));
          $($ownListingContainer).appendTo($('#listing-sidebar'));
        }

        if (listing.sold) { // IF LISTING IS SOLD
          $($ownListingSold).appendTo($('#edit-listing-buttons'));
          $('#price-container').append("<span class='badge text-bg-success ms-2'>Sold</span>");
        } else {
          $($ownListingAvailable).appendTo($('#edit-listing-buttons'));
        }

        if (listing.is_deleted) { // IF LISTING IS INACTIVE
          $('.active-listing').text('Inactive Listing');
          $('#edit-listing-buttons').empty();
          $($ownListingInactive).appendTo($('#edit-listing-buttons'));
          $('#price-container').append("<span class='badge text-bg-warning ms-2'>Inactive</span>");
        } else {
          $($ownListingActive).appendTo($('#edit-listing-buttons'));
        }

        return;
      };

      // Car doesn't belong to the user, BELOW:

      // Not logged in & listing is not sold/deleted
      if (!userId && (!listing.sold || !listing.is_deleted)) {
        $('#listing-sidebar').empty();
        $($ActiveHeader).appendTo($('#listing-sidebar'));
        $($timestamp).appendTo($('#listing-sidebar'));
        $($loginPlease).appendTo($('#listing-sidebar'));
        $('#add-to-fav').remove();
      }

      // Listing is sold
      if (listing.sold) {
        $('#listing-sidebar').empty();
        $($timestamp).appendTo($('#listing-sidebar'));
        $($listingSold).appendTo($('#listing-sidebar'));
        return;
      }

      // Listing is deleted
      if (listing.is_deleted && (userId !== Number($('#lister-id')[0].innerText))) {
        location.href = `/listings`;
      }

      // Otherwise, show contact form
      if (userId && (!listing.sold || !listing.is_deleted)) {
        $('#listing-sidebar').empty();
        $($ActiveHeader).appendTo($('#listing-sidebar'));
        $($timestamp).appendTo($('#listing-sidebar'));
        $($contactSeller).appendTo($('#listing-sidebar'));
      }

      $('#send-message').submit((e) => {
        e.preventDefault();

        const userId = Number($('#user-id')[0].innerText);
        const carId = Number(location.pathname.split('/')[2]);
        const listerId = Number($('#lister-id')[0].innerText);
        const buyerId = userId;

        const input = {};

        $.each($('#send-message').serializeArray(), function(i, field) {
          input[field.name] = field.value;
        }); // input fields added using serializeArray


        const values = {
          userId, carId, listerId, buyerId,
          message: `${input["message-name"]}, ${input["message-email"]}, ${input["message-phone"]}<br />${input["message-content"]}`
        };

        $.ajax({
          method: 'POST',
          url: '/messages',
          data: values
        })
          .done((response) => {

            $('#new-message').trigger("reset");
            location.href = `/messages/${carId}/${buyerId}`;

          });

      });

    });

});

const editPrice = function() {
  const currentPrice = $('#price-container').text().replace('$', '').replace(',', '');

  let price = Number(prompt(`Current price: ${$('#price-container').text()}\n\nPlease enter a new price:`, `${currentPrice}`));

  if (price === 0 || price > 5000000) {
    alert("Price must be greater than $0 and less than $5m.");
  } else if (!Number.isInteger(price)) {
    alert("Price must be a number.\n\nPlease do not include the dollar sign, spaces, or commas.");
  } else {
    $.ajax({
      method: 'PUT',
      url: location.pathname,
      data: {price: price}
    })
      .done((response) => {
        alert(`Price has been updated to: $${Number(price).toLocaleString('en')}`);
        location.reload();
      })
  }
};

const markSold = function() {

  $.ajax({
    method: 'PUT',
    url: location.pathname,
    data: { sold: true }
  })
    .done((response) => {
      location.reload();
    });

};

const markUnsold = function() {

  $.ajax({
    method: 'PUT',
    url: location.pathname,
    data: { sold: false }
  })
    .done((response) => {
      location.reload();
    });

};

const markDelete = function() {

  $.ajax({
    method: 'PUT',
    url: location.pathname,
    data: { delete: true }
  })
    .done((response) => {
      location.reload();
    });

};

const markUndelete = function() {

  $.ajax({
    method: 'PUT',
    url: location.pathname,
    data: { delete: false }
  })
    .done((response) => {
      location.reload();
    });

};

const addFav = function() {

  const userId = Number($('#user-id')[0].innerText);
  const listingId = Number(location.pathname.split('/')[2]);

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

const removeFav = function() {

  const userId = Number($('#user-id')[0].innerText);
  const listingId = Number(location.pathname.split('/')[2]);

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

