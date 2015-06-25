Followers = new Mongo.Collection("followers");

Meteor.methods({
  createFollower: function (email) {

    var follower = {
      email: email,
      createdAt: new Date()
    };

    Followers.insert(follower);

  },

  deleteFollower: function (followerID) {
      Followers.remove(followerID);
  },
  
});