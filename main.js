$(document).ready(function() {
    "use strict";
  
    $('ul.nav > li').click(function(e) {
      
      $('ul.nav > li').removeClass('active');
      $(this).addClass('active');
    });
  });