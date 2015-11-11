Template.committee_details.helpers({
    committee: function(){
        return this["committee_name"]
    },
    members: function() {
        return this["members"]
    },
});
