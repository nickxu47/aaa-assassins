Template.committees.helpers({
    committees: function() {
        return Committees.find({}, {sort: {committee_name: 1}});
    }
});

Template.committee_stats.helpers({
    dead_percent: function(dead, members) {
        return String(dead / members * 100) + '%'
    },

    kills_per_death: function(kills, death) {
        if (death == 0) {
            return kills
        }
        return kills/death
    },
})
