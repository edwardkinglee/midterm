// Load All or My listings depending on the H1 title of the page (determined at time of rendering based on routes)
$().ready(function() {
  if ($('#listing-title')[0].innerHTML.includes('All')) {
    $.ajax({
      method: 'GET',
      url: '/api/listings'
    })
      .done((response) => {

        const $listingsContainer = $('#listings');

        $listingsContainer.empty();

        for (const listing of response.listings) {

          let $listing = `
        <div class="card-body">
            <div class="row border-top border-bottom">
              <div class="col-sm-3">
               <a href="/listings/${listing.id}" class="btn"> 
                <img src="${listing.photo}" class="img-fluid img-thumbnail" alt="..."/>
               </a>
              </div>
          
              <div class="col-sm-6">
                <div class="card-body-right">
                <a href="/listings/${listing.id}" class="btn">   
                <h5 class="card-title">${listing.year} ${listing.make} ${listing.model}</h5>
                </a>
                   <h5 class="card-title">${listing.color}</h5>
                   <p class="card-text">${listing.description}</p>
                </div>
                <div class="card-footer text-muted">
              Posted: ${listing.timestamp}
            </div>
              </div>
               
              <div class="col-sm-3">
              <h5>${listing.price}</h5>
              </div
            </div> 
            
          </div>
        `;

          $($listing).appendTo($listingsContainer);

        }
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
          <div class="card-body">
          <div class="row border-top border-bottom">
            <div class="col-sm-3">
             <a href="/listings/${listing.id}" class="btn"> 
              <img src="${listing.photo}" class="img-fluid img-thumbnail" alt="..."/>
             </a>
            </div>
        
            <div class="col-sm-6">
              <div class="card-body-right">
              <a href="/listings/${listing.id}" class="btn">   
              <h5 class="card-title">${listing.year} ${listing.make} ${listing.model}</h5>
              </a>
                 <h5 class="card-title">${listing.color}</h5>
                 <p class="card-text">${listing.description}</p>
              </div>
              <div class="card-footer text-muted">
            Posted: ${listing.timestamp}
          </div>
            </div>
             
            <div class="col-sm-3">
            <h5>${listing.price}</h5>
            </div
          </div> 
          
        </div>
        `;

          $($listing).appendTo($listingsContainer);

        }
      });
  }
});
