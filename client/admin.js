Template.admin.helpers({
    verifykills: function() {
        return Verifykills.find({});
    },
    kills: function() {
        return Kills.find({});
    },
});

Template.admin.events({
    "click #accept": function () {
        Meteor.call("acceptkill", this)
    },
    "click #reject": function () {
        Meteor.call("rejectkill", this)
    },
    "click #remove": function () {
        Meteor.call("removekill", this)
    },
    "click #reset": function() {
        Meteor.call("resetEverything")
    }
});
