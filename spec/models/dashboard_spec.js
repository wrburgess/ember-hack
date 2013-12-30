describe("Dashboard", function() {
  var subject;

  beforeEach(function() {
    subject = emberDataStore.create("dashboard", {
      title: "Test",
      published: false
    });
  });

  it("has a title", function() {
    expect(subject.title).toEqual("Test");
  });

  it("has published", function() {
    expect(subject.published).toBeFalse();
  });
});