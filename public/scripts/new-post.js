$().ready(function() {

  $('#mileage').on('input', () => {
    let value = $('#mileage').val();
    const mileageFormat = new Intl.NumberFormat('en-US', {
      style: 'decimal',
      maximumFractionDigits: 0,
      roundingIncrement: 100,
      roundingMode: "ceil"
    });
    value = mileageFormat.format(value);
    $('#mileage-label').text(`${value} kms`);
  });

  $('#price').on('input', () => {
    let value = $('#price').val();
    const priceFormat = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
      roundingIncrement: 100,
      roundingMode: "ceil"
    });
    value = priceFormat.format(value);
    $('#price-label').text(`${value}`);
  });

  $('#consumption').on('input', () => {
    let value = $('#consumption').val();
    if (Number(value) === 0) {
      value = 'N/A';
    } else {
      value += ' L/100km';
    }
    $('#consumption-label').text(`${value}`);
  });

  $('#new-post').submit((e) => {
    e.preventDefault();

    // Create values object for all form fields
    const values = {};

    $.each($('#new-post').serializeArray(), function(i, field) {
      values[field.name] = field.value;
    }); // input fields added using serializeArray

    if (Number(values.consumption) !== 0) {
      values.consumption += ' L/100km';
    } else {
      values.consumption = 'N/A';
    }

    $.ajax({
      method: 'POST',
      url: '/listings/new',
      data: values
    })
      .done((response) => {

        $('#new-post').trigger("reset");
        location.href = `/listings/${response.id}`;

      });
  });

});
