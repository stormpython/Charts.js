define(function (require) {
  describe("Component: Events tests", function () {
    var eventsFunction = require("src/modules/component/events/events");
    var d3fixture = require("fixtures/fixture");
    var remove = require("fixtures/remove");
    var totalListenerCount;
    var listeners;
    var fixture;
    var events;

    beforeEach(function () {
      fixture = d3fixture;
      events = eventsFunction();
      listeners = {
        click: [function (e) { console.log(e); }],
        brush: [function (brush) { return brush.extent(); }],
        mouseover: [function (e, d) { return d; }]
      };
      totalListenerCount = 3;
    });

    afterEach(function () {
      remove(fixture);
    });

    it("should return a function", function () {
      chai.assert.isFunction(events);
    });

    describe("listeners API", function () {
      afterEach(function () {
        events.listeners({});
      });

      it("should return the listeners object", function () {
        chai.assert.deepEqual(events.listeners(), {});
      });

      it("should set the listeners object", function () {
        events.listeners(listeners); // Add listeners
        chai.assert.deepEqual(events.listeners(), listeners);
      });
    });
  });
});