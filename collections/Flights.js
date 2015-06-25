Flights = new Mongo.Collection("flights");

Meteor.methods({
  createFlight: function (firstname, lastname, email, phone, industry, addr1, addr2, addr3, msg) {

    var flight = {
      firstname: firstname,
      lastname: lastname,
      email: email,
      phone: phone,
      industry: industry,
      address1: add1,
      address2: addr2,
      address3: addr3,
      message: msg,
      createdAt: new Date()
    };

    Flights.insert(flight);

  },

  deleteFlight: function (flightId) {
      Flights.remove(flightId);
  },
  
});