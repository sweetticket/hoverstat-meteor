if (Meteor.isClient) {  

  Template.Layout.events({
    'click .user-name-link': function (ev, tem) {
      $('.user-nav-menu').toggle();
    },
  });

  Template.Layout.rendered = function () {
     (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
      })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
  }

  Template.Layout.helpers({
    
    // numBaggedItems: function () {
    //   var bag = Session.get("shoppingBag") || {};
    //   var count = 0;
    //   for (var p_id in bag) {
    //     count = count + bag[p_id];
    //   }
    //   return count;
    // }

  });

  // Client side configurations

}