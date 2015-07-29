
if (Meteor.isClient) {
  // counter starts at 0
  // Session.setDefault('counter', 0);

  Template.Nav.helpers({
    // counter: function () {
    //   return Session.get('counter');
    // }
  });

  Template.Nav.rendered = function () {

    // Mobile collapse
    $('.button-collapse').sideNav();
    $("li.active").removeClass('active');

    //jQuery to collapse the navbar on scroll
    $(window).scroll(function() {
        $("li.active").removeClass('active');
        if ($(".navbar").offset().top > 50) {
            $(".navbar-fixed-top").addClass("top-nav-collapse").addClass("z-depth-1");
        } else {
            $(".navbar-fixed-top").removeClass("top-nav-collapse").removeClass("z-depth-1");
        }
    });

    //jQuery for page scrolling feature - requires jQuery Easing plugin
    // $('a.page-scroll').bind('click', function(event) {
    //   event.preventDefault();
    //     $(".active").removeClass('active');
    //     var $anchor = $(this);
    //     debugger
    //     $('html, body').stop().animate({
    //         scrollTop: $($anchor.attr('href')).offset().top
    //     }, 1500, 'easeInOutExpo');
        
    // });

  }

  Template.Nav.events({
  //   'click button': function () {
  //     // increment the counter when button is clicked
  //     Session.set('counter', Session.get('counter') + 1);
  //   }
      "click .page-scroll": function(e, template) {
        e.preventDefault();
        $(".active").removeClass('active');
        var $anchor = $(e.target);
        debugger

        if ($anchor.is('img')){

          $('html, body').stop().animate({
            scrollTop: $('#page-top').offset().top
          }, 1500, 'easeInOutExpo');

        } else {
          $('html, body').stop().animate({
              scrollTop: $($anchor.attr('href')).offset().top
          }, 1500, 'easeInOutExpo');
        }
      }

   });
}
