if (Meteor.isClient) {

	Template.FlightModal.helpers({
		// counter: function () {
		//   return Session.get('counter');
		// }
	});

	Template.FlightModal.rendered = function () {
        // Init select
	    $('select').material_select(); // This doesn't work..
	    // Init character counter
	    $('input, textarea').characterCounter();

	    // $('#flightform').parsley({trigger: 'change'});
	    
	 }

	Template.FlightModal.events({
		'click #flight-submit': function (event, template) {
	      event.preventDefault();
	      var name = $('#name').val();
	      var email = $('#flightemail').val();
	      var phone = $('#phone').val();
	      var industry = $('#industry').val();
	      var addr1 = $('#addr1').val();
	      var addr2 = $('#addr2').val();
	      var addr3 = $('#addr3').val();
	      var msg = $('#msg').val();

	      // FIXME: REPLACE ALL OF THIS BELOW

	      //IF SUCCESS:  $('#flight-modal').closeModal();
	      	// success message

	      // if error message exists..

	        if (phone == "" || addr1 == "" || name == "" || email == "" || industry == null) {
	        	$('.modal-msg').css('display', 'block');
	        	 $('#flight-modal').animate({ scrollTop: 0 }, 'slow');
	        } else {
	        	$('.modal-msg').css('display', 'none');
	          	Meteor.call("createFlight", name, email, phone, industry, addr1, addr2, addr3, msg, function(err){
	            if (err != null){
	              console.log(err.message);
	            } else {
	            	$('#name').val("");
					$('#flightemail').val("");
					$('#phone').val("");
					$('#industry').val("");
					$('#addr1').val("");
					$('#addr2').val("");
					$('#addr3').val("");
					$('#msg').val("");
					$('.valid').removeClass('valid');
					$('#flight-modal .active').removeClass('active');
	                $('#flight-modal').closeModal();
	                Materialize.toast('<span class="yellow-text">Your form has been submitted. You will be contacted by a representative shortly.</span>', 5000, 'flight-toast');
	            }
	          });

	      }


	    }
  });

}