(function ($) {
  Drupal.behaviors.userFilterPopup = {
    attach: function (context, settings) {
      
      $('.user_filter').hover(
        function(){
          var position = $(this).offset();
          var user = $(this).attr('data-user');
          $('body').append('<div id="' + user + '_info" class="user_info" >Load...</div>');
          var id = $('#' + user + '_info');
          id.load('/user/info/ajax/' + user);
          var posTop = id.outerHeight(true);
          id.css({
            'bottom': $(document).height() - position.top - 10,
            'left': position.left,
          }).fadeIn();
          id.hover(
            function(){
              $(this).addClass('show_info');
            },
            function(){
              $(this).removeClass('show_info');
            }
          );
        },
        function(){          
          var timer = setTimeout(function checkHover() {
            if($('.user_info').hasClass('show_info')){
              var timerId = setTimeout(checkHover, 400);
            }
            else{
              clearTimeout(timer);
              $('.user_info').fadeOut().detach();
            }
          }, 400);
        }
      );      
    }
  };
})(jQuery);