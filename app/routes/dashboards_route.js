MassTransit.DashboardRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('dashboard', params.dashboard_id);
  }
});

MassTransit.DashboardsRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('dashboard');
  }
});

MassTransit.DashboardsIndexRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('dashboard');
  }
});