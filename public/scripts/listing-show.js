$().ready(function() {

  $.ajax({
    method: 'GET',
    url: `/api${location.pathname}`
  })
    .done((response) => {
      const listing = response.listing;
      let interiorColor = listing.interior_color;
      let fuelConsumption =  listing.fuel_consumption;
      let engine =  listing.engine;
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

      if(!interiorColor){
        interiorColor= 'Unavailable';
        }

      if(!fuelConsumption){
        fuelConsumption = 'Unavailable';
      }

      if(!engine){
        engine = 'Unavailable';
       }

      if(!fuelType){
        fuelType = 'Unavailable';
      }

      if(!transmission){
        transmission = 'Unavailable';
      }

      if(!details){
        details = 'Unavailable';
      }

      if(!photo1){
        photo1 = '/images/car-icon.jpg';
      }

      if(!photo2){
        photo2 = '/images/car-icon.jpg';
      }

      if(!photo3){
        photo3 = '/images/car-icon.jpg';
      }

      if(!photo4){
        photo4 = '/images/car-icon.jpg';
      }

      if(!photo5){
        photo5 = '/images/car-icon.jpg';
      }

      if(!photo6){
        photo6 = '/images/car-icon.jpg';
      }

      if(!photo7){
        photo7 = '/images/car-icon.jpg';
      }

      const $listingsContainer = $('#listing-show');
      console.log(response);
      $listingsContainer.empty();
      
      const $listing = `
      <div id="listing-container">
      <div class="text-center" >
      <h2 id="car-details-title">
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
          <div class="photo-gallery">
            <div class="simple-gallery">

             <img class="maxi img-fluid" src="${listing.photo}">
            
               <div class="mini">  
                <img class="img-gallery" src="${photo1}">
                <img class="img-gallery" src="${photo2}">
                <img class="img-gallery" src="${photo3}">
                <img class="img-gallery" src="${photo4}">
                <img class="img-gallery" src="${photo5}">
               </div>
        
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
            <div class="car-description">
              <h4>Description</h4>
              <p>
                ${details}
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

    $(".mini img").click(function(){  
      $(".maxi").attr("src",$(this).attr("src").replace("100x100","400x400"));
    });

});
