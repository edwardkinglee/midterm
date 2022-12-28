/* eslint-disable no-undef */
$().ready(function() {

  $.ajax({
    method: 'GET',
    url: `/api/search`
  })
    .done((response) => {
      const $searchContainer = $('#search');

      $searchContainer.empty();

      for (const car of response.search) {

        let $search = `
        <div class="col">
          <div class="card">
            <img src="${car.photo}" class="card-img-top" alt="...">
            <h5 class="card-header">${car.year} ${car.make} ${car.model}</h5>
            <div class="card-body">
              <h5 class="card-title">${car.price} ${car.color}</h5>
              <p class="card-text">${car.description}</p>
              <a href="/listings/${car.id}" class="btn btn-primary">View listing</a>
            </div>
            <div class="card-footer text-muted">
              Posted: ${car.timestamp}
            </div>
          </div>
        </div>
        `;

        $($search).appendTo($searchContainer);
      }
      
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
