Meteor.methods({
  submit_kill: function(killinfo) {
    Verifykills.insert(
        {
            killer: killinfo[0],
            killer_committee: killinfo[1],
            killed: killinfo[2],
            killed_committee: killinfo[3],
            story: killinfo[4]
        },
    );
  },
})
