define(function (require) {
  var eventAPI = require("src/modules/helpers/api/events");

  return function (_, circles) {
    circles.show = typeof _.show !== "undefined" ? _.show : circles.show;
    circles.groupClass = typeof _.groupClass !== "undefined" ? _.groupClass : circles.groupClass;
    circles.circleClass = typeof _.circleClass !== "undefined" ? _.circleClass : circles.circleClass;
    circles.radius = typeof _.radius !== "undefined" ? _.radius : circles.radius;
    circles.fill = typeof _.fill !== "undefined" ? _.fill : circles.fill;
    circles.stroke = typeof _.stroke !== "undefined" ? _.stroke : circles.stroke;
    circles.strokeWidth = typeof _.strokeWidth !== "undefined" ? _.strokeWidth : circles.strokeWidth;

    circles.events = typeof _.events !== "undefined" ? _.events : {};
    circles.events = eventAPI(_, circles.events);

    return circles;
  };
});