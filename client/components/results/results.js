import posts from "./dummy/posts";

Template.results.helpers({ 
    create: function() { 
        
    }, 
    rendered: function() { 
         
    }, 
    destroyed: function() { 
         
    }, 
    ...posts
}); 

Template.results.events({ 
    'click #foo': function(event, template) { 
         
    } 
}); 
