Meteor.methods({
    resetCommittees: function() {
        var initialCommittees =
        [
            {
                committee_name: "Social",
                num_members: 10,
                num_dead: 0,
                kills: 0,
                members: [
                    {name: "Andrew Fang", killedby: "", alive: "yes", kills: 0},
                    {name: "Kevin Jiao", killedby: "", alive: "yes", kills: 0},
                    {name: "Kevin Kang", killedby: "", alive: "yes", kills: 0},
                    {name: "Sojin Kim", killedby: "", alive: "yes", kills: 0},
                    {name: "Jason Ai", killedby: "", alive: "yes", kills: 0},
                    {name: "Cindy Mo", killedby: "", alive: "yes", kills: 0},
                    {name: "Kelly Hong", killedby: "", alive: "yes", kills: 0},
                    {name: "Youngha Hwang", killedby: "", alive: "yes", kills: 0},
                    {name: "Brenda Lo", killedby: "", alive: "yes", kills: 0},
                    {name: "Yoonji Lu", killedby: "", alive: "yes", kills: 0}
                ]
            },
            {
                committee_name: "Issues",
                num_members: 7,
                num_dead: 0,
                kills: 0,
                members: [
                    {name: "Alan Liu", killedby: "", alive: "yes", kills: 0},
                    {name: "Andy Wang", killedby: "", alive: "yes", kills: 0},
                    {name: "Angela Fei", killedby: "", alive: "yes", kills: 0},
                    {name: "Hansmeet Singh", killedby: "", alive: "yes", kills: 0},
                    {name: "Jenny Yang", killedby: "", alive: "yes", kills: 0},
                    {name: "Ryan Ong", killedby: "", alive: "yes", kills: 0},
                    {name: "Sandy Li", killedby: "", alive: "yes", kills: 0}
                ]
            },
            {
                committee_name: "Internal Relations",
                num_members: 7,
                num_dead: 0,
                kills: 0,
                members: [
                    {name: "Jessica Zhao", killedby: "", alive: "yes", kills: 0},
                    {name: "Emily Mak", killedby: "", alive: "yes", kills: 0},
                    {name: "Jihoon Park", killedby: "", alive: "yes", kills: 0},
                    {name: "Kelly Zhao", killedby: "", alive: "yes", kills: 0},
                    {name: "Sam Paul", killedby: "", alive: "yes", kills: 0},
                    {name: "Shirley Guan", killedby: "", alive: "yes", kills: 0},
                    {name: "Carol Wu", killedby: "", alive: "yes", kills: 0}
                ]
            },
            {
                committee_name: "Historian",
                num_members: 9,
                num_dead: 0,
                kills: 0,
                members: [
                    {name: "Angel Wong", killedby: "", alive: "yes", kills: 0},
                    {name: "Jasper Loo", killedby: "", alive: "yes", kills: 0},
                    {name: "Karen Kuang", killedby: "", alive: "yes", kills: 0},
                    {name: "Litzy Yang", killedby: "", alive: "yes", kills: 0},
                    {name: "Jason Ai", killedby: "", alive: "yes", kills: 0},
                    {name: "Qizhuang Huang", killedby: "", alive: "yes", kills: 0},
                    {name: "Sophia Li", killedby: "", alive: "yes", kills: 0},
                    {name: "Wendy Ooi", killedby: "", alive: "yes", kills: 0},
                    {name: "Yitian Zhang", killedby: "", alive: "yes", kills: 0}
                ]
            },
            {
                committee_name: "Development",
                num_members: 11,
                num_dead: 0,
                kills: 0,
                members: [
                    {name: "Kevin Kim", killedby: "", alive: "yes", kills: 0},
                    {name: "Claire Ma", killedby: "", alive: "yes", kills: 0},
                    {name: "Eric Leung", killedby: "", alive: "yes", kills: 0},
                    {name: "Ian Chick", killedby: "", alive: "yes", kills: 0},
                    {name: "Jeffrey Huang", killedby: "", alive: "yes", kills: 0},
                    {name: "Jenny Zong", killedby: "", alive: "yes", kills: 0},
                    {name: "Naing Lin", killedby: "", alive: "yes", kills: 0},
                    {name: "Robin Park", killedby: "", alive: "yes", kills: 0},
                    {name: "Timlan Wong", killedby: "", alive: "yes", kills: 0},
                    {name: "Will Chen", killedby: "", alive: "yes", kills: 0},
                    {name: "Zion Lee", killedby: "", alive: "yes", kills: 0}
                ]
            },
            {
                committee_name: "Community Service",
                num_members: 10,
                num_dead: 0,
                kills: 0,
                members: [
                    {name: "Renee Lin", killedby: "", alive: "yes", kills: 0},
                    {name: "Brenda Zhang", killedby: "", alive: "yes", kills: 0},
                    {name: "Charles Li", killedby: "", alive: "yes", kills: 0},
                    {name: "Daniel Mao", killedby: "", alive: "yes", kills: 0},
                    {name: "Joyce Lu", killedby: "", alive: "yes", kills: 0},
                    {name: "Joyce Shin", killedby: "", alive: "yes", kills: 0},
                    {name: "Kathleen Hsu", killedby: "", alive: "yes", kills: 0},
                    {name: "Kenny Nguyen", killedby: "", alive: "yes", kills: 0},
                    {name: "Ruowen Li", killedby: "", alive: "yes", kills: 0},
                    {name: "Tiffany Young", killedby: "", alive: "yes", kills: 0}
                ]
            },
        ];
        Committees.remove({})
        _.each( initialCommittees, function ( committee ) { Committees.insert( committee ); });
    },
    resetKills: function() {
        Kills.remove({})
    },
});
