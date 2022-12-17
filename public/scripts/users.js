$(() => {
  $('#fetch-users').on('click', () => {
    $.ajax({
      method: 'GET',
      url: '/api/users'
    })
    .done((response) => {
      const $usersList = $('#users');
      $usersList.empty();
      console.log(response);

      for(const user of response.users) {
        $(`<li class="user">`).text(user.username).appendTo($usersList);
      }
    });
  });
});
