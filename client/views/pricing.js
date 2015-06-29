if (Meteor.isClient) {
  Template.PricingInfo.events({
    'click .stripe-btn': function(e) {
      e.preventDefault();

      StripeCheckout.open({
        key: 'pk_test_KHsVP79PU0bxFhp7AaOQANQp',
        amount: 5000, // this is equivalent to $50
        name: 'Pay Now',
        description: 'Order Your Report ($50.00)',
        panelLabel: 'Pay Now',
        token: function(res) {
          stripeToken = res.id;
          console.info(res);
          Meteor.call('chargeCard', stripeToken);
        }
      });
    }
  });
}

if (Meteor.isServer) {
  Meteor.methods({
    'chargeCard': function(stripeToken) {
      check(stripeToken, String);
      var Stripe = StripeAPI('sk_test_bJ3VagV7dg42O0ieMXYdvCH9');

      Stripe.charges.create({
        source: stripeToken,
        amount: 5000, // this is equivalent to $50
        currency: 'usd'
      }, function(err, charge) {
        console.log(err, charge);
      });
    }
  });
}