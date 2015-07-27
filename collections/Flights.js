Flights = new Mongo.Collection("flights");

Meteor.methods({
  createFlight: function (name, email, phone, industry, addr1, addr2, addr3, msg) {

    var flight = {
      name: name,
      email: email,
      phone: phone,
      industry: industry,
      address1: addr1,
      address2: addr2,
      address3: addr3,
      message: msg,
      createdAt: new Date()
    };

    Flights.insert(flight);

    var emailStr = "New Flight Request\n" +
        "Name: " + name + "\n" +
        "Email: " + email + "\n" +
        "Phone: " + phone + "\n" +
        "Industry: " + industry + "\n" +
        "Address 1: " + addr1 + "\n" +
        "Address 2: " + addr2 + "\n" +
        "Address 3: " + addr3 + "\n" +
        "Message: " + msg;

    Meteor.call('sendEmail',
            "leanne@hoverstat.com",
            "ccomotti@gmail.com",
            "New Flight Request",
            emailStr);

  },

  deleteFlight: function (flightId) {
      Flights.remove(flightId);
  },
  
});