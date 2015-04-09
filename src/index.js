define(function (require) {
  return {
    version: "0.1.0",
    chart: {
      line: require("src/modules/chart/line"),
      area: require("src/modules/chart/area"),
      pie: require("src/modules/chart/pie"),
      scatter : require("src/modules/chart/scatterplot"),
      sunburst: require("src/modules/chart/sunburst"),
      dendrogram: require("src/modules/chart/dendrogram"),
      treemap: require("src/modules/chart/treemap"),
      histogram: require("src/modules/chart/histogram"),
      xyzplot: require("src/modules/chart/xyzplot")
    },
    map: {},
    layout: {
      grid: require("src/modules/layout/grid"),
      split: require("src/modules/layout/split")
    },
    component: {
      axis: require("src/modules/component/axis/axis"),
      clipPath: require("src/modules/component/clipPath/clipPath"),
      chart: require("src/modules/component/chart/chart"),
    },
   element: {
      circle: require("src/modules/element/circle"),
      rect: require("src/modules/element/rect"),
      path: require("src/modules/element/path"),
      line: require("src/modules/element/line")
    }
  };
});
