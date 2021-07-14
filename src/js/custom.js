$(document).ready(function() {
    $('.image_click .image').click(function() {
      $(this).siblings('.image').removeClass('active');
      $(this).addClass('active');
      $('.image_div').find('img').css('left', '100%');
      $('.image_div').find('img').eq($(this).index()).css('left', '0');

    });
  });