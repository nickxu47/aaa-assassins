Meteor.methods({
  acceptkill: function (killinfo) {
    Kills.insert(killinfo);
    killed_committee = killinfo["killed_committee"]
    killer_committee = killinfo["killer_committee"]
    killer = killinfo["killer"]
    killed = killinfo["killed"]
    Committees.update(
        {
            'committee_name': killed_committee,
            'members.name': killed
        },
        {
            $inc: { 'num_dead': 1 },
            $set: {
                'members.$.killedby' : killer,
                'members.$.alive' : 'no'
            },
        }
    );
    Committees.update(
        {
            'committee_name': killer_committee,
            'members.name': killer
        },
        {
            $inc: {
                'kills': 1,
                'members.$.kills': 1
            },
        }
    );
    Verifykills.remove(killinfo);
  },

  rejectkill: function (killinfo) {
    Verifykills.remove(killinfo);
  },

  removekill: function (killinfo) {
    killed_committee = killinfo["killed_committee"]
    killer_committee = killinfo["killer_committee"]
    killer = killinfo["killer"]
    killed = killinfo["killed"]
    Committees.update(
        {
            'committee_name': killed_committee,
            'members.name': killed
        },
        {
            $inc: { 'num_dead': -1 },
            $set: {
                'members.$.killedby' : '' ,
                'members.$.alive' : 'yes'
            },
        }
    );
    Committees.update(
        {
            'committee_name': killer_committee,
            'members.name': killer
        },
        {
            $inc: {
                'kills': -1,
                'members.$.kills': -1
            },
        }
    );
    Kills.remove(killinfo);
  },

});
