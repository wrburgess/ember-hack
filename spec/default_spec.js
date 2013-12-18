describe('JavsScript addition operator', function() {
    it('adds two number together', function(){
        expect(1 + 2).toEqual(3);
    });
});

describe("Dashboard", function() {
  it("has a title", function() {
    debugger
    dashboard = MassTransit.Dashboard.create({ name: "Test", published: false });
    expect(dashboard.name).toEqual("Test");
  });
});