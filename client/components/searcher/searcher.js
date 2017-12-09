Template.searcher.helpers({ 
    create: function() { 
        
    }, 
    rendered: function() { 
        console.log("created");
    }, 
    destroyed: function() { 
         
    }, 
}); 

Template.searcher.events({ 
    'click .search': function(event, template) { 
        event.preventDefault();
    },
    'submit #post-form'(e, template) {
        e.preventDefault();
        FlowRouter.go("/resultados");
    }
}); 
