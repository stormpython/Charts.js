define(function (require) {
  var d3 = require("d3");

  return function boxplot() {
    var gClass = "box";
    var gTransform = null;

    // Box
    var box = {
      width: 20,
      height: null,
      y: null,
      boxClass: "range",
      fill: "white",
      stroke: "black",
      strokeWidth: "2px"
    };

    // Range
    var range = {
      x1: 0,
      x2: 0,
      y1: null,
      y2: null,
      rangeClass: "range",
      stroke: "black",
      strokeWidth: "4px"
    };

    // Max
    var max = {
      y1: null,
      y2: null,
      maxClass: "max",
      stroke: "black",
      strokeWidth: "4px"
    };

    // Min
    var min = {
      y1: null,
      y2: null,
      minClass: "min",
      stroke: "black",
      strokeWidth: "4px"
    };

    // Median
    var median = {
      y1: 0,
      y2: 0,
      medianClass: "median",
      stroke: "darkgrey",
      strokeWidth: "4px"
    };

    function component(selection) {
      selection.each(function () {
        var boxX = - (box.width / 2);
        var maxX1 = - (box.width / 2);
        var maxX2 = box.width / 2;
        var minX1 = - (box.width / 2);
        var minX2 = box.width / 2;
        var medianX1 = - (box.width / 2);
        var medianX2 = box.width / 2;

        var g = d3.select(this).selectAll("g.box")
          .data(function (d) { return d; })
          .enter().append("g")
          .attr("class", gClass);

        g.attr("transform", gTransform)
          .each(function (d, i) {
            var g = d3.select(this);

            g.append("line")
              .attr("class", range.rangeClass)
              .attr("x1", range.x1)
              .attr("x2", range.x2)
              .attr("y1", range.y1)
              .attr("y2", range.y2)
              .style("stroke", range.stroke)
              .style("stroke-boxWidth", range.strokeWidth);

            g.append("line")
              .attr("class", max.maxClass)
              .attr("x1", maxX1)
              .attr("x2", maxX2)
              .attr("y1", max.y1)
              .attr("y2", max.y2)
              .style("stroke", max.stroke)
              .style("stroke-boxWidth", max.strokeWidth);

            g.append("line")
              .attr("class", min.minClass)
              .attr("x1", minX1)
              .attr("x2", minX2)
              .attr("y1", min.y1)
              .attr("y2", min.y2)
              .style("stroke", min.stroke)
              .style("stroke-boxWidth", min.strokeWidth);

            g.append("rect")
              .attr("class", box.boxClass)
              .attr("x", boxX)
              .attr("y", box.y)
              .attr("width", box.width)
              .attr("height", box.height)
              .style("fill", box.fill)
              .style("stroke", box.stroke)
              .style("stroke-boxWidth", box.strokeWidth);

            g.append("line")
              .attr("class", median.medianClass)
              .attr("x1", medianX1)
              .attr("x2", medianX2)
              .attr("y1", median.y1)
              .attr("y2", median.y2)
              .style("stroke", median.stroke)
              .style("stroke-boxWidth", median.strokeWidth);
          });
      });
    }

    component.gClass = function (_) {
      if (!arguments.length) { return gClass; }
      gClass = _;
      return component;
    };

    component.gTransform = function (_) {
      if (!arguments.length) { return gTransform; }
      gTransform = _;
      return component;
    };

    component.box = function (_) {
      if (!arguments.length) { return box; }
      box.width = typeof _.width !== "undefined" ? _.width : box.width;
      box.height = typeof _.height !== "undefined" ? _.height : box.height;
      box.y = typeof _.y !== "undefined" ? _.y : box.y;
      box.boxClass = typeof _.boxClass !== "undefined" ? _.boxClass : box.boxClass;
      box.fill = typeof _.fill !== "undefined" ? _.fill : box.fill;
      box.stroke = typeof _.stroke !== "undefined" ? _.stroke : box.stroke;
      box.strokeWidth = typeof _.strokeWidth !== "undefined" ? _.strokeWidth : box.strokeWidth;
      return component;
    };

    component.range = function (_) {
      if (!arguments.length) { return range; }
      range.x1 = typeof _.x1!== "undefined" ? _.x1: range.x1;
      range.x2 = typeof _.x2!== "undefined" ? _.x2 : range.x2;
      range.y1 = typeof _.y1 !== "undefined" ? _.y1 : range.y1;
      range.y2 = typeof _.y2 !== "undefined" ? _.y2 : range.y2;
      range.rangeClass = typeof _.rangeClass !== "undefined" ? _.rangeClass : range.rangeClass;
      range.stroke = typeof _.stroke !== "undefined" ? _.stroke : range.stroke;
      range.strokeWidth = typeof _.strokeWidth !== "undefined" ? _.strokeWidth : range.strokeWidth;
      return component;
    };

    component.max = function (_) {
      if (!arguments.length) { return max; }
      max.y1 = typeof _.y1 !== "undefined" ? _.y1 : max.y1;
      max.y2 = typeof _.y2 !== "undefined" ? _.y2 : max.y2;
      max.maxClass = typeof _.maxClass !== "undefined" ? _.maxClass : max.maxClass;
      max.stroke = typeof _.stroke !== "undefined" ? _.stroke : max.stroke;
      max.strokeWidth = typeof _.strokeWidth !== "undefined" ? _.strokeWidth : max.strokeWidth;
      return component;
    };

    component.min = function (_) {
      if (!arguments.length) { return min; }
      min.y1 = typeof _.y1 !== "undefined" ? _.y1 : min.y1;
      min.y2 = typeof _.y2 !== "undefined" ? _.y2 : min.y2;
      min.minClass = typeof _.minClass !== "undefined" ? _.minClass : min.minClass;
      min.stroke = typeof _.stroke !== "undefined" ? _.stroke : min.stroke;
      min.strokeWidth = typeof _.strokeWidth !== "undefined" ? _.strokeWidth : min.strokeWidth;
      return component;
    };

    component.median = function (_) {
      if (!arguments.length) { return median; }
      median.y1 = typeof _.y1 !== "undefined" ? _.y1 : median.y1;
      median.y2 = typeof _.y2 !== "undefined" ? _.y2 : median.y2;
      median.medianClass = typeof _.medianClass !== "undefined" ? _.medianClass : median.medianClass;
      median.stroke = typeof _.stroke !== "undefined" ? _.stroke : median.stroke;
      median.strokeWidth = typeof _.strokeWidth !== "undefined" ? _.strokeWidth : median.strokeWidth;
      return component;
    };

    return component;
  };
});