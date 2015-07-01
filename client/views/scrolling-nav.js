
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

    //jQuery to collapse the navbar on scroll
    $(window).scroll(function() {
        if ($(".navbar").offset().top > 50) {
            $(".navbar-fixed-top").addClass("top-nav-collapse").addClass("z-depth-1");
        } else {
            $(".navbar-fixed-top").removeClass("top-nav-collapse").removeClass("z-depth-1");
        }
    });

    //jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        $(".active").removeClass('active');
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
  }

  Template.Nav.events({
  //   'click button': function () {
  //     // increment the counter when button is clicked
  //     Session.set('counter', Session.get('counter') + 1);
  //   }
   });
}
