define(function (require) {
  var d3 = require("d3");
  var builder = require("builder");
  var scalator = require("src/modules/helpers/scaletor");

  return function scale() {
    // Private variables
    var type = d3.scale.linear();
    var domain = null;
    var rangeType = "range";
    var rangeValue = null;
    var padding = 0;
    var innerPadding = 0;
    var outerPadding = 0;
    var opts = {};

    function component(data) {
      if (domain) { type.domain(domain.call(null, data)); }

      if (typeof type[rangeType] === "function" && rangeValue) {
        if (rangeType === "rangePoints" || rangeType === "rangeRoundPoints") {
          type[rangeType](rangeValue, padding);
        } else if (rangeType === "rangeBands" || rangeType === "rangeRoundBands") {
          type[rangeType](rangeValue, innerPadding, outerPadding);
        } else {
          type[rangeType](rangeValue);
        }
      }

      return builder(opts, type);
    }

    // Public API
    component.type = function (_) {
      if (!arguments.length) { return type; }
      type = scalator(_);
      return component;
    };

    component.domain = function (_) {
      if (!arguments.length) { return domain; }
      domain = d3.functor(_);
      return component;
    };

    component.rangeType = function (_) {
      if (!arguments.length) { return rangeType; }
      rangeType = typeof _ === "string" ? _ : rangeType;
      return component;
    };

    component.rangeValue = function (_) {
      if (!arguments.length) { return rangeValue; }
      rangeValue = Array.isArray(_) ? _ : rangeValue;
      return component;
    };

    component.padding = function (_) {
      if (!arguments.length) { return padding; }
      padding = typeof _ === "number" ? _ : padding;
      return component;
    };

    component.innerPadding = function (_) {
      if (!arguments.length) { return innerPadding; }
      innerPadding = typeof _ === "number" ? _ : innerPadding;
      return component;
    };

    component.outerPadding = function (_) {
      if (!arguments.length) { return outerPadding; }
      outerPadding = typeof _ === "number" ? _ : outerPadding;
      return component;
    };

    component.options = function (_) {
      if (!arguments.length) { return opts; }
      if (arguments.length === 1 && typeof _ === "string") { return opts[_]; }
      opts = typeof _ === "object" ? _ : opts;
      return component;
    };

    return component;
  };
});
