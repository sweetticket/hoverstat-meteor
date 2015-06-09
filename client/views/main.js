if (Meteor.isClient) {
  // counter starts at 0
  // Session.setDefault('counter', 0);

  Template.Main.helpers({
    // counter: function () {
    //   return Session.get('counter');
    // }
  });

  Template.Main.rendered = function () {
    // Init ScrollSpy
    $('.scrollspy').scrollSpy();

          //jQuery to collapse the navbar on scroll
      $(window).scroll(function() {
          if ($(".navbar").offset().top > 50) {
              $(".navbar-fixed-top").addClass("top-nav-collapse");
          } else {
              $(".navbar-fixed-top").removeClass("top-nav-collapse");
          }
      });

      //jQuery for page scrolling feature - requires jQuery Easing plugin
      $(function() {
          $('a.page-scroll').bind('click', function(event) {
              var $anchor = $(this);
              $('html, body').stop().animate({
                  scrollTop: $($anchor.attr('href')).offset().top
              }, 1500, 'easeInOutExpo');
              event.preventDefault();
          });
      });
  }

  Template.Main.events({
  //   'click button': function () {
  //     // increment the counter when button is clicked
  //     Session.set('counter', Session.get('counter') + 1);
  //   }
   });
}
