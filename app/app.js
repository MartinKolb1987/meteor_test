// // if(Meteor.isServer){
// // }
// var Rooms = new Meteor.Collection("rooms");

// if(Meteor.isClient){
//   // Meteor.startup(function() {
//   //   Session.set("username", "Testnutzer");
//   // });
//   // console.log('is client');
//   // Template.servus.username = function () {
//   //   return Session.get("username");
//   // };
// //   Rooms.insert({name: "Conference Room f"});
//   // console.log(myRooms.length);
//   Meteor.subscribe("rooms");
//   var myRooms = Rooms.find().fetch();
// console.log(myRooms);
// }

// if(Meteor.isServer){
//     Meteor.publish("rooms", function() {
//         return Rooms.find({});
//     });
//     // console.log('isServer');
//     // Rooms = new Meteor.Collection("rooms");
//     Rooms.insert({name: "Conference Room f"});
//     Rooms.insert({name: "Conference Room f"});
//     Rooms.insert({name: "Conference Room f"});
//     // Rooms.insert({name: "Conference Room f"});
//     // Rooms.insert({name: "Conference Room f"});
//     // var myRooms = Rooms.find().fetch();

//     // // Meteor.publish("rooms", function () {
//     // //   return Rooms.find({}).fetch(); // everything
//     // // });
//     // console.log(myRooms.length + '  --- ');
// }