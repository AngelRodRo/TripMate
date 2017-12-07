Template.searcher.helpers({ 
    create: function() { 
         
    }, 
    rendered: function() { 
         
    }, 
    destroyed: function() { 
         
    }, 
}); 

Template.searcher.events({ 
    'click .search': function(event, template) { 
        event.preventDefault();
        FlowRouter.go("/resultados");
    } 
}); 
