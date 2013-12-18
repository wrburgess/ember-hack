MassTransit.DashboardsController = Ember.ArrayController.extend({
  actions: {
    createDashboard: function() {
      var title = this.get('newTitle');

      var dashboard = this.store.createRecord('dashboard', {
        title: title,
        published: false
      });

      this.set('newTitle', '');

      dashboard.save();
    }
  }
});