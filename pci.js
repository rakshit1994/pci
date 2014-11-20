if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault("counter", 0);

  Template.hello.helpers({
    counter: function () {
      return Session.get("counter");
    }
  });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set("counter", Session.get("counter") + 1);
    }
  });

  var connection = new RTCMultiConnection();

    connection.session = {
        audio: true,
        video: true
    };
    
    connection.onstream = function(e) {
        document.body.appendChild(e.mediaElement);
    };

    connection.connect()


    Template.foo.events({
      'click #init': function () {
        console.log("entered");
        this.disabled = true;
        connection.open();
        console.log("connection initiated");
      }
    });

    Template.room.events({
      'click #openroom' : function(){
        new RTCMultiConnection().open();
      }
    });

    Template.room1.events({
      'click #joinroom' : function(){
        new RTCMultiConnection().connect();
      }
     });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
