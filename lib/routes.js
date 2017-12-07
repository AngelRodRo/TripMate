FlowRouter.route('/', {
  name: 'index',
  action(params, queryParams) {
    BlazeLayout.render("applicationLayout", { main: 'main' } ); 
  }
});

FlowRouter.route('/resultados', {
  name: 'results',
  action(params, queryParams) {
    BlazeLayout.render("applicationLayout", { main: 'results' } ); 
  }
});

FlowRouter.notFound = {
    action: function() {
      BlazeLayout.render("applicationLayout", { main: "notFound"})
    }
};