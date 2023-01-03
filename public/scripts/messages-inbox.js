$().ready(function() {

  const userId = Number($('#user-id')[0].innerText);

  $.ajax({
    method: 'GET',
    url: `/api/messages/user/${userId}`
  })
    .done((response) => {

      const $inboxOutgoingContainer = $('#inbox-outgoing');
      const $inboxIncomingContainer = $('#inbox-incoming');
      const $inboxArchiveContainer = $('#inbox-archive');

      $inboxOutgoingContainer.empty();
      $inboxIncomingContainer.empty();
      $inboxArchiveContainer.empty();

      for (const thread of response.messages) {

        let seller;

        if (Number(thread.lister_id) === userId) {
          seller = 'YOUR LISTING';
        } else {
          seller = thread.lister_username;
        }

        let introText;

        if (!thread.sold && !thread.is_deleted) {
          if (thread.reply) { // if the last message was a reply FROM SELLER to BUYER
            if (Number(thread.lister_id) === userId) { // and you are the seller
              introText = `<span class="text-black-50 fst-italic">Waiting for ${thread.buyer_username}'s response to your message.</span>`;
            } else {
              introText = `<span class="alert alert-warning fw-bolder" role="alert">${thread.lister_username} is waiting for a response from you about their listing.</span>`;
            }
          } else { // if last message was sent TO the seller
            if (Number(thread.lister_id) === userId) { // and you are the seller
              introText = `<span class="alert alert-warning fw-bolder" role="alert">${thread.buyer_username} is waiting for a response from you about your car.</span>`;
            } else {
              introText = `<span class="text-black-50 fst-italic">Waiting for ${thread.lister_username}'s resposne to your message.</span>`;
            }
          }
        } else {
          introText = '';
        }

        let $thread = `
        <a class="card-body" href="/messages/${thread.car_id}/${thread.buyer_id}">
          <div class="row border-top border-bottom">
            <div class="col-sm-3">
                <img src="${thread.photo}"
                  class="img-fluid img-thumbnail" alt="...">
              <h5 class="card-title">${thread.year} ${thread.make} ${thread.model}</h5>
              <h6>$150,000 | 55,000 kms</h6>
              <h7>Seller: ${seller}</h7>
            </div>

            <div class="col-sm-9">
            <h6><b>Last message:</b> ${thread.message}</h6>
            <br />
            <h7>${introText}</h7>
            </div>

          </div>
        </a>`;

        if (!thread.sold && !thread.is_deleted) {
          if (Number(thread.lister_id) === userId) {
            $($thread).appendTo($inboxIncomingContainer);
          } else {
            $($thread).appendTo($inboxOutgoingContainer);
          }
        } else {
          $($thread).appendTo($inboxArchiveContainer);
        }

      }
    });

  $('#msg-all').click(() => {
    $('#msg-all').addClass('active');
    $('#msg-out').removeClass('active');
    $('#msg-in').removeClass('active');
    $('#msg-old').removeClass('active');

    $('#outgoing-container').show();
    $('#incoming-container').show();
    $('#archive-container').show();
  });

  $('#msg-out').click(() => {
    $('#msg-all').removeClass('active');
    $('#msg-out').addClass('active');
    $('#msg-in').removeClass('active');
    $('#msg-old').removeClass('active');

    $('#outgoing-container').show();
    $('#incoming-container').hide();
    $('#archive-container').hide();
  });

  $('#msg-in').click(() => {
    $('#msg-all').removeClass('active');
    $('#msg-out').removeClass('active');
    $('#msg-in').addClass('active');
    $('#msg-old').removeClass('active');

    $('#outgoing-container').hide();
    $('#incoming-container').show();
    $('#archive-container').hide();
  });

  $('#msg-old').click(() => {
    $('#msg-all').removeClass('active');
    $('#msg-out').removeClass('active');
    $('#msg-in').removeClass('active');
    $('#msg-old').addClass('active');

    $('#outgoing-container').hide();
    $('#incoming-container').hide();
    $('#archive-container').show();
  });

});
