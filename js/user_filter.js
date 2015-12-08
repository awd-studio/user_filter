(function ($) {
  Drupal.behaviors.userFilter = {
    attach: function (context, settings) {
      
      $('.user_filter').hover(
        function(){
          var user = $(this).attr('data-user');
          $(this).append('<div id="' + user + '_info" class="user_info">Load...</div>');
          $(this).children('.user_info').load('/user/info/ajax/' + user);
          $(this).children('.user_info').fadeIn(400);
        },
        function(){
          $(this).children('.user_info').fadeOut();
          $('.user_info').detach();
        }
      );
      
      
      /*
      $('*[data-poload]').hover(function(){
        var e = $(this);
        var id = e.attr('id');
        e.off('hover');
        //e.hover();
        $.get(e.data('poload'),function(d){
          e.popover({
            content: d, 
            placement: 'top',
            html: true,
            delay: { "show": 600, "hide": 300 },
            container: id,
          }).popover('show');
        });
      });
      */
      
    }
  };
})(jQuery);