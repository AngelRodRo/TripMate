Meteor.methods({ 
    create(data) { 
        User.insert(data);
    }
});