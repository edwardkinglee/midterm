$().ready(function() {

  $.ajax({
    method: 'GET',
    url: `/api/search`
  })
    .done((response) => {
      const $searchContainer = $('#search');

      $searchContainer.empty();

      console.log('search response', response);

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

});
