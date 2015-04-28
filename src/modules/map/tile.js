define(function (require) {
  var d3 = require("d3");

  return function tile() {
    var width = 500;
    var height = 500;
    var projection = d3.geo.mercator();
    var scale = 120;
    var translate = [width / 2, height / 2];
    var centerProjection = [12, 42];
    var tileLink = function (d) {
      return "http://" + ["a", "b", "c", "d"][Math.random() * 4 | 0] +
        ".tiles.mapbox.com/v3/examples.map-zgrqqx0w/" + d[2] + "/" + d[0] + "/" + d[1] + ".png";
    };

    function map(selection) {
      selection.each(function (data, i) {
        var tile = d3.geo.tile()
          .size([width, height]);

        projection.scale(scale).translate(translate);

        var center = projection(centerProjection);

        var path = d3.geo.path()
          .projection(projection);

        var zoom = d3.behavior.zoom()
          .scale(projection.scale() * 2 * Math.PI)
          .translate([width - center[0], height - center[1]])
          .on("zoom", redraw);

        var svg = d3.select(this).append("svg")
          .attr("width", width)
          .attr("height", height);

        var g = svg.append("g")
          .attr("id", "tiles");

        svg.call(zoom);
        redraw();

        function redraw() {
          var tiles = tile
            .scale(zoom.scale())
            .translate(zoom.translate())();

          g.attr("transform", "scale(" + tiles.scale + ") translate(" + tiles.translate + ")");

          var image = g.selectAll("image")
            .data(tiles, function (d) { return d; });

          image.exit().remove();

          image.enter().append("image")
            .attr("xlink:href", tileLink)
            .attr("width", 1)
            .attr("height", 1)
            .attr("x", function (d) { return d[0]; })
            .attr("y", function (d) { return d[1]; });
        }
      });
    }

    map.width = function (_) {
      if (!arguments.length) { return width; }
      width = _;
      return map;
    };

    map.height = function (_) {
      if (!arguments.length) { return height; }
      height = _;
      return map;
    };

    map.projection = function (_) {
      if (!arguments.length) { return projection; }
      projection = _;
      return map;
    };

    map.scale = function (_) {
      if (!arguments.length) { return scale; }
      scale = _;
      return map;
    };

    map.centerProjection = function (_) {
      if (!arguments.length) { return centerProjection; }
      centerProjection = _;
      return map;
    };

    map.tileLink = function (_) {
      if (!arguments.length) { return tileLink; }
      tileLink = _;
      return map;
    };

    return map;
  };
});