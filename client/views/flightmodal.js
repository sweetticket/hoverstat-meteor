if (Meteor.isClient) {

	Template.FlightModal.helpers({
		// counter: function () {
		//   return Session.get('counter');
		// }
	});

	Template.FlightModal.rendered = function () {
        // Init select
	    this.$('select').material_select();
	    // Init character counter
	    this.$('input#input_text, textarea#textarea1').characterCounter();

	    $('#flightform').parsley({trigger: 'change'});
	    
	 }

	Template.FlightModal.events({
		'click #flight-submit': function (event, template) {
	      event.preventDefault();
	      var name = $('#name').val();
	      var email = $('#flightemail').val();
	      var phone = $('#phone').val();
	      var addr1 = $('#address1').val();
	      var addr2 = $('#address2').val();
	      var addr3 = $('#address3').val();
	      var msg = $('#message').val();

	      // FIXME: REPLACE ALL OF THIS BELOW

	      //IF SUCCESS:  $('#flight-modal').closeModal();
	      	// success message

	      // if error message exists..

	      //   if ($('.parsley-required').length || $('.parsley-type').length || $('.parsley-error').length || email == "") {
	      //     $('.success-msg').css('opacity', '0');
	      //   } else {

	      //     Meteor.call("createFollower", email, function(err){
	      //       if (err != null){
	      //          $('.success-msg').css('opacity', '0');
	      //         console.log(err.message);
	      //         // var err_text = "<span class='error-msg'>" + err.message + "</span>";
	      //         // $('.result-msg').html(err_text);
	      //       } else {
	      //          $('.success-msg').css('opacity', '1');
	      //         $('#email').val("");
	      //       }
	      //     });

	      // }


	    }
  });

}