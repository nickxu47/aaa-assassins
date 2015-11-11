Template.submitkill.events({
  "submit #new-kill": function(event) {
    event.preventDefault();

    var killer = event.target.killer.value;
    var killer_committee = event.target.killer_committee.value;
    var killed = event.target.killed.value;
    var killed_committee = event.target.killed_committee.value;
    var story = event.target.story.value;

    killinfo = [killer, killer_committee, killed, killed_committee, story]

    Meteor.call("submit_kill", killinfo);

    event.target.killer.value = "";
    event.target.killer_committee.value = "Committee";
    event.target.killed.value = "";
    event.target.killed_committee.value = "Committee";
    event.target.story.value = "";
  }
});
