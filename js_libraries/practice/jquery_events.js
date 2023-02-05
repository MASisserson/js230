"use strict";

$(function() {
  $('form').submit(function(e) {
    let input = $(this).find('input[type=text]').text();
    console.log(input);
  });
});
