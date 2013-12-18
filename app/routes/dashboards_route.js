MassTransit.DashboardRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('dashboard');
  }
});

MassTransit.DashboardsRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('dashboard');
  }
});