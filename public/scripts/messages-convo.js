$().ready(function() {

  const userId = Number($('#user-id')[0].innerText);
  const carId = Number(location.pathname.split('/')[2]);
  const buyerId = Number(location.pathname.split('/')[3]);

  $.ajax({
    method: 'GET',
    url: `/api/messages/car=${carId}&buyer=${buyerId}`
  })
    .done((response) => {

      const messages = response.messages;

      if (messages.length < 1) {
        location.href = `/messages`;
      }

      const $convoHead = $('#convo-head');
      const $messageContainer = $('#messages');

      $messageContainer.empty();

      const $lister = `<span id="lister-id" style="display: none;">${messages[0].lister_id}</span>`;
      $($lister).appendTo($convoHead);

      // if user id = buyer id, align right
      // if not, align left (as the buyer is the other person)

      let username;

      if (userId === buyerId) {
        username = messages[0].lister_username;
      } else {
        username = messages[0].buyer_username;
      }

      const $header = `<h1>Conversation with ${username}</h1>`;

      const $car = `      <div class="card-body mb-3">
      <div class="row border-top border-bottom">
        <div class="col-sm-2">
          <a href="/listings/${messages[0].car_id}" class="btn">
            <img src="${messages[0].photo}" class="img-fluid img-thumbnail" alt="...">
          </a>
        </div>

        <div class="col-sm-5">
          <div class="card-body text-start">
            <a href="/listings/${messages[0].car_id}" class="">
              <h5 class="card-title">${messages[0].year} ${messages[0].make} ${messages[0].model}</h5>
            </a>
            <br>
            <p class="card-text">${messages[0].description} <br>color: ${messages[0].color} <br>${messages[0].body_type}</p>
          </div>
        </div>

        <div class="col-sm-2">
          <h6>${Number(messages[0].kms).toLocaleString('en')} kms</h6>
        </div>

        <div class="col-sm-3">
          <h5>$${Number(messages[0].price).toLocaleString('en')}</h5>
          <p><br><br><br>Posted: ${new Date(messages[0].car_timestamp).toLocaleDateString()} ${new
          Date(messages[0].car_timestamp).toLocaleTimeString([], { timeStyle: 'short' })}</p>

        </div>
      </div>
    </div>`;

      $($header).appendTo($convoHead);
      $($car).appendTo($convoHead);

      for (const message of messages) {

        if (!message.reply) {
          username = message.buyer_username;
        } else {
          username = message.lister_username;
        }

        let $msg = `<div class="card-body">
          ${message.message}
        </div>
        <div class="card-footer">
        ${username} at ${new Date(message.timestamp).toLocaleDateString()} ${new Date(message.timestamp).toLocaleTimeString([], { timeStyle: 'short' })}
        </div>
      </div>`;

        if ((message.buyer_id === userId && !message.reply) || (message.buyer_id !== userId && message.reply)) {
          $msg = `<div class="card w-75 mb-3 text-end align-self-end">` + $msg;
          $($msg).appendTo($messageContainer);
        } else {
          $msg = `<div class="card w-75 mb-3 text-start align-self-start">` + $msg;
          $($msg).appendTo($messageContainer);
        }
      }

      if (messages[0].sold || messages[0].is_deleted) {
        let noReplyText;

        if (messages[0].sold) {
          noReplyText = 'sold';
        } else {
          noReplyText = 'deleted';
        }

        let $noReply = `<h5>This car has been ${noReplyText}.</h5>`;

        $('#reply').empty();
        $($noReply).appendTo($('#reply'));

      }

    });

  $('#new-message').submit((e) => {
    e.preventDefault();

    const message = $('#message').val();
    const listerId = Number($('#lister-id')[0].innerText);

    const values = { userId, carId, listerId, buyerId, message };

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

