$().ready(function() {

  $.ajax({
    method: 'GET',
    url: `/api${location.pathname}`
  })
    .done((response) => {
      const listing = response.listing;

      const $listingsContainer = $('#listing-show');

      $listingsContainer.empty();
      
      const $listing = `
      <div style="width:70%">
      <div class="text-center" >
      <h2 style="margin-top: 50px">
           <i class="fa-solid fa-arrow-left" onclick="history.back()"></i>
          ${listing.year} ${listing.make} ${listing.model}
        </h2>
            <label>Toronto, ON 9km away  Home delivery available</label>
      </div>
      <div class="row" style="height: 1300px;">
        <div class="col-sm-1" style="height:200px;">
          <div class="h-50 text-center" style="background-color: #656f771a; border-bottom: 1px solid black;">Send to phone
            <p><i class="fa-solid fa-mobile-screen-button"></i></p></div>
          <div class="h-50 text-center" style="background-color: #656f771a">Email
            <p><i class="fa-regular fa-envelope"></i></p></div>
        </div>
  
        <div class="h-100 col-sm-7 row">
          <div class="" style="background-color: #13de0c1a">
            <div class="h-75">
              <img class="img-fluid" src="${listing.photo}"/> test image section
            </div>
            <div class="h-25">
              <!--Placeholder for images-->
            </div>
          </div>
          <div class="">
            <h4>Features</h4>
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
                  <label><strong>Interior color</strong></label><p>Black</p>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="d-flex col-sm-6">
                <div>
                  <img class="img-fluid" src="/caricons/icon-mpg.svg"/>
                </div>
                <div>
                  <label><strong>Fuel Consumption</strong></label><p>9.94L/100km</p>
                </div>
              </div>
              <div class="d-flex col-sm-6">
                <div>
                  <img class="img-fluid" src="/caricons/icon-engine.svg"/>
                </div>
                <div>
                  <label><strong>Engine</strong></label><p>241hp 2L 14</p>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="d-flex col-sm-6">
                <div>
                  <img class="img-fluid" src="/caricons/icon-fuel-type.svg"/>
                </div>
                <div>
                  <label><strong>Fuel type</strong></label><p>Gasoline</p>
                </div>
              </div>
              <div class="d-flex col-sm-6">
                <div>
                  <img class="img-fluid" src="/caricons/icon-transmission.svg"/>
                </div>
                <div>
                  <label><strong>Transmission</strong></label><p>Automatic</p>
                </div>
              </div>
            </div>
            <div class="" style="background-color: #dd1b8f1a">
              <h4>Description</h4>
              <p>Other manufacturer options include:

              - Power Seat Bolsters
              - Black Wings Badges
              - Ventilated Front Seats
              - Headrest Embroidery - Aston Martin Wings
              - Dark Chrome Jewellery Pack
              - Heated Steering Wheel
              - Technology Pack +
              - Smoked Rear Lamps
              - Trim Inlay - Satin Chopped Carbon
  
                </p>
  
            </div>
          </div>
        </div>
  
        <div class="h-75 col-sm-4" style="background-color:   rgba(0,0,255,.1)">
          <div class="h-25" style="background-color: #13de0c1a"></div>
          <div class="h-75" style="background-color: #8f53281a">
          <h5>Contact Seller</h5>
          <form action="" method="">
            <input class="w-75" type="text" id="message-name" name="message-name" placeholder="Name*" required><br><br>
            <input class="w-75" type="email" id="message-email" name="message-email" placeholder="Email*" required><br><br>
            <input class="w-75" type="tel" id="message-phone" name="message-phone" placeholder="Phone number-optional"><br><br>
            <div class="form-group">
              <label for="exampleFormControlTextarea1">Message</label>
              <textarea class="form-control" id="exampleFormControlTextarea1" rows="11" style="overflow:auto;resize:none" placeholder="Hi, this looks interesting! Is it still available?"></textarea><br>
            </div>
            <div class="text-center">
            <button type="submit" class="btn btn-outline-dark" name="submit" id="message-submit" value="Search"><span class="glyphicon glyphicon-search"></span> Send Message</button>
            </div>
          </form>
          </div>
        </div>
      </div>
      
    `;
    $($listing).appendTo($listingsContainer);

    });

});
