(function ($) {
  Drupal.behaviors.userFilter = {
    attach: function (context, settings) {
      
      $('.user_filter').hover(
        function(){
          var position = $(this).offset();
          var user = $(this).attr('data-user');
          $('body').append('<div id="' + user + '_info" class="user_info" >Load...</div>');
          $('#' + user + '_info').load('/user/info/ajax/' + user, 'NULL',function(){
            $('.user-picture img').load(function(){
              $('.user_info').addClass('done');
            });
            var id = $(this);
            var ava = setTimeout(function avaLoad(){
              if($('.user_info').hasClass('done')){
                infoPosition(id);
              }
              else{
                setTimeout(avaLoad(), 400);
              }
            }, 400);
            function infoPosition(id){
              var posTop = id.outerHeight(true);
              id.css({
                'position': 'absolute',
                'top': position.top - posTop - 10,
                'left': position.left,
              })
            }
            infoPosition(id);
            $(this).hover(
              function(){
                $(this).addClass('show_info');
              },
              function(){
                $(this).removeClass('show_info');
              }
            );
            $('.user_info').fadeIn();
          });
        },
        function(){
          var user = $(this).attr('data-user');
          
          var timer = setTimeout(function checkHover() {
            if($('.user_info').hasClass('show_info')){
              var timerId = setTimeout(checkHover, 400);
            }
            else{
              $('.user_info').fadeOut().detach();
            }
          }, 400);
        }
      );      
    }
  };
})(jQuery);