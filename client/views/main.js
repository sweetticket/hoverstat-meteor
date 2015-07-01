
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
    // Init slider
    $('.slider').slider({full_width: false});
    // Init modal
    $('.modal-trigger').leanModal();
    $('.active').removeClass('active');

  }

  Template.Main.events({
  });

  Template.Products.events({
  //   'click button': function () {
  //     // increment the counter when button is clicked
  //     Session.set('counter', Session.get('counter') + 1);
  //   }

      'mouseover .product-img': function (event, template) {

          var cad_text = "<h2>Aerial CADs Stat</h2><br>" +
                    "<p class='flow-text'>HoverStat provides 3D Aerial CADs with measurements captured by a" +
                      " drone on-site in under 10 minutes.<br><br><strong>Hover over the images above to view descriptions.</strong></p>";
          var crm_text = "<h2>Integrated CRM Solution</h2><br>" +
                      "<p class='flow-text'>An integrated solution that allows contractors to collect leads," +
                      " inspect the roof, and produce an estimate, all within one moblie app.<br><br><strong>Hover over the images above to view descriptions.</strong></p>";
          var estimatestat_text = "<h2>EstimateStat</h2><br>" +
                      "<p class='flow-text'>The estimator contains a rules engine that allows you to produce an" +
                      " estimate with accurate calculations every time.<br><br><strong>Hover over the images above to view descriptions.</strong></p>";
          var erp_text = "<h2>ERP: From Lead to Order</h2><br>" +
                      "<p class='flow-text'>This mobile solution works to bring your business full cycle, from" +
                      " the moment a canvasser knocks on the door to placing the purchase order.<br><br><strong>Hover over the images above to view descriptions.</strong></p>";

          var productID = $(event.target).attr('id');

          $('#products-info').css('opacity', '0');

          switch (productID){
            case "CAD":
              $('#products-info').html(cad_text).animate({
                  opacity: 1
                }, 500);
              break;
            case "CRM":
              $('#products-info').html(crm_text).animate({
                  opacity: 1
                }, 500);
              break;
            case "estimatestat":
              $('#products-info').html(estimatestat_text).animate({
                  opacity: 1
                }, 500);
              break;
            case "ERP":
              $('#products-info').html(erp_text).animate({
                  opacity: 1
                }, 500);
              break;
            default:
              console.log("Mousehover did not match any product.")
              break;
          }
      }
   });

  Template.Subscribe.rendered = function () {
    $('#subscribe-form').parsley({trigger: 'change'});
  }
  
  Template.Subscribe.events({
    'click .subscribe-btn': function (event, template) {
      event.preventDefault();
      var email = $('#email').val();

      // if error message exists..

        if ($('.parsley-required').length || $('.parsley-type').length || $('.parsley-error').length || email == "") {
          $('.success-msg').css('opacity', '0');
        } else {

          Meteor.call("createFollower", email, function(err){
            if (err != null){
               $('.success-msg').css('opacity', '0');
              console.log(err.message);
              // var err_text = "<span class='error-msg'>" + err.message + "</span>";
              // $('.result-msg').html(err_text);
            } else {
               $('.success-msg').css('opacity', '1');
              $('#email').val("");
            }
          });

      }

    },

  });

}
