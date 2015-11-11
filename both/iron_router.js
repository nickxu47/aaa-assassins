Router.configure({
    layoutTemplate: 'main'
});

Router.route('/', function(){
    this.render('home');
}, {
  name: 'home'
});

Router.route('/admin_please_dont_touch', function() {
  this.render('admin');
}, {
  name: 'admin'
});

Router.route('/:_id', function() {
  this.render('committee_details', {
    data: function() {
      var currentCommittee = this.params._id;
      return Committees.findOne({_id:currentCommittee});
    }
  });
}, {
  name: 'committee_details'
});
