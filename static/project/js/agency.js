// Agency Theme JavaScript

(function($) {
    "use strict"; // Start of use strict

    // multi language
    $('.selectpicker').selectpicker();
    $('.selectpicker').on('change', function(){
      var selected = $(this).find("option:selected").val();
      if(selected === 'English'){
        window.location.href = "index_en.html";
      } else{
        window.location.href = "index.html";
      }
    });

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function(){
            $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

})(jQuery); // End of use strict
