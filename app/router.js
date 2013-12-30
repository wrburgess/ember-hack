MassTransit.Router.map(function () {
  this.resource('dashboards', { path: '/' }, function(){
    this.resource('dashboard', { path: '/dashboard/:dashboard_id' });
  });

  this.resource('weather', { path: '/weather' }, function(){
  });
});