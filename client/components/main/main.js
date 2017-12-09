Template.main.helpers({ 
    create: function() { 
         
    }, 
    rendered: function() { 
         
    }, 
    destroyed: function() { 
         
    }, 
}); 

Template.main.events({ 
    'click .login-fb': function(event, template) { 
        event.preventDefault();
        
        Meteor.loginWithFacebook({
            requestPermissions: ['user_friends', 'public_profile', 'email']
          }, (err) => {
            if (err) {
                console.log(err)
              // handle error
            } else {
              // successful login!
            }
          });
    } 
}); 
