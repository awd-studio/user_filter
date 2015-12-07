(function ($) {
  Drupal.behaviors.userFilter = {
    attach: function (context, settings) {
      $('.user_filter').hover(
        function(){
          var user = $(this).attr('data-user');
          $(this).append('<div id="' + user + '_info" class="user_info">Loading...</div>');
          $(this).children('.user_info').fadeIn();
          $(this).children('.user_info').load('/user/info/ajax/' + user);
        },
        function(){
          $(this).children('.user_info').fadeOut();
          $('.user_info').detach();
        }
      );
    }
  };
})(jQuery);