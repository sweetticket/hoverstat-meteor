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

  },

  deleteFlight: function (flightId) {
      Flights.remove(flightId);
  },
  
});