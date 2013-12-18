MassTransit.Dashboard = DS.Model.extend({
  title: DS.attr('string'),
  published: DS.attr('boolean')
});

MassTransit.Dashboard.FIXTURES = [
  {
    id: 1,
    title: "Dashboard 1",
    published: true
  },
  {
    id: 2,
    title: "Dashboard 2",
    published: false
  },
  {
    id: 3,
    title: "Dashboard 3",
    published: true
  }
];