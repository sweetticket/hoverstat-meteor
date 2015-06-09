
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
    // Init ScrollSpy
    $('.scrollspy').scrollSpy();

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
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });


    // Change active nav li on scroll

    var aChildren = $("nav li").children(); // find the a children of the list items
    var aArray = []; // create the empty aArray
    var hasFocus = function (selector) { $(selector).is(':focus'); };

        for (var i=0; i < aChildren.length; i++) {    
            var aChild = aChildren[i];
            var ahref = $(aChild).attr('href');
            aArray.push(ahref);
        } // this for loop fills the aArray with attribute href values

        $(window).scroll(function(){
            var windowPos = $(window).scrollTop(); // get the offset of the window from the top of page
            var windowHeight = $(window).height(); // get the height of the window
            var docHeight = $(document).height();

            for (var i=0; i < aArray.length; i++) {
                var theID = aArray[i];
                var divPos = $(theID).offset().top; // get the offset of the div from the top of page
                var divHeight = $(theID).height(); // get the height of the div in question
                if (windowPos >= divPos && windowPos < (divPos + divHeight)) {
                    debugger
                    $("a[href='" + theID + "']").parent().focus();
                } else {
                    debugger
                    $("a[href='" + theID + "']").parent().focusout();
                }
            }

            if(windowPos + windowHeight == docHeight) {
                debugger
                if (!hasFocus("nav:last-child li")) {
                    var navActiveCurrent = $("a:focus").attr("href");
                    $("a[href='" + navActiveCurrent + "']").parent().removeClass("active");
                    $("nav:last-child li").focus();
                }
            }
        });
    
  }

  Template.Nav.events({
  //   'click button': function () {
  //     // increment the counter when button is clicked
  //     Session.set('counter', Session.get('counter') + 1);
  //   }
   });
}
