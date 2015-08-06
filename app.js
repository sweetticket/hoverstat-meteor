// // Code to run when the app first starts

// if (Meteor.isServer) {
//   Meteor.startup(function () {
//     // blank
//   });
// }

// if (Meteor.isClient) {
//   Meteor.startup(function () {

//     // after a refresh, Session object is cleared because it's not persistent.
//     try {
//       var bag = JSON.parse(localStorage.getItem("shoppingBag"));
//     } catch (e) {
//       var bag = {};
//     }
//     bag = bag || {};
//     Session.set("shoppingBag", bag);

//     // Stripe
//     Stripe.setPublishableKey('pk_test_8mXtjutkbZVxuyJnjxdiTWXF');
//   });
// }

if (Meteor.isClient) {
  Meteor.startup(function () {

    document.title = "HoverStat";

    return SEO.config({
      title: 'HoverStat',
      meta: {
        'description': "With the press of a button, our drones inspect roofs and record measurements accurate down to 1.5cm in less than 10 minutes. Whether you need to look at the roof for solar, insurance, or roofing purposes, HoverStat is your one-stop solution for roof assessments."
      },
      og: {
        'image': 'http://hoverstat.com/images/logo.png',
        'title': 'HoverStat',
        'type': 'website',
        'url': 'http://hoverstat.com/',
        'site_name': 'HoverStat'
      }
    });
  });
}