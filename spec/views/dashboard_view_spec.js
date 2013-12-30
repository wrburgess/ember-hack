describe("MassTransit.DashboardView", function() {
  var subject;
  var dashboard;
  var container;

  beforeEach(function() {
    MassTransit.reset();
  });

  it("visits the dashboard page", function() {
    visit("/dashboard/1");
    andThen(function(){
      debugger
      expect(find("td:contains('Dashboard 1')").length).toEqual(1);
    });
  });

  xit("renders the dashboard template", function() {
    Ember.run(function() {
      subject.createChildView(MassTransit.DashboardView);
      expect(subject.templateName).toEqual("dashboard/dashboard");
    });
  });

  xit("displays the dashboard's title", function() {
    Ember.run(function() {
      dashboard.set("title", "Chris");
      subject.createElement();
      expect(subject.$().text()).toMatch(/Chris/);
    });
  });
});