MassTransit.DashboardsController = Ember.ArrayController.extend({
  actions: {
    createDashboard: function() {
      console.log("MassTransit.DashboardsController #createDashboard");
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

// MassTransit.DashboardsIndexController = Ember.ArrayController.extend({
//   beforeModel: function() {
//     console.log("dashboard index controller beforeModel");
//     this.modelFor("dashboards");
//   }
// });