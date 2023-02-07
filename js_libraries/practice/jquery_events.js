"use strict";

$(function() {
  let input;

  $('form').submit(function(e) {
    e.preventDefault();
    input = $(this).find('input[type=text]').val();
    console.log(input);

    $(document).off('keypress').on('keypress', function(e) {
      if (e.key !== input) { return; }
      $('a').trigger('click');
    });

  });

  $('a').click(function(e) {
    e.preventDefault();

    $('div#accordion').slideToggle();
  });

});
