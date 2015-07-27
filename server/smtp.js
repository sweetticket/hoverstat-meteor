Meteor.startup(function () {
  smtp = {
    username: 'ccomotti@gmail.com',
    password: 'becomepopular',
    server:   'smtp.gmail.com',
    port: 25
  };

  // temporarily disabled
  process.env.MAIL_URL = 'smtp://' + encodeURIComponent(smtp.username) + ':' + encodeURIComponent(smtp.password) + '@' + encodeURIComponent(smtp.server) + ':' + smtp.port;
});

